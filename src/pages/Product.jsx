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

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
      delay: 200,
    });
  }, []);
  const { text } = useParams();

  const pageContent = products[text];

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
        <motion.div className="flex h-full items-center" variants={fadeIn}>
          <img
            className="object-contain w-full h-full"
            src={pageContent.hero.image}
            alt=""
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
          <img
            src={pageContent.feature_1.image}
            alt="Visual Prompting Interface"
            className="w-full h-auto rounded-lg shadow-lg"
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
        className={`${COLORS.titel_bg} text-white p-8 flex items-center`}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div className="flex-1 pr-8" variants={slideIn}>
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

        <motion.div className="flex-1" variants={slideIn}>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex space-x-4">
              {pageContent.dataCentricAI.images.map((image, index) => (
                <motion.div key={index} className="flex-1" variants={slideIn}>
                  <img
                    src={image.src}
                    alt={`Image ${index + 1}`}
                    className="w-full h-auto rounded"
                  />
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-700">
                      Agreement Score - {image.score}
                    </span>
                    {image.agreement ? (
                      <CheckCircle2 className="text-green-500" size={24} />
                    ) : (
                      <XCircle className="text-red-500" size={24} />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div
          className="text-center mb-16"
          style={{
            color: COLORS.text,
          }}
        >
          <h2
            className="text-4xl font-bold text-gray-200 mb-4"
            style={{
              color: COLORS.text,
            }}
          >
            {pageContent.last.title}
          </h2>
          <p
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            style={{
              color: COLORS.text,
            }}
          >
            {pageContent.last.desc}
          </p>
        </div>

        {/* Steps Grid */}
        <div
          className="grid md:grid-cols-2 gap-8"
          style={{
            color: COLORS.text,
          }}
        >
          {pageContent.last.steps.map((step, index) => (
            <div key={index} className="overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="mb-6">
                  <span className={`${COLORS.title_color} font-bold text-xl`}>
                    {step.number}. {step.title}
                  </span>
                  <p
                    className={`${COLORS.title_color} mt-2 text-sm`}
                    style={{
                      color: COLORS.text,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
                <div className="bg-white rounded-lg h-64 flex items-center justify-center overflow-hidden">
                  <img
                    src={step.img}
                    alt="Labeling example"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <AdditionalSections id={text} /> */}
    </div>
  );
};

export default LandingPage;
