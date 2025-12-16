import Navbar from "../components/about/Navbar";
import Hero from "../components/about/Hero";
import OurStory from "../components/about/OurStory";
import OurProcess from "../components/about/OurProcess";
import Teams from "../components/about/Teams";
import Location from "../components/about/Location";
import WorkForce from "../components/about/WorkForce";
import Footer from "../components/about/Footer"
// import Testimonials from "./components/landing-page/Testimonials";
// // import Logo from "./components/landing-page/Logo";
// import WorkForceBenefits from "./components/landing-page/WorkForceBenefits";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurStory />
       <OurProcess />
      <Teams />
      <Location />
      <WorkForce />
      <Footer />
      {/* <Testimonials /> */}
      {/* <Logo /> */}
      {/* <WorkForceBenefits /> */}
    </>
  );
}
