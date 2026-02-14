import Navbar from "../components/career/Navbar";
import Hero from "../components/career/Hero";
import LayoutSection from "../components/career/LayoutSection";
import WhyChooseUs from "../components/career/WhyChooseUS";
import CTA from "../components/industries/CTA";
import Footer from "../components/industries/Footer"



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
     <LayoutSection />
      <WhyChooseUs />
      {/* <CTA /> */}
      {/* <Footer /> */}
    </>
  );
}
