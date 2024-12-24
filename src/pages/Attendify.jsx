import React, { useEffect } from "react";
import { motion, steps } from "framer-motion";
import { CheckCircle2, XCircle, Bell, Cloud, Home } from "lucide-react";
import { products } from "../constants/product";
import AdditionalSections from "../components/AdditionalSections";
import { Navigate, useParams, useSearchParams } from "react-router-dom";
import { COLORS } from "../constants/config";
import feature1 from "../assets/product/feature-1.gif";
import AOS from "aos";
import "aos/dist/aos.css";
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideIn = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const OmniRoad = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
      delay: 200,
    });
  }, []);

  const pageContent = products["Attendify"];

  if (!pageContent) {
    return <Navigate to="/product/landingLens" replace />;
  }

  return (
    <div
      style={{
        backgroundColor: COLORS.background,
        color: COLORS.text,
        padding: "1.5rem",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-center gap-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h3
          className="text-3xl text-center pt-28 lg:text-5xl font-semibold"
          variants={slideIn}
        >
          <span className="font-bold text-blue-600">
            <span style={{ color: COLORS.text }}>
              {pageContent.hero.title}{" "}
            </span>
            <br />{" "}
            <span className={`${COLORS.title_color}`}>
              {pageContent.hero?.breakTitle}
            </span>
          </span>
        </motion.h3>
        <motion.p className="text-center" variants={slideIn}>
          {pageContent.hero.subtitle}
        </motion.p>
        <motion.div
          className="hidden lg:block font-bold"
          style={{ color: COLORS.text }}
          variants={slideIn}
        >
          <button
            className={`${COLORS.titel_bg} rounded-l-full rounded-r-full px-6 py-2 lg:text-sm xl:text-base`}
            style={{
              color: COLORS.background,
            }}
          >
            {pageContent.hero.buttonText}
          </button>
        </motion.div>
        <motion.div
          className="flex h-full items-center justify-center"
          variants={fadeIn}
        >
          <video
            className="object-cover w-full max-h-[90vh] sm:max-h-[70vh] lg:max-h-[60vh] xl:max-h-[50vh]"
            src={pageContent.hero.image} // Change this to the path of your video
            alt="Hero Video"
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        style={{
          color: COLORS.text,
        }}
        className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-12 lg:py-28 text-white"
        initial="hidden"
        data-aos="fade-up"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div className="w-full lg:w-1/2 max-w-2xl" variants={slideIn}>
          <video
            className="w-full h-auto rounded-lg shadow-lg object-cover max-h-[80vh] sm:max-h-[60vh] lg:max-h-[50vh] xl:max-h-[40vh]"
            src={pageContent.feature_1.image} // Change this to the path of your video
            alt="Visual Prompting Interface Video"
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>

        <motion.div className="w-full lg:w-1/2 max-w-2xl" variants={slideIn}>
          <div className="flex">
            <CheckCircle2
              className={`${COLORS.title_color} w-6 h-6 mr-2 flex-shrink-0`}
            />
            <p className="text-lg mb-4 text-center lg:text-left">
              {pageContent.feature_1.mainTitle}
            </p>
          </div>
          <motion.h3
            className="text-3xl lg:text-5xl font-semibold mb-6 text-center lg:text-left"
            variants={slideIn}
          >
            <span className={`${COLORS.title_color} font-bold`}>
              {pageContent.feature_1.title}
            </span>
          </motion.h3>

          <motion.p
            className="text-lg mb-8 text-center lg:text-left"
            variants={slideIn}
          >
            {pageContent.feature_1.description}
          </motion.p>

          <motion.ul className="space-y-4 mb-8" variants={slideIn}>
            {pageContent.feature_1.bulletPoints.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={slideIn}
              >
                <CheckCircle2 className="w-6 h-6 mr-2 flex-shrink-0 text-blue-400" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="flex justify-center lg:justify-start space-x-4"
            variants={slideIn}
          >
            {pageContent.feature_1.buttons.map((button, index) => (
              <button
                key={index}
                className={`${
                  button.primary
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                } font-bold py-2 px-6 rounded-full transition duration-300`}
              >
                {button.text}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        style={{
          color: COLORS.text,
        }}
        className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-12 lg:py-28 text-white"
        initial="hidden"
        data-aos="fade-up"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div className="w-full lg:w-1/2 max-w-2xl" variants={slideIn}>
          <div className="flex">
            <Bell className="w-6 h-6 mr-2 flex-shrink-0 text-blue-400" />
            <p className="text-lg mb-4 text-center lg:text-left">
              {pageContent.feature_2.mainTitle}
            </p>
          </div>
          <motion.h3
            className="text-3xl lg:text-5xl font-semibold mb-6 text-center lg:text-left"
            variants={slideIn}
          >
            <span className={`${COLORS.title_color}`}>
              {pageContent.feature_2.title}
            </span>
          </motion.h3>
          <motion.p
            className="text-lg mb-8 text-center lg:text-left"
            variants={slideIn}
          >
            {pageContent.feature_2.description}
          </motion.p>

          <motion.ul className="space-y-4 mb-8" variants={slideIn}>
            {pageContent.feature_2.bulletPoints.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={slideIn}
              >
                <CheckCircle2 className="w-6 h-6 mr-2 flex-shrink-0 text-blue-400" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="flex justify-center lg:justify-start space-x-4"
            data-aos="fade-up"
            variants={slideIn}
          >
            {pageContent.feature_2.buttons.map((button, index) => (
              <button
                key={index}
                className={`${
                  button.primary
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                } font-bold py-2 px-6 rounded-full transition duration-300`}
              >
                {button.text}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="w-full lg:w-1/2 max-w-2xl" variants={slideIn}>
          <img
            src={pageContent.feature_2.image}
            alt="Visual Prompting Interface"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* Data-Centric AI Section */}
      <motion.div
        className={`${COLORS.titel_bg} text-white flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-12 lg:py-16 text-white`} // `justify-between` for space between
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div className="w-full lg:w-1/2 max-w-2xl" variants={slideIn}>
          <motion.h2 className="text-2xl font-bold mb-4" variants={slideIn}>
            {pageContent.dataCentricAI.title}
          </motion.h2>
          <motion.h1 className="text-4xl font-bold mb-6" variants={slideIn}>
            {pageContent.dataCentricAI.heading}
          </motion.h1>
          <motion.p className="mb-4" variants={slideIn}>
            {pageContent.dataCentricAI.description}
          </motion.p>
          <motion.ul className="space-y-2" variants={slideIn}>
            {pageContent.dataCentricAI.bulletPoints.map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={slideIn}
              >
                <CheckCircle2 className="mr-2 flex-shrink-0 mt-1" size={20} />
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.button
            className={`${COLORS.title_color} mt-6 bg-white px-6 py-2 rounded-full font-semibold`}
            variants={slideIn}
          >
            {pageContent.dataCentricAI.buttonText}
          </motion.button>
        </motion.div>
        {/* Adjust padding for spacing */}
        <motion.div className="w-full lg:w-1/2 max-w-2xl" variants={slideIn}>
          <img
            src={pageContent.dataCentricAI.images}
            alt="Visual Prompting Interface"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* <motion.div
        style={{
          color: COLORS.text,
        }}
        className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-12 lg:py-28 text-white"
        initial="hidden"
        data-aos="fade-up"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div className="w-full lg:w-1/2 max-w-2xl" variants={slideIn}>
          <img
            src={pageContent.feature_3.image}
            alt="Visual Prompting Interface"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div className="w-full lg:w-1/2 max-w-2xl" variants={slideIn}>
          <div className="flex">
            <Cloud className="w-6 h-6 mr-2 flex-shrink-0 text-blue-400" />
            <p className="text-lg mb-4 text-center lg:text-left">
              {pageContent.feature_3.mainTitle}
            </p>
          </div>
          <motion.h3
            className="text-3xl lg:text-5xl font-semibold mb-6 text-center lg:text-left"
            variants={slideIn}
          >
            <span className={`${COLORS.title_color}`}>
              {pageContent.feature_3.title}
            </span>
          </motion.h3>
          <motion.p
            className="text-lg mb-8 text-center lg:text-left"
            variants={slideIn}
          >
            {pageContent.feature_3.description}
          </motion.p>

          <motion.ul className="space-y-4 mb-8" variants={slideIn}>
            {pageContent.feature_3.bulletPoints.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={slideIn}
              >
                <CheckCircle2 className="w-6 h-6 mr-2 flex-shrink-0 text-blue-400" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="flex justify-center lg:justify-start space-x-4"
            variants={slideIn}
          >
            {pageContent.feature_3.buttons.map((button, index) => (
              <button
                key={index}
                className={`${
                  button.primary
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                } font-bold py-2 px-6 rounded-full transition duration-300`}
              >
                {button.text}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        style={{
          color: COLORS.text,
        }}
        className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-12 lg:py-28 text-white"
        initial="hidden"
        data-aos="fade-up"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div className="w-full lg:w-1/2 max-w-2xl" variants={slideIn}>
          <div className="flex">
            <Home className="w-6 h-6 mr-2 flex-shrink-0 text-blue-400" />
            <p className="text-lg mb-4 text-center lg:text-left">
              {pageContent.feature_4.mainTitle}
            </p>
          </div>
          <motion.h3
            className="text-3xl lg:text-5xl font-semibold mb-6 text-center lg:text-left"
            variants={slideIn}
          >
            <span className={`${COLORS.title_color}`}>
              {pageContent.feature_4.title}
            </span>
          </motion.h3>
          <motion.p
            className="text-lg mb-8 text-center lg:text-left"
            variants={slideIn}
          >
            {pageContent.feature_4.description}
          </motion.p>

          <motion.ul className="space-y-4 mb-8" variants={slideIn}>
            {pageContent.feature_4.bulletPoints.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={slideIn}
              >
                <CheckCircle2 className="w-6 h-6 mr-2 flex-shrink-0 text-blue-400" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="flex justify-center lg:justify-start space-x-4"
            variants={slideIn}
          >
            {pageContent.feature_3.buttons.map((button, index) => (
              <button
                key={index}
                className={`${
                  button.primary
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                } font-bold py-2 px-6 rounded-full transition duration-300`}
              >
                {button.text}
              </button>
            ))}
          </motion.div>
        </motion.div>
        <motion.div className="w-full lg:w-1/2 max-w-2xl" variants={slideIn}>
          <img
            src={pageContent.feature_4.image}
            alt="Visual Prompting Interface"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div> */}

      {/* <AdditionalSections id={text} /> */}
    </div>
  );
};

export default OmniRoad;
