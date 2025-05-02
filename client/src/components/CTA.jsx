import React from "react";
import { Link } from "react-router-dom";

import { assets } from "../assets/assets";
import { useClerk, useUser } from "@clerk/clerk-react";

const CTA = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  return (
    <section className="py-20 bg-white text-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-black mb-8">
            Whether you're a student looking to enhance your skills or an
            educator wanting to share knowledge, Edemy LMS is the perfect
            platform for you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md mx-auto">
            {user ? (
              <a
                href="#"
                className="w-full sm:w-auto text-center bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                Get Started
              </a>
            ) : (
              <button
                onClick={() => openSignIn()}
                className="w-full sm:w-auto text-center bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                Get Started
              </button>
            )}

            <button className="w-full sm:w-auto flex justify-center items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300">
              Learn more{" "}
              <img
                src={assets.arrow_icon}
                alt="arrow_icon"
                className="w-4 h-4"
              />
            </button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Free Trial", value: "14 Days" },
              { label: "Courses Access", value: "Unlimited" },
              { label: "Support", value: "24/7" },
              { label: "Money-back Guarantee", value: "30 Days" },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-bold mb-1">{feature.value}</div>
                <div className="text-black text-sm">{feature.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
