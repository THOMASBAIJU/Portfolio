import { useEffect, useRef } from 'react';

/* ── Types ──────────────────────────────────────────────────── */
interface Star {
    x: number;
    y: number;
    z: number;
    vx: number;
    vy: number;
    radius: number;
    alpha: number;
    twinkleSpeed: number;
    twinkleDir: number;
}

interface Sparkle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    alpha: number;
    size: number;
    rotation: number;
    rotSpeed: number;
}

const STAR_COUNT = 220;
const SENTINEL = -9999;

function rnd(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

function makeStar(w: number, h: number): Star {
    const z = rnd(0.08, 1);
    return {
        x: rnd(0, w), y: rnd(0, h), z,
        vx: rnd(-0.06, 0.06) * z,
        vy: rnd(-0.04, 0.08) * z,
        radius: rnd(0.4, 1.8) * z,
        alpha: rnd(0.4, 1),
        twinkleSpeed: rnd(0.003, 0.012),
        twinkleDir: Math.random() > 0.5 ? 1 : -1,
    };
}

/* ── Draw helpers ───────────────────────────────────────────── */
function drawStar4(ctx: CanvasRenderingContext2D, cx: number, cy: number, outerR: number, innerR: number, rot: number) {
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
        const angle = (Math.PI / 4) * i + rot;
        const r = i % 2 === 0 ? outerR : innerR;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
}

/* ── Sub-renderers (decomposed for clarity) ─────────────────── */
function renderStars(ctx: CanvasRenderingContext2D, stars: Star[], w: number, h: number) {
    const palette = ['rgba(34,211,238,', 'rgba(255,255,255,', 'rgba(192,132,252,', 'rgba(147,197,253,'];
    for (const s of stars) {
        s.alpha += s.twinkleSpeed * s.twinkleDir;
        if (s.alpha >= 1) { s.alpha = 1; s.twinkleDir = -1; }
        if (s.alpha <= 0.2) { s.alpha = 0.2; s.twinkleDir = 1; }
        s.x += s.vx; s.y += s.vy;
        if (s.x < -2) s.x = w + 2; else if (s.x > w + 2) s.x = -2;
        if (s.y < -2) s.y = h + 2; else if (s.y > h + 2) s.y = -2;

        const ci = s.z < 0.35 ? 3 : s.z < 0.65 ? 0 : (Math.random() > 0.5 ? 1 : 0);
        const col = palette[ci];

        if (s.radius > 1.1) {
            const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius * 4);
            g.addColorStop(0, `${col}${(s.alpha * 0.6).toFixed(2)})`);
            g.addColorStop(1, `${col}0)`);
            ctx.beginPath(); ctx.arc(s.x, s.y, s.radius * 4, 0, Math.PI * 2);
            ctx.fillStyle = g; ctx.fill();
        }
        ctx.beginPath(); ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${col}${s.alpha.toFixed(2)})`; ctx.fill();
    }
}

function renderSparkles(ctx: CanvasRenderingContext2D, sparkles: Sparkle[]) {
    for (let i = sparkles.length - 1; i >= 0; i--) {
        const sp = sparkles[i];
        sp.x += sp.vx; sp.y += sp.vy; sp.vy += 0.04;
        sp.alpha -= 0.028; sp.rotation += sp.rotSpeed; sp.size *= 0.97;

        if (sp.alpha <= 0) { sparkles.splice(i, 1); continue; }

        const bloom = ctx.createRadialGradient(sp.x, sp.y, 0, sp.x, sp.y, sp.size * 3);
        bloom.addColorStop(0, `rgba(255,255,255,${(sp.alpha * 0.45).toFixed(2)})`);
        bloom.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.beginPath(); ctx.arc(sp.x, sp.y, sp.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = bloom; ctx.fill();

        ctx.save();
        ctx.globalAlpha = sp.alpha;
        drawStar4(ctx, sp.x, sp.y, sp.size, sp.size * 0.35, sp.rotation);
        ctx.fillStyle = 'rgba(255,255,255,1)'; ctx.fill();
        ctx.restore();
    }
}

function renderCursorHead(ctx: CanvasRenderingContext2D, mx: number, my: number, rot: number) {
    const R = 11, r = 4;
    const g = ctx.createRadialGradient(mx, my, 0, mx, my, R * 3.5);
    g.addColorStop(0, 'rgba(255,255,255,0.55)');
    g.addColorStop(0.4, 'rgba(200,230,255,0.25)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.beginPath(); ctx.arc(mx, my, R * 3.5, 0, Math.PI * 2);
    ctx.fillStyle = g; ctx.fill();

    ctx.save();
    drawStar4(ctx, mx, my, R, r, rot);
    ctx.fillStyle = 'rgba(255,255,255,0.95)'; ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,0.45)'; ctx.lineWidth = 0.8;
    for (let a = 0; a < Math.PI; a += Math.PI / 4) {
        const angle = a + rot;
        ctx.beginPath();
        ctx.moveTo(mx + Math.cos(angle) * (R + 4), my + Math.sin(angle) * (R + 4));
        ctx.lineTo(mx - Math.cos(angle) * (R + 4), my - Math.sin(angle) * (R + 4));
        ctx.stroke();
    }
    ctx.restore();
}

/* ── Component ──────────────────────────────────────────────── */
export default function StarBackground() {
    const bgCanvasRef = useRef<HTMLCanvasElement>(null);
    const cursorCanvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const bgCanvas = bgCanvasRef.current;
        const cursorCanvas = cursorCanvasRef.current;
        if (!bgCanvas || !cursorCanvas) return;

        const bgCtx = bgCanvas.getContext('2d');
        const cursorCtx = cursorCanvas.getContext('2d');
        if (!bgCtx || !cursorCtx) return;

        let animId: number;
        let stars: Star[] = [];
        const sparkles: Sparkle[] = [];

        let mouseX = SENTINEL, mouseY = SENTINEL;
        let prevX = SENTINEL, prevY = SENTINEL;   // stays SENTINEL until first move
        let headRot = 0;

        /* Resize */
        const resize = () => {
            bgCanvas.width = window.innerWidth;
            bgCanvas.height = window.innerHeight;
            cursorCanvas.width = window.innerWidth;
            cursorCanvas.height = window.innerHeight;
            stars = Array.from({ length: STAR_COUNT }, () => makeStar(bgCanvas.width, bgCanvas.height));
        };
        resize();

        // Signal to CSS that the custom canvas cursor is live — hides the native cursor
        document.documentElement.classList.add('custom-cursor-active');

        /* Mouse tracking */
        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            // On first move, seed prevX/Y so delta = 0 (prevents initial burst)
            if (prevX === SENTINEL) { prevX = mouseX; prevY = mouseY; }
        };
        window.addEventListener('mousemove', onMouseMove, { passive: true });

        /* Main loop */
        const draw = () => {
            const { width, height } = bgCanvas;
            bgCtx.clearRect(0, 0, width, height);
            cursorCtx.clearRect(0, 0, width, height);

            /* Render ambient stars to background canvas */
            renderStars(bgCtx, stars, width, height);

            /* Render cursor and sparkles to foreground canvas */
            if (mouseX !== SENTINEL) {
                const dx = mouseX - prevX;
                const dy = mouseY - prevY;
                const speed = Math.sqrt(dx * dx + dy * dy);
                const emitCount = Math.min(Math.floor(speed / 5) + 1, 5);

                for (let i = 0; i < emitCount; i++) {
                    sparkles.push({
                        x: mouseX + rnd(-4, 4),
                        y: mouseY + rnd(-4, 4),
                        vx: rnd(-1.2, 1.2),
                        vy: rnd(-1.5, 0.3),
                        alpha: rnd(0.7, 1),
                        size: rnd(2, 5),
                        rotation: rnd(0, Math.PI),
                        rotSpeed: rnd(-0.08, 0.08),
                    });
                }
                prevX = mouseX;
                prevY = mouseY;

                renderSparkles(cursorCtx, sparkles);

                headRot += 0.04;
                renderCursorHead(cursorCtx, mouseX, mouseY, headRot);
            }

            animId = requestAnimationFrame(draw);
        };

        draw();

        window.addEventListener('resize', resize);
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouseMove);
            document.documentElement.classList.remove('custom-cursor-active');
        };
    }, []);

    return (
        <>
            {/* Background ambient stars (sits behind UI) */}
            <canvas
                ref={bgCanvasRef}
                className="fixed inset-0 w-full h-full pointer-events-none z-0"
                aria-hidden="true"
            />
            {/* Foreground cursor and sparkles (sits above UI) */}
            <canvas
                ref={cursorCanvasRef}
                className="fixed inset-0 w-full h-full pointer-events-none z-[9999]"
                aria-hidden="true"
            />
        </>
    );
}
