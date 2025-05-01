import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  BookOpen,
  Award,
  Globe,
  ChevronRight,
  Play,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const VisionMission = () => {
  const [activeVideo, setActiveVideo] = useState(false);

  return (
    <section className="py-20 bg-white relative overflow-hidden px-20">
      <div className="absolute top-0 left-0 w-full h-24 to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-200">
              <span className="text-sm font-medium text-blue-600">
                Edemy's Vision Mission
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-6">Vision</h2>
            <p className="text-gray-600 mb-4">
              To empower your future with courses designed to fit your choice.
              We envision a world where quality education is accessible to
              everyone, regardless of their background or location, creating
              opportunities for personal and professional growth.
            </p>
            <h2 className="text-3xl font-bold mb-6">Mission</h2>
            <p className="text-gray-600 mb-6">
              We bring together world-class instructors, interactive content,
              and a supportive community to help you achieve your personal and
              professional goals. Our platform is designed to make learning
              highly effective and engaging.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="relative"
          >
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 mix-blend-multiply z-10"></div>

              {!activeVideo && (
                <div
                  className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer"
                  onClick={() => setActiveVideo(true)}
                >
                  <div className="h-20 w-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-blue-600 ml-1" />
                  </div>
                </div>
              )}

              {activeVideo && (
                <div className="absolute inset-0 z-20 bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://youtube.com/embed/MnOLdKowejE?si=r1dYd9_YqBreLkAB?autoplay=1"
                    title="Edemy Story"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <button
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/80"
                    onClick={() => setActiveVideo(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              )}
            </div>

            <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-lg overflow-hidden shadow-lg rotate-6 hidden md:block"></div>

            <div className="absolute -top-6 -left-6 h-32 w-32 rounded-lg overflow-hidden shadow-lg -rotate-6 hidden md:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
