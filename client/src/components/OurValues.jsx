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

const OurValues = () => {
  return (
    <section className="py-20 bg-white px-20">
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
              What We Stand For
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do at Edemy, from course
            development to platform design.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            {
              icon: <Users className="h-10 w-10 text-blue-600" />,
              title: "Community",
              description:
                "We foster a supportive learning environment where students and educators can connect and grow together.",
            },
            {
              icon: <BookOpen className="h-10 w-10 text-blue-600" />,
              title: "Quality",
              description:
                "We're committed to delivering high-quality educational content that meets the needs of modern learners.",
            },
            {
              icon: <Award className="h-10 w-10 text-blue-600" />,
              title: "Excellence",
              description:
                "We strive for excellence in everything we do, from course design to customer support.",
            },
            {
              icon: <Globe className="h-10 w-10 text-blue-600" />,
              title: "Accessibility",
              description:
                "We believe education should be accessible to everyone, regardless of location or background.",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="mb-6 p-4 bg-blue-50 rounded-lg inline-block group-hover:bg-blue-100 transition-colors">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurValues;
