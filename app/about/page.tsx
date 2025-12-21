"use client";

import { AnimatePresence } from "framer-motion";

import Navbar from "../components/about/Navbar";
import Hero from "../components/about/Hero";
import OurStory from "../components/about/OurStory";
import OurProcess from "../components/about/OurProcess";
import Teams from "../components/about/Teams";
import Location from "../components/about/Location";
import WorkForce from "../components/about/WorkForce";
import Footer from "../components/about/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Animate Hero */}
      <AnimatePresence mode="wait">
        <Hero />
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
