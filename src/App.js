import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import StandardSection from './sections/StandardSection';
import TestimonialSection from './sections/TestimonialSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection />
      <ServicesSection />
      <StandardSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}

export default App;
