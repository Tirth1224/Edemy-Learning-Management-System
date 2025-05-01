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
  Phone,
  Mail,
  MapPin,
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

const OurService = () => {
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
              Our Services
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4">24/7 Support Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're always here to help you with any questions or concerns.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <Phone className="h-8 w-8 text-[#2563eb]" />,
              title: "24/7 Support",
              description:
                "Our dedicated support team is available around the clock to assist you with any issues or questions.",
            },
            {
              icon: <Mail className="h-8 w-8 text-[#2563eb]" />,
              title: "Email Support",
              description:
                "Send us an email and our team will get back to you within 24 hours.",
            },
            {
              icon: <MapPin className="h-8 w-8 text-[#2563eb]" />,
              title: "Visit Us",
              description: "Come by and say hello!",
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

export default OurService;
