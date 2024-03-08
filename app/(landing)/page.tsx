"use client";

import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import Collaboration from "./components/Collaboration";
import ButtonGradient from "@/public/assets/svg/ButtonGradient";

const LandingPage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default LandingPage;
