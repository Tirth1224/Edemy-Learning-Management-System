import React, { useRef } from "react";
import Hero from "../../components/student/Hero";
import Companies from "../../components/student/Companies";
import CoursesSection from "../../components/student/CoursesSection";
import TestimonialsSection from "../../components/student/TestimonialsSection";
import CallToAction from "../../components/student/CallToAction";
import Footer from "../../components/student/Footer";
import Logger from "../../components/Logger";

const Home = () => {
  const topRef = useRef(null);
  return (
    <div
      className="flex flex-col items-center space-y-7 text-center"
      ref={topRef}
      id="top"
    >
      <Hero />
      <div className="block sm:hidden ">
        <Logger />
      </div>
      <Companies />
      <CoursesSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
