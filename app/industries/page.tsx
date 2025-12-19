import Navbar from "../components/industries/Navbar";
import Hero from "../components/industries/Hero";
import IndustryCategory from "../components/industries/IndustryCategory";
import ServiceModel from "../components/industries/ServiceModel";
import WhyChooseUs from "../components/industries/WhyChooseUs";
import CTA from "../components/industries/CTA";
import Footer from "../components/industries/Footer"



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
     <IndustryCategory />
        <ServiceModel /> 
      <WhyChooseUs />
      <CTA />
      <Footer />
    </>
  );
}
