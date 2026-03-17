"use client";

import { useReveal } from "@/components/useReveal";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Platform from "@/components/Platform";
import Veratrace from "@/components/Veratrace";
import VeraflowSA from "@/components/VeraflowSA";
import Outcomes from "@/components/Outcomes";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  useReveal();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Industries />
        <Platform />
        <Veratrace />
        <VeraflowSA />
        <Outcomes />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
