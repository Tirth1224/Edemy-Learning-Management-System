import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";
import Footer from "./student/Footer";
import ContactUSHero from "./ContactUSHero";
import VisionMission from "./VisionMission";
import OurService from "./OurService";
import ContactStats from "./ContactStats";
import Faqs from "./Faqs";
import Contact from "./Contact";

const ContactForm = () => {
  return (
    <>
      <ContactUSHero />
      <VisionMission />
      <OurService />
      <ContactStats />
      <Faqs />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactForm;
