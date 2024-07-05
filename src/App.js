import './App.css';
import Navbar from './Navbar';
import HeroSection from './sections/herosection/HeroSection';
import ServicesSection from './sections/ourservicessection/ServicesSection';
import StandardSection from './sections/standardssection/StandardSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection />
      <ServicesSection />
      <StandardSection />
    </div>
  );
}

export default App;
