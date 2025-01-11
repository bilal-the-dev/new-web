import React, { useState } from "react";
import { motion } from "framer-motion";
import { COLORS } from "../constants/config";
import { Link } from "react-router-dom";

import question from "../assets/Cloud.png";
import {
  Clock,
  Cloud,
  CheckCircle,
  BarChart,
  Zap,
  Repeat,
  Calendar,
  CheckCircle2,
} from "lucide-react";

import {
  ArrowRight,
  Camera,
  Cpu,
  BarChart3,
  MessageSquare,
} from "lucide-react";
import { BiCctv } from "react-icons/bi"; // BiCctv is from react-icons/bi (BoxIcons)

import {
  HandshakeIcon,
  Settings2,
  ClipboardCheck,
  Monitor,
} from "lucide-react";

import { Brain, CircuitBoard, Shield } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-12 h-12 text-white" />,
    title: "Leverage AI where you need it",
    description:
      "Orchestrate workloads for AI inferencing and Deep Learning to scale up data at the edge",
  },
  {
    icon: <CircuitBoard className="w-12 h-12 text-white" />,
    title: "Simplify your edge",
    description:
      "Modernize edge AI architecture and workloads at scale to power various use cases",
  },
  {
    icon: <Shield className="w-12 h-12 text-white" />,
    title: "Protect your edge",
    description:
      "Embed cybersecurity expertise into your IT infrastructure and processes",
  },
];

const steps = [
  {
    icon: <BiCctv className="w-16 h-16 text-gray-700" />,
    title: "Connect CCTV",
    description: "Connect to exiting CCTV infrastructure",
  },
  {
    icon: <Cpu className="w-16 h-16 text-[#2596be]" />,
    title: "Process Video",
    description: "Video feed is processed through AI-powered analytics",
  },
  {
    icon: <MessageSquare className="w-16 h-16 text-[#2596be]" />,
    title: "Real-Time Alerts",
    description: "Follow up on notifications to ensure smooth operations",
    subStep: {
      icon: <BarChart3 className="w-16 h-16 text-gray-700" />,
      title: "Analyze Trends",
      description: "Understand if your action plans are working effectively",
    },
  },
];

const bulletPoints = [
  "Streamlining operations and generating real-time insights where and when needed.",
  "Providing end-to-end security, ensuring protection from design to deployment.",
  "Supporting scalability and driving innovation through low-latency edge computing applications.",
];

const section2Steps = [
  {
    icon: <HandshakeIcon className="w-8 h-8 text-blue-500" />,
    description: "Introduction & Technology Demo",
  },
  {
    icon: <Settings2 className="w-8 h-8 text-blue-500" />,
    description: "Share your Business specific Requirements",
  },
  {
    icon: <ClipboardCheck className="w-8 h-8 text-blue-500" />,
    description: "Mutual agreement on POC Scope",
  },
  {
    icon: <Monitor className="w-8 h-8 text-blue-500" />,
    description: "Proof of Concept Execution & Evaluation",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
    description: "Full-Scale Deployment",
  },
];

