import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "lucide-react";
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

const Faqs = () => {
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
              Common Questions
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Edemy, our courses, and how
            our platform works.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          {[
            {
              question:
                "What makes Edemy different from other learning platforms?",
              answer:
                "Edemy stands out with our focus on interactive learning, personalized paths, and a supportive community. Our platform combines high-quality content with innovative technology to create an engaging learning experience that adapts to your needs and goals.",
            },
            {
              question: "How do I become an instructor on Edemy?",
              answer:
                "Becoming an instructor is simple! Click on the 'Teach on Edemy' link, complete our application form, and submit a sample of your teaching style. Our team will review your application and get back to you within 5 business days.",
            },
            {
              question: "Are there any prerequisites for taking courses?",
              answer:
                "Most courses clearly indicate any prerequisites in their descriptions. While some advanced courses may require prior knowledge, we offer a wide range of beginner-friendly options with no prerequisites. You can filter courses by level to find the right match for your experience.",
            },
            {
              question: "Do I get a certificate after completing a course?",
              answer:
                "Yes! Upon successful completion of a course, you'll receive a digital certificate that you can share on your resume or LinkedIn profile. Some of our specialized programs also offer industry-recognized certifications.",
            },
            {
              question: "What payment methods do you accept?",
              answer:
                "We accept all major credit cards, PayPal, and in select regions, bank transfers and mobile payment options. We also offer flexible payment plans for our more comprehensive programs.",
            },
          ].map((faq, index) => (
            <div key={index} className="border-b border-blue-100">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full py-4 text-left font-medium hover:text-blue-600">
                      {faq.question}
                      <ChevronUpIcon
                        className={`w-5 h-5 transition-transform duration-200 ${
                          open ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-4 text-gray-600">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
