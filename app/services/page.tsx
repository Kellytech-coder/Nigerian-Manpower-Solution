import Navbar from '../components/services/Navbar';
import Header from '../components/services/Header';
import WhatWeOffer from '../components/services/WhatWeOffer';
import SpecializedServices from '../components/services/SpecializedServices';
import IndustriesWeServe from '../components/services/IndustriesWeServe';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <WhatWeOffer />
      <SpecializedServices />
      <IndustriesWeServe />
    </>
  );
}