const Home = () => {
  const [activeButton, setActiveButton] = useState("OmniRoad 2.0");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const buttonData = [
    {
      label: "OmniRoad 2.0",
      bgColor: "bg-[#023357]",
      imgSrc: "path/to/landinglens-snowflake-image.jpg",
    },
    {
      label: "CrowsIQ",
      bgColor: "bg-[#023357]",
      imgSrc: "path/to/visionagent-image.jpg",
    },
    {
      label: "Attendify",
      bgColor: "bg-[#023357]",
      imgSrc: "path/to/visionagent-image.jpg",
    },
  ];

  // const slideData = [
  //     { img: slide1,  imgSrc: 'path/to/landinglens-image.jpg' },
  //     { label: 'LandingLens on Snowflake', bgColor: 'bg-[#023357]', imgSrc: 'path/to/landinglens-snowflake-image.jpg' },
  //     { label: 'VisionAgent', bgColor: 'bg-[#023357]', imgSrc: 'path/to/visionagent-image.jpg' },
  // ];

  return (
    <div style={{ backgroundColor: COLORS.background, color: COLORS.text }}>
      {/* ..hero section */}
      <div
        className="w-full  text-white"
        style={{ backgroundColor: COLORS.background, color: COLORS.text }}
      >
        <div
          className="w-full h-auto flex lg:flex-row flex-col justify-center items-center mb-16"
          style={{ backgroundColor: COLORS.background, color: COLORS.text }}
        >
          {/* Left Section */}
          <motion.div
            className="left h-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex w-full h-full items-center">
              <img
                className="object-contain w-full h-full"
                src="/2.png"
                alt=""
              />
            </div>
          </motion.div>

          {/* Center Section */}
          <motion.div
            className="mt-4 mb-6 lg:my-0 center flex-1 h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mt-12 h-full w-full gap-y-8 items-center flex-col">
              <div className="et_pb_text_inner flex flex-col justify-center items-center">
                <h1 className="text-5xl font-bold text-center">
                  <span className={`${COLORS.title_color}`}>
                    Redefining Vision
                  </span>
                </h1>
                <h1 className="text-6xl lg:text-8xl font-bold">
                  <span className={`${COLORS.title_color}`}>With AI</span>
                </h1>
              </div>
              <div
                className="text-2xl text-nowrap text-center font-bold"
                style={{ color: COLORS.text }}
              >
                Unlock Business Potential with AI-Powered Video
                <br /> Analytics
              </div>
              <div className="flex gap-x-4 lg:gap-x-8">
                <button className="bg-[#2596be] text-white font-bold text-center px-6 py-1.5 rounded-r-full rounded-l-full">
                  Start Your Vision
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="right h-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex w-full h-full items-center">
              <img
                className="object-contain w-full h-full"
                src="/1.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>

        <div
          className={`${COLORS.secondaryBackground} p-12 lg:p-16 lg:pb-1 flex flex-col gap-8 animate-fadeIn mb-10`}
        >
          {/* Section of arrows */}
          <div className="mb-18">
            <div className="flex flex-col items-center justify-center px-4  text-center">
              <h1 className="text-5xl font-bold text-gray-800 mb-4  text-[#2596be]">
                <span>Every </span>
                <span className="relative inline-block">
                  <span className="text-[#2596be]">Business </span>
                  <span
                    className="absolute bottom-0 left-0 w-full"
                    style={{
                      height: "2px",
                      background: "#2596be",
                      transform: "rotate(-1deg)",
                      transformOrigin: "left bottom",
                    }}
                  />
                  <span
                    className="absolute bottom-0 left-0 w-full"
                    style={{
                      height: "1px",
                      background:
                        "linear-gradient(90deg, #93c5fd 0%, #bfdbfe 50%, #93c5fd 100%)",
                      transform: "rotate(-2deg) translateY(2px)",
                      transformOrigin: "left bottom",
                      opacity: 0.7,
                    }}
                  />
                </span>
                <span> is Unique</span>
              </h1>
            </div>

            <p className="lg:text-lg leading-relaxed">
              Transform your existing{" "}
              <span className="text-[#2596be] font-semibold">
                video surveillance data
              </span>{" "}
              into a powerful business asset. Use your existing IP security
              camera setup to gain actionable insights that can drive
              <span className="text-[#2596be] font-semibold">
                {" "}
                business efficiency
              </span>
              , enhance operational excellence, and uncover new revenue
              opportunities.
            </p>
            <p className="lg:text-lg mt-1 leading-relaxed">
              We design{" "}
              <span className="text-[#2596be] font-semibold">
                AI-powered analytics
              </span>{" "}
              based on your business needs to help you build data-driven
              strategies for growth. Whether you’re in retail, logistics, or any
              other industry, we help you maximize the potential of your
              monitoring systems. With{" "}
              <span className="text-[#2596be] font-semibold">DevelMo</span>,
              your surveillance data becomes a strategic advantage for smarter
              decision-making and operational excellence.
            </p>

            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-wrap items-center justify-center gap-4">
                {steps.map((step, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center">
                      <div className="flex flex-col items-center text-center max-w-xs">
                        <div className="bg-gray-100 rounded-lg p-6 mb-4">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {step.description}
                        </p>
                      </div>

                      {step.subStep && (
                        <div className="flex flex-col items-center text-center max-w-xs mt-8">
                          <div className="bg-gray-100 rounded-lg p-6 mb-2">
                            {step.subStep.icon}
                          </div>
                          <h3 className="text-xl font-bold mb-1 text-gray-800">
                            {step.subStep.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {step.subStep.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {index < steps.length - 1 && (
                      <ArrowRight className="w-8 h-8 text-[#2596be] hidden md:block" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div
          className=" py-6 mb-12"
          style={{ backgroundColor: COLORS.background, color: COLORS.text }}
        >
          <div className="flex flex-col gap-y-3 justify-center items-center">
            <motion.h3
              className="text-3xl text-center lg:text-5xl font-semibold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className={`${COLORS.title_color}`}>
                Streamline Your Vision Solutions
              </span>
            </motion.h3>
            <motion.h4
              className="text-sm text-center w-[80%] mx-auto lg:w-auto lg:mx-0 lg:text-2xl tracking-wider text-white px-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ color: COLORS.text }}
            >
              Power your business with tailored solutions for object detection,
              real-time tracking, and more—crafted to extract meaningful
              insights from images, videos, and streams.
            </motion.h4>
          </div>

          <div className="lg:hidden flex et_pb_code_inner mt-12 justify-center items-center">
            <motion.video
              id="miVideo"
              playsInline
              autoPlay
              muted
              loop
              className="border border-[#003666] rounded-lg"
              style={{ border: "1px solid #003666", borderRadius: "16px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <source
                type="video/mp4"
                src="https://landing.ai/wp-content/uploads/2024/09/Marketecture-Mobile.mp4"
              />
              Your browser does not support the video tag.
            </motion.video>
          </div>

          <div className="hidden lg:flex et_pb_code_inner mt-12 justify-center items-center">
            <motion.video
              id="miVideo"
              playsInline
              autoPlay
              muted
              loop
              className="border border-[#003666] w-[75%] rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <source type="video/mp4" src="/home-animation.mp4" />
              Your browser does not support the video tag.
            </motion.video>
          </div>
        </div>

        <div
          className={`${COLORS.secondaryBackground} p-12 lg:p-16 flex flex-col  animate-fadeIn mb-16 mt-4`}
        >
          <div className="flex justify-center -ml-4 flex  text-center">
            <div className="flex flex-col items-center justify-center px-4  text-center">
              <h1 className="text-5xl font-bold text-gray-800 mb-4  text-[#2596be] text-center ">
                <span>Your </span>
                <span className="relative inline-block">
                  <span className="text-[#2596be]">Business </span>
                  <span
                    className="absolute bottom-0 left-0 w-full"
                    style={{
                      height: "2px",
                      background: "#2596be",
                      transform: "rotate(-1deg)",
                      transformOrigin: "left bottom",
                    }}
                  />
                  <span
                    className="absolute bottom-0 left-0 w-full"
                    style={{
                      height: "1px",
                      background:
                        "linear-gradient(90deg, #93c5fd 0%, #bfdbfe 50%, #93c5fd 100%)",
                      transform: "rotate(-2deg) translateY(2px)",
                      transformOrigin: "left bottom",
                      opacity: 0.7,
                    }}
                  />
                </span>
                <span> is Unique</span>
              </h1>
            </div>
          </div>
          <p className="lg:text-lg">
            At DevelMo, we understand that every business has unique needs. Our
            customized AI video analytics solutions are tailored to align with
            your specific requirements, ensuring maximum impact and efficiency.
            We focus on delivering solutions that fit your goals and streamline
            your operations.
          </p>

          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  <div className="w-64 relative group">
                    <div className="bg-white backdrop-blur-sm p-6 rounded-xl shadow-md  hover:shadow-xl transition-all duration-300 ">
                      <div className="flex flex-col items-center gap-4">
                        <div className="bg-white p-4 rounded-full shadow-md">
                          {step.icon}
                        </div>
                        <div className="text-sm font-medium text-center text-gray-700">
                          Step {index + 1}:
                          <div className="mt-1 text-gray-600">
                            {step.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block">
                      <ArrowRight className="w-8 h-8 text-blue-500 animate-pulse" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <p className="lg:text-lg">
            This structured approach guarantees that our AI video analytics
            solutions are customized to meet your specific requirements, driving
            operational excellence and informed decision-making
          </p>
        </div>
      </div>

      {/* changing sliders sections */}
      <div
        className=" p-2 lg:px-16"
        style={{ backgroundColor: COLORS.background }}
      >
        <div>
          <div className="et_pb_text_inner">
            <h3 className="text-3xl  lg:text-5xl font-semibold text-center">
              <span className={`${COLORS.title_color} `}>
                Accelerate your business with Our off-the-shelf AI-Powered
                products
              </span>
            </h3>
          </div>
          <div className="flex justify-center px-0 lg:px-5 gap-x-4 mt-6">
            {buttonData.map((button, index) => (
              <button
                key={index}
                className={`px-4 text-sm lg:px-12 cursor-pointer text-center font-semibold rounded-full text-white py-2 lg:py-1.5 ${
                  activeButton === button.label
                    ? "bg-gradient-to-r from-[#023357] to-[#1677DC]"
                    : button.bgColor
                }`}
                onClick={() => handleButtonClick(button.label)}
              >
                {button.label}
              </button>
            ))}
            {/* {activeButton && (
                <div className="mt-4">
                    <img src={buttonData.find(button => button.label === activeButton).imgSrc} alt={activeButton} className="w-full h-auto" />
                </div>
            )} */}
          </div>
          {/* images etc */}
          <div>
            {/* Content for LandingLens on Snowflake */}
            {activeButton === "OmniRoad 2.0" && (
              <div className="flex lg:flex-row flex-col w-full lg:w-auto gap-x-8 py-8 justify-center">
                <div className="text-4xl font-semibold  w-full lg:w-1/2 text-white">
                  <div className="-ml-4 flex ">
                    <div className="text-white w-1 bg-gradient-to-b from-blue-text to-green-text "></div>
                    <div
                      className="ml-4 text-2xl lg:text-4xl"
                      style={{ color: COLORS.text }}
                    >
                      <h1>
                        Revolutionizing Road Safety and Traffic Management
                      </h1>
                    </div>
                  </div>
                  <div
                    className="flex flex-col gap-y-2 py-4 mt-4"
                    style={{ color: COLORS.text }}
                  >
                    <div className="flex justify-center items-start">
                      <Zap className="mr-2 text-3xl text-[#2596be]" />{" "}
                      {/* Zap icon for Accelerated MLOps */}
                      <div
                        className="text-white font-light text-lg"
                        style={{ color: COLORS.text }}
                      >
                        <span className="font-bold">
                          AI-Powered Traffic Monitoring:
                        </span>{" "}
                        Detects vehicles, pedestrians, and road elements for
                        enhanced road safety.
                      </div>
                    </div>

                    <div className="flex justify-center items-start">
                      <Clock className="mr-2 text-3xl text-[#2596be]" />{" "}
                      {/* Clock icon for Time-to-value */}
                      <div
                        className="text-white font-light text-lg"
                        style={{ color: COLORS.text }}
                      >
                        <span className="font-bold">
                          Real-Time Accident Alerts:
                        </span>
                        Instantly notifies authorities of accidents, assessing
                        severity to enable prioritized and faster responses.
                      </div>
                    </div>

                    <div className="flex justify-center items-start">
                      <Repeat className="mr-2 text-3xl text-[#2596be]" />{" "}
                      {/* Repeat icon for Streamlined Cycles */}
                      <div
                        className="text-white font-light text-lg"
                        style={{ color: COLORS.text }}
                      >
                        <span className="font-bold">
                          Comprehensive Traffic Insights:
                        </span>{" "}
                        Tracks vehicle counts, flow, and density to aid city
                        planners and optimize traffic management strategies.
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center lg:justify-start lg:items-start mt-6 gap-x-6">
                    <button className="block px-4 py-1 text-base bg-[#031223] border-[1px]  border-white rounded-l-full rounded-r-full text-center text-white">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="text-5xl w-full lg:w-1/2 mt-12 lg:mt-0 text-white">
                  <div className="relative w-full h-full">
                    <video
                      className="object-cover w-full h-full"
                      src="/omni-1-mov.mov"
                      type="video/mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </div>
              </div>
            )}

            {activeButton === "CrowsIQ" && (
              <div className="flex lg:flex-row flex-col w-full lg:w-auto gap-x-8 py-8 justify-center">
                <div className="text-4xl font-semibold  w-full lg:w-1/2 text-white">
                  <div className="-ml-4 flex ">
                    <div className="text-white w-1 bg-gradient-to-b from-blue-text to-green-text "></div>
                    <div
                      className="ml-4 text-2xl lg:text-4xl"
                      style={{ color: COLORS.text }}
                    >
                      <h1>Real-Time Visitor Analytics and Insights</h1>
                    </div>
                  </div>
                  <div
                    className="flex flex-col gap-y-2 py-4 mt-4"
                    style={{ color: COLORS.text }}
                  >
                    {/* First Item */}
                    <div className="flex justify-center items-start">
                      <Zap className="mr-2 text-3xl text-[#2596be]" />{" "}
                      {/* Zap icon for Accelerated MLOps */}
                      <div
                        className="text-white font-light text-lg"
                        style={{ color: COLORS.text }}
                      >
                        <span className="font-bold">
                          Advanced Crowd Monitoring:
                        </span>{" "}
                        Detects age range, gender, time spent, and patterns for
                        better control.
                      </div>
                    </div>

                    {/* Second Item */}
                    <div className="flex justify-center items-start">
                      <Zap className="mr-2 text-3xl text-[#2596be]" />{" "}
                      {/* Zap icon for Accelerated MLOps */}
                      <div
                        className="text-white font-light text-lg"
                        style={{ color: COLORS.text }}
                      >
                        <span className="font-bold">
                          {" "}
                          Enhanced Event Safety:
                        </span>{" "}
                        Identifies risks early and ensures timely interventions
                        for safety & Privacy.
                      </div>
                    </div>

                    {/* Third Item */}
                    <div className="flex justify-center items-start">
                      <Zap className="mr-2 text-3xl text-[#2596be]" />{" "}
                      {/* Zap icon for Accelerated MLOps */}
                      <div
                        className="text-white font-light text-lg"
                        style={{ color: COLORS.text }}
                      >
                        <span className="font-bold">
                          {" "}
                          Detailed Behavior Insights:
                        </span>{" "}
                        Provides movement trends and actionable data for
                        efficient planning.
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center lg:justify-start lg:items-start mt-6 gap-x-6">
                    <button className="block px-4 py-1 text-base bg-[#031223] border-[1px]  border-white rounded-l-full rounded-r-full text-center text-white">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="text-5xl w-full lg:w-1/2 mt-12 lg:mt-0 text-white">
                  <div>
                    <img
                      className="object-cover w-full h-full"
                      src="/crowd-1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}
            {activeButton === "Attendify" && (
              <div className="flex lg:flex-row flex-col w-full lg:w-auto gap-x-8 py-8 justify-center">
                <div className="text-4xl font-semibold  w-full lg:w-1/2 text-white">
                  <div className="-ml-4 flex ">
                    <div className="text-white w-1 bg-gradient-to-b from-blue-text to-green-text "></div>
                    <div
                      className="ml-4 text-2xl lg:text-4xl"
                      style={{ color: COLORS.text }}
                    >
                      <h1>Transforming Attendance Management with Attendify</h1>
                    </div>
                  </div>
                  <div
                    className="flex flex-col gap-y-2 py-4 mt-4"
                    style={{ color: COLORS.text }}
                  >
                    {/* First Item */}
                    <div className="flex justify-center items-start">
                      <Zap className="mr-2 text-3xl text-[#2596be]" />{" "}
                      {/* Zap icon for Accelerated MLOps */}
                      <div
                        className="text-white font-light text-lg"
                        style={{ color: COLORS.text }}
                      >
                        <span className="font-bold">
                          AI-Driven Student Recognition:
                        </span>{" "}
                        Identifies students using facial recognition,
                        eliminating manual attendance processes.
                      </div>
                    </div>

                    {/* Second Item */}
                    <div className="flex justify-center items-start">
                      <Zap className="mr-2 text-3xl text-[#2596be]" />{" "}
                      {/* Zap icon for Accelerated MLOps */}
                      <div
                        className="text-white font-light text-lg"
                        style={{ color: COLORS.text }}
                      >
                        <span className="font-bold">
                          {" "}
                          Instant Attendance Records:
                        </span>{" "}
                        Automatically logs attendance into the database,
                        ensuring accuracy and saving valuable class time.
                      </div>
                    </div>

                    {/* Third Item */}
                    <div className="flex justify-center items-start">
                      <Zap className="mr-2 text-3xl text-[#2596be]" />{" "}
                      {/* Zap icon for Accelerated MLOps */}
                      <div
                        className="text-white font-light text-lg"
                        style={{ color: COLORS.text }}
                      >
                        <span className="font-bold">
                          {" "}
                          Comprehensive Attendance Insights:
                        </span>{" "}
                        Generates reports, helping educators maintain attendance
                        compliance effortlessly.
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center lg:justify-start lg:items-start mt-6 gap-x-6">
                    <button className="block px-4 py-1 text-base bg-[#031223] border-[1px]  border-white rounded-l-full rounded-r-full text-center text-white">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="text-5xl w-full lg:w-1/2 mt-12 lg:mt-0 text-white">
                  <div>
                    <img
                      className="object-cover w-full h-full"
                      src="/crowd-1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={` p-12 lg:p-16 flex flex-col gap-8 animate-fadeIn ${COLORS.secondaryBackground}`}
      >
        <div
          style={{
            color: COLORS.text,
          }}
          className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-8 lg:py-4 text-white"
          initial="hidden"
        >
          <div className="w-full lg:w-1/3 max-w-xl">
            <img
              className="object-cover w-full max-h-[80vh] sm:max-h-[80vh] lg:max-h-[45vh] xl:max-h-[45vh] rounded-xl"
              src={question} // Change this to the path of your video
              alt="Visual Prompting Interface Video"
            />
          </div>

          <div className="w-full lg:w-1/2 max-w-2xl">
            <div className="flex">
              <CheckCircle2
                className={`${COLORS.title_color} w-6 h-6 mr-2 flex-shrink-0`}
              />
              <p className="text-lg mb-2 text-center lg:text-left">
                Capitalize on your edge
              </p>
            </div>
            <h3 className="text-3xl lg:text-5xl font-semibold mb-4 text-center lg:text-left">
              <span className={`${COLORS.title_color} font-bold`}>
                Why Edge Computing?
              </span>
            </h3>

            <p className="text-lg mb-4 text-center lg:text-left">
              Capitalize on your edge and drive innovation with DevelMo edge
              computing low latency applications
            </p>

            <ul className="space-y-4 mb-8">
              {bulletPoints.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-8 h-8 mr-2 flex-shrink-0 text-blue-400" />
                  <span className="lg:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`${COLORS.titel_bg} py-16 px-4`}>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center text-white"
                >
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-white/90">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-28 mb-20 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#2596be] mb-4">
              Unlock the Power of Your Surveillance Data
            </h2>
            <p className="lg:text-lg leading-relaxed">
              Transform your existing{" "}
              <span className="text-[#2596be] font-semibold">
                video surveillance data
              </span>{" "}
              into a powerful business asset. Use your existing IP security
              camera setup to gain actionable insights that can drive business
              efficiency, enhance operational excellence , and uncover new
              revenue opportunities.
            </p>
            <p className="lg:text-lg mt-4 leading-relaxed">
              We design AI-powered analytics based on your business needs,
              helping you build{" "}
              <span className="text-[#2596be] font-semibold">
                data-driven strategies
              </span>{" "}
              for growth. Whether you’re in retail, logistics, or any other
              industry, we help you maximize the potential of your monitoring
              systems.
            </p>
            <p className="lg:text-lg mt-4 leading-relaxed">
              With <span className="text-[#2596be] font-semibold">DevelMo</span>
              , your surveillance data becomes a strategic advantage for smarter
              decision-making and operational excellence .
            </p>
          </div>

          <div className="flex-1">
            <img
              src="/cloud-3.png"
              alt="Edge Computing"
              className="w-full h-fit rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="bg-gradient-to-br from-blue-500 to-green-400 rounded-lg p-8 flex-1 transition-transform transform hover:scale-105 animate-fadeIn">
            <div className="text-center">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">
                Get Your Custom Computer Vision Solution Delivered
              </h1>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full hover:bg-opacity-90 transition-colors duration-300">
                  Try CrowdIQ
                </button>
                <button className="bg-transparent text-white font-semibold py-2 px-6 rounded-full border-2 border-white hover:bg-white hover:text-blue-500 transition-colors duration-300">
                  Get a Demo
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 lg:w-1/3 animate-fadeIn">
            <h2 className="text-blue-300 text-xl font-semibold mb-10">
              Explore Our Products
            </h2>
            <ul className="space-y-3">
              <li className="text-white border-t border-gray-700 pt-3">
                <Link to="/omniroad">OmniRoad 2.0</Link>
              </li>
              <li className="text-white border-t border-gray-700 pt-3">
                <Link to="/crowd">CrowdIQ</Link>
              </li>
              <li className="text-white border-t border-gray-700 pt-3">
                <Link to="/attendify">Attendify</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
