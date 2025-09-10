import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased text-jet">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <ServiceDetail />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;