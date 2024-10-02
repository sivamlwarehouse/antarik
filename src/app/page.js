"use client"


import AboutUs from "./aboutus/aboutus";
import CardsAntarik from "./cards/Global_Antarik";
import DigitalTwins from "./digitaltwins/digitaltwins";
import Expert from "./experts/expert";
import HeroSection from "./hero-section/hero-section";
import OurWorks from "./ourworks/ourworks";
import Solutions from "./solutions/solutions";
import Head from "next/head";
import Footer from "./footer/footer"
import { useState, useEffect } from "react"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [transitionActive, setTransitionActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTransitionActive(true); // Trigger the CSS transition
      setTimeout(() => {
        setShowSplash(false); // Remove the splash screen after the transition completes
      }, 2000); // Match the CSS transition duration
    }, 1000); // Display splash screen for 3 seconds before starting transition
  }, []);


  return (
    <main className="overflow-x-hidden">
      {/* {showSplash && (
        <div className={`splash-screen ${transitionActive ? 'hide' : ''}`} style={{position: 'fixed', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2em'}}>
          {animateText("Antarik Space")}
        </div>
      )} */}

      <Head>
        <title>Antarik Space</title>
        <link rel="icon" href="./favicon.ico" />
        <meta charset="UTF-8" />
        <meta name="description" content="Explore Antarik Space, where we harness Earth observation and weather data to enhance decision-making. Our mission is to revolutionize how businesses and organizations leverage data from satellite constellations and weather forecasts. Discover the power of data-driven insights fueled by innovation, collaboration, and impact." />
      </Head>
      <HeroSection />
      <AboutUs />
      <CardsAntarik />
      <Expert />
      <Solutions />
      <OurWorks />
      <DigitalTwins />
      <Footer />
    </main>
  );
}

function animateText(text) {
  return text.split("").map((letter, index) => {
    if (letter === " ") {
      // Handle spaces specially
      return <span key={index} className="fade-in space" style={{ animationDelay: `${0.1 * index}s` }}>&nbsp;</span>;
    }
    return (
      <span key={index} className="fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
        {letter}
      </span>
    );
  });
}

