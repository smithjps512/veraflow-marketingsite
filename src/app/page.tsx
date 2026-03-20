"use client";

import { useReveal } from "@/components/useReveal";
import Nav from "@/components/nav/Nav";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import Pipeline from "@/components/sections/Pipeline";
import Capture from "@/components/sections/Capture";
import TrueYield from "@/components/sections/TrueYield";
import Scorecard from "@/components/sections/Scorecard";
import SA from "@/components/sections/SA";
import Personas from "@/components/sections/Personas";
import Pricing from "@/components/sections/Pricing";
import Demo from "@/components/sections/Demo";
import Footer from "@/components/sections/Footer";

export default function Home() {
  useReveal();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Pipeline />
        <Capture />
        <TrueYield />
        <Scorecard />
        <SA />
        <Personas />
        <Pricing />
        <Demo />
      </main>
      <Footer />
    </>
  );
}
