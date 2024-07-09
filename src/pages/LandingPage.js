import React from "react";
import Navbar from "../Navbar";
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import StandardSection from "../sections/StandardSection";
import TestimonialSection from "../sections/TestimonialSection";
import Footer from "../Footer";

const LandingPage = () => {
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
 
export default LandingPage;