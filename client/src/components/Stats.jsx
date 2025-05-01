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

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const step = end / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            setCount(Math.min(Math.floor(start), end));
            if (start >= end) clearInterval(timer);
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration]);

  return <span ref={countRef}>{count}</span>;
};

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: 24, label: "Test Case Passed Successfully" },
            {
              number: 100,
              label: "Developed & Maintained Individually",
              unit: "%",
            },
            { number: 3, label: "Development Duration", unit: "Months" },
            { number: 100, label: "Fully Responsive", unit: "%" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={stat.number} duration={2} />
                {stat.unit ? ` ${stat.unit}` : "+"}
              </div>
              <div className="text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
