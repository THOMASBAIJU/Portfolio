
import Layout from './components/Layout';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import RevealOnScroll from './components/ui/RevealOnScroll';

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
