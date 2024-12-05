import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, BarChart3, ArrowRight, Users, Zap } from "lucide-react";
import { products } from "../constants/product";
import { Navigate } from "react-router-dom";
import { COLORS } from "../constants/config";
// Additional sections to be added to the existing LandingPage component

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideIn = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
const AdditionalSections = ({ id }) => {
  const pageContent = products[id];

  if (!pageContent) {
    return <Navigate to="/product/landingLens" replace />;
  }
  return (
    <>
      {/* Analytics Dashboard Section */}
      {/* <motion.div
        className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-lg my-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div
          className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
          variants={slideIn}
        >
          <div className="space-y-6">
            <span className="text-blue-300 font-semibold">
              {pageContent.analytics.badge}
            </span>
            <h2 className="text-4xl font-bold">
              {pageContent.analytics.title}
            </h2>
            <p className="text-lg text-blue-100">
              {pageContent.analytics.description}
            </p>
            <div className="grid grid-cols-2 gap-6">
              {pageContent.analytics.stats.map((stat, index) => (
                <div key={index} className="bg-blue-800/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="text-blue-400" size={20} />
                    <span className="font-semibold">{stat.label}</span>
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={pageContent.analytics.image}
              alt="Analytics Dashboard"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </motion.div>
      </motion.div> */}

      {/* Integration Section */}
      <motion.div
        className="py-16 px-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          variants={slideIn}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              {pageContent.integration.title}
            </span>
          </h2>
          <p
            className="text-lg text-gray-300"
            style={{
              color: COLORS.text,
            }}
          >
            {pageContent.integration.description}
          </p>
        </motion.div>
        <motion.div className="grid md:grid-cols-3 gap-8" variants={slideIn}>
          {pageContent.integration.features.map((feature, index) => (
            <div key={index} className="bg-blue-900/30 p-6 rounded-xl">
              <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                {feature.icon === "zap" && (
                  <Zap className="text-blue-400" size={24} />
                )}
                {feature.icon === "users" && (
                  <Users className="text-blue-400" size={24} />
                )}
                {feature.icon === "arrow-right" && (
                  <ArrowRight className="text-blue-400" size={24} />
                )}
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{
                  color: COLORS.text,
                }}
              >
                {feature.title}
              </h3>
              <p
                className="text-gray-300"
                style={{
                  color: COLORS.text,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default AdditionalSections;
