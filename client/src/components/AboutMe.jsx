import profilePic from "../assets/tirth.jpg";
import React from "react";
import { ArrowRight } from "lucide-react";

const AboutMeSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-200">
            <span className="text-sm font-medium text-blue-600">
              About My Journey
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Meet Tirth Patel</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A passionate developer dedicated to building innovative educational
            platforms and meaningful web experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto">
          {/* Profile Card - Centered with Social Icons */}
          <div className="bg-white p-4 rounded-xl text-center shadow-lg hover:shadow-2xl transition-shadow max-w-xs mx-auto">
            <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
              <img
                src={profilePic}
                alt="Tirth Patel"
                className="object-cover h-full w-full rounded-full"
              />
            </div>
            <h3 className="text-lg font-bold mb-1">Tirth Patel</h3>
            <p className="text-blue-600 font-medium mb-2 text-sm">
              Full Stack Developer
            </p>
            <p className="text-gray-600 mb-3 text-sm">
              Creating intuitive and dynamic educational platforms with modern
              technologies and user-centric design.
            </p>
            <div className="flex justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/tirth-patel-b90b1622a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/Tirth1224"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-blue-50 text-gray-700 hover:bg-blue-100 transition-colors"
                aria-label="GitHub Profile"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="#"
                className="p-1.5 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                aria-label="View more"
              >
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Introduction Text */}
          <div className="text-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Hello! 👋</h3>
            <p className="mb-4">
              I'm Tirth Patel, the developer behind Edemy. With expertise in
              React, Tailwind CSS, Node.js, and MongoDB, I'm passionate about
              creating educational solutions that make learning accessible to
              everyone.
            </p>
            <p className="mb-4">
              My journey started in early 2025 as part of my final-year capstone
              project. What began as a solo initiative has evolved into a fully
              functional prototype that reflects real-world development
              standards, completed and deployed within just 3 months.
            </p>
            <a
              href="https://github.com/Tirth1224"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors group"
            >
              View My Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
