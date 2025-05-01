import React from "react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="bg-gradient-to-b from-cyan-100/70 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            A Student's Vision for{" "}
            <span className="text-blue-600">Modern Learning</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Developed as a college project over 3 months, Edemy represents our
            commitment to revolutionizing online education through innovative
            technology and user-centered design.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
              <Link
                to="https://github.com/Tirth1224/Edemy-Learning-Management-System"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Link>
            </button>
            <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors">
              <Link to="https://github.com/Tirth1224/Edemy-Learning-Management-System/blob/main/README.md">
                Read Documentation
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
