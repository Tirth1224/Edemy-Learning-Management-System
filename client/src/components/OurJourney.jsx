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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const OurJourney = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-200">
            <span className="text-sm font-medium text-blue-600">
              My Journey
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Milestones That Define Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From my humble beginnings to becoming a global education platform,
            here's how my journey unfolded.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100 z-0"></div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative z-10"
          >
            {[
              {
                year: "Month 1",
                title: "Project Inception",
                description:
                  "Started with initial research, requirement gathering, and creating wireframes for the learning management system.",
              },
              {
                year: "Month 1.5",
                title: "Design Phase",
                description:
                  "Completed UI/UX design, created component library, and finalized the technical architecture.",
              },
              {
                year: "Month 2",
                title: "Core Development",
                description:
                  "Implemented core features including user authentication, course management, and content delivery system.",
              },
              {
                year: "Month 2.5",
                title: "Advanced Features",
                description:
                  "Added interactive elements, progress tracking, and assessment modules to enhance learning experience.",
              },
              {
                year: "Month 3",
                title: "Testing & Refinement",
                description:
                  "Conducted thorough testing, gathered user feedback, and made improvements based on user experience.",
              },
              {
                year: "Final Week",
                title: "Project Completion",
                description:
                  "Successfully delivered the final project with documentation and presentation to faculty and peers.",
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className={`flex items-center justify-between mb-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  }`}
                >
                  <div className="text-blue-600 font-bold text-xl mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>

                <div className="z-10 flex-shrink-0">
                  <div className="h-10 w-10 rounded-full border-4 border-blue-50 bg-blue-500 shadow-lg"></div>
                </div>

                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
