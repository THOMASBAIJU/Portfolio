
import Layout from './components/Layout';
import { ScrollProgressBar, BackToTop } from './components/ui/PageExtras';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import RevealOnScroll from './components/ui/RevealOnScroll';

function App() {
  return (
    <>
      <ScrollProgressBar />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyber-black focus:text-cyber-cyan focus:border focus:border-cyber-cyan focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <Layout>
        <main id="main-content">
          <Hero />
          <RevealOnScroll id="projects" delay={0.2}>
            <BentoGrid />
          </RevealOnScroll>
          <RevealOnScroll id="skills" delay={0.2}>
            <Skills />
          </RevealOnScroll>
          <RevealOnScroll id="about" delay={0.2}>
            <About />
          </RevealOnScroll>
          <RevealOnScroll id="contact" delay={0.2}>
            <Contact />
          </RevealOnScroll>
        </main>
      </Layout>
      <BackToTop />
    </>
  );
}

export default App;
