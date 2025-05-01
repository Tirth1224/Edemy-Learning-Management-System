import React from "react";
import Footer from "./student/Footer";
import { useClerk, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import AboutHero from "./AboutHero";
import OurStory from "./OurStory";
import OurJourney from "./OurJourney";
import OurValues from "./OurValues";
import Stats from "./Stats";
import AboutMeSection from "./AboutMe";
import CTA from "./CTA";

const About = () => {
  return (
    <>
      <AboutHero />
      <OurStory />
      <OurJourney />
      <OurValues />
      <Stats />
      <AboutMeSection />
      <CTA />
      <Footer />
    </>
  );
};

export default About;
