import Navbar from '../components/how-it-work/Navbar';
import Hero from '../components/how-it-work/Hero';
import HowItWork from '../components/how-it-work/HowItWork';
import ValuePropotional from '../components/how-it-work/ValuePropotional';
import CTA from '../components/how-it-work/CTA';
import OurProcess from '../components/how-it-work/OurProcess';
import Hire from '../components/how-it-work/Hire';
import Footer from '../components/how-it-work/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWork />
      <ValuePropotional/>
      <CTA />
      <OurProcess />
      <Hire />
      <Footer />
    </>
  );
}
