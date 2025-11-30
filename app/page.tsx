import Header from "./components/landing-page/Header";
import Hero from "./components/landing-page/Hero";
import Services from "./components/landing-page/Services";
import TrustBlock from "./components/landing-page/TrustBlock";
import Sectors from "./components/landing-page/Sectors";
import Process from "./components/landing-page/Process";
import Testimonials from "./components/landing-page/Testimonials";
import Logo from "./components/landing-page/Logo";
import WorkForceBenefits from "./components/landing-page/WorkForceBenefits";
import Footer from "./components/landing-page/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
       <TrustBlock />
      <Sectors />
      <Process />
      <Testimonials />
      <Logo />
      <WorkForceBenefits />
      <Footer />
    </>
  );
}
