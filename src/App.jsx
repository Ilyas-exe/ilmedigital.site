import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

function App() {
  return (
    <div className="antialiased text-jet bg-white">
      <Header />
      <main>
        <Hero />
        <AnimatedSection><ProblemSolution /></AnimatedSection>
        <AnimatedSection><Services /></AnimatedSection>
        <AnimatedSection><ServiceDetail /></AnimatedSection>
        <AnimatedSection><Portfolio /></AnimatedSection>
        <AnimatedSection><Process /></AnimatedSection>
        <AnimatedSection><Contact /></AnimatedSection>
      </main>
      <Footer />
    </div>
  )
}

export default App;