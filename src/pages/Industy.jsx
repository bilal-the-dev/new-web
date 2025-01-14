import React from "react";
import { motion } from "framer-motion";
import { ArrowUpCircle, Settings, ArrowRight } from "lucide-react";
import {
  HERO_SECTION,
  VISION_BANNER,
  FEATURES,
  EFFICIENCY_CARDS,
  STATS,
} from "../constants/industry";
import { COLORS } from "../constants/config";
import { Link } from "react-router-dom";
// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const slideIn = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.8 },
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 },
};

const FeatureSection = ({
  title,
  description,
  highlightText,
  imgSrc,
  imgAlt,
  reverse = false,
}) => (
  <motion.div
    className={`mb-20 bg-black/10 rounded-xl p-8 border border-gray-700/50 backdrop-blur-sm shadow-xl`}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={fadeIn}
  >
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between gap-12`}
    >
      <motion.div className="md:w-1/2" variants={slideIn}>
        <h2
          className="text-3xl font-bold text-white mb-4"
          style={{
            color: COLORS.text,
          }}
        >
          {title}
        </h2>
        <p
          className="text-gray-300 leading-relaxed"
          style={{
            color: COLORS.text,
          }}
        >
          {description}{" "}
          <span className={`${COLORS.title_color}`}>{highlightText}</span>
        </p>
      </motion.div>
      <motion.div className="md:w-1/3" variants={scaleIn}>
        <img
          src={imgSrc}
          alt={imgAlt}
          className="rounded-lg shadow-xl w-full hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
    </div>
  </motion.div>
);

const StatsSection = () => (
  <motion.div
    className="py-20 bg-gray-800/30 backdrop-blur-sm"
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={fadeIn}
  >
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center"
            variants={scaleIn}
            custom={index}
          >
            <h3 className="text-4xl font-bold text-blue-400 mb-2">
              {stat.value}
            </h3>
            <p className="text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundColor: COLORS.background,
        color: COLORS.text,
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <motion.div
        className="container mx-auto px-6 py-16"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-1/2 text-white"
            variants={slideIn}
            style={{
              color: COLORS.text,
            }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {HERO_SECTION.title}{" "}
              <span className="inline-block mt-6">
                <span className="border border-black/30 bg-black/10 px-3 py-1">
                  {HERO_SECTION.highlightText}
                </span>
              </span>
            </h1>
            <p
              className="text-gray-300 text-lg leading-relaxed"
              style={{
                color: COLORS.text,
              }}
            >
              {HERO_SECTION.description}
            </p>
          </motion.div>
          <motion.div className="md:w-1/2" variants={scaleIn}>
            <img
              src={HERO_SECTION.imagePath}
              alt="Electronics inspection"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Vision Banner */}
      <motion.div
        className="flex flex-col mb-24 gap-y-3 justify-center items-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h3 className="text-3xl text-center lg:text-5xl font-semibold">
          <span className={`${COLORS.title_color}`}>{VISION_BANNER.title}</span>
        </h3>
        <h4
          className="text-sm text-center w-[80%] mx-auto lg:w-auto lg:mx-0 lg:text-2xl tracking-wider text-white"
          style={{
            color: COLORS.text,
          }}
        >
          {VISION_BANNER.subtitle}
        </h4>
      </motion.div>

      {/* Features Section */}
      <div className="container mx-auto px-6">
        {FEATURES.map((feature, index) => (
          <FeatureSection key={index} {...feature} reverse={index % 2 !== 0} />
        ))}

        {/* Efficiency Cards */}

        {/* CTA Section */}
        <motion.div
          className="text-center py-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{
              color: COLORS.text,
            }}
          >
            Unlock the potential of AI-powered computer vision to drive
            innovation in your industry
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/build-your-vision">
              <motion.button
                className={`${COLORS.titel_bg} text-white px-8 py-3 rounded-lg flex items-center gap-2 mx-auto w-full sm:w-auto hover:bg-blue-700 transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight size={20} />
              </motion.button>
            </Link>

            {/* Request a Demo Button */}
            <Link to="/build-your-vision">
              <motion.button
                className={`${COLORS.titel_bg} text-white px-8 py-3 rounded-lg flex items-center gap-2 mx-auto w-full sm:w-auto hover:bg-blue-700 transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Demo
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
