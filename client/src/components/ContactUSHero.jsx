import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const ContactUSHero = () => {
  return (
    <section className="bg-gradient-to-b from-cyan-100/70 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-blue-600">Contact Us</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We're here to help you succeed in your learning journey. Reach out
            to us with any questions or concerns.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
              <HashLink smooth to="/contact#contact" rel="noopener noreferrer">
                Any Suggestions?
              </HashLink>
            </button>
            <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors">
              <HashLink smooth to="/contact#faqs">
                Any Queries?
              </HashLink>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUSHero;
