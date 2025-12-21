"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "../components/about/Navbar";
import HeroSection from "../components/about/Hero";
import OurStory from "../components/about/OurStory";
import OurProcess from "../components/about/OurProcess";
import Teams from "../components/about/Teams";
import Location from "../components/about/Location";
import WorkForce from "../components/about/WorkForce";
import Footer from "../components/about/Footer";

export default function Home() {
  const [showHero, setShowHero] = useState(true);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        {showHero && <HeroSection key="hero" />}
      </AnimatePresence>
      <OurStory />
      <OurProcess />
      <Teams />
      <Location />
      <WorkForce />
      <Footer />
    </>
  );
}
