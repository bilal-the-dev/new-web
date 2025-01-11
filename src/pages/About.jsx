import React, { useEffect } from "react";
import { products } from "../constants/product";
import { Navigate, useParams, useSearchParams } from "react-router-dom";
import { COLORS } from "../constants/config";

import about1 from "/about-1.png";
import about2 from "/about-3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import {
  Eye,
  Target,
  Heart,
  Globe,
  Building,
  MapPin,
  TrendingUp,
  Shield,
  BarChart2,
  Phone,
  Mail,
  Building2,
} from "lucide-react";

const locations = ["UK", "Saudi Arabia", "Australia", "Pakistan"];

const contacts = [
  { country: "Saudi Arabia", phone: "+966 (0) 55 1028874" },
  { country: "Australia", phone: "+61 (0) 480 008104" },
  { country: "Pakistan", phone: "+92 (0) 331 647636" },
];

const cards = [
  {
    icon: <Eye className="w-10 h-10 text-[#2596be]" />,
    title: "Vision",
    description:
      "To empower every organization to harness the full potential of its data assets.",
  },
  {
    icon: <Target className="w-10 h-10 text-[#2596be]" />,
    title: "Mission",
    description:
      "Build innovative AI solutions which reduce the time to market for our customers.",
  },
  {
    icon: <Heart className="w-10 h-10 text-[#2596be]" />,
    title: "Values",
    description:
      "Committed to what we do. Never give up. Equal opportunity to everyone.",
  },
];
const advantages = [
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
    title: "Drive Revenue Growth",
    description: "Leverage data-driven strategies to boost profitability.",
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-500" />,
    title: "Enhance Security Measures",
    description: "Identify and respond to incidents more effectively.",
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-blue-500" />,
    title: "Optimize Operational Efficiency",
    description:
      "Gain insights into workflow patterns and areas for improvement.",
  },
];
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
      delay: 200,
    });
  }, []);

  const pageContent = products["OmniRoad"];

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
      <div className=" min-h-screen">
        <div className="container mx-auto px-4 py-16 pt-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-4 lg:ml-40">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h1
                className={`${COLORS.title_color} text-4xl md:text-6xl font-bold mb-6`}
              >
                About Us
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
                Innovation, Insight, Impact – Our Promise
              </h2>
              <p className="text-lg text-gray-600 max-w-xl mb-8">
                We're dedicated to transforming ideas into reality, driving
                innovation that makes a difference in today's dynamic world.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="mailto:support@example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className={`${COLORS.titel_bg} px-8 py-3 text-white rounded-lg`}
                  >
                    Join Us
                  </button>
                </a>

                <Link to="/build-your-vision">
                  <button className="px-8 py-3 border-2 border-[#2596be] text-[#2596be] rounded-lg hover:bg-blue-50 transition-colors">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 relative">
              <img
                src={about1}
                alt="About Us"
                className="rounded-lg w-full object-cover"
              />
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-3 bg-blue-50 rounded-full">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 py-12 ">
          <div className="max-w-7xl mx-auto px-4 ">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Partnering to co-create lasting value through{" "}
                  <span className={`${COLORS.title_color}`}>AI & Data</span>
                </h2>

                {/* Locations */}
                <div className="flex flex-wrap gap-4">
                  {locations.map((location) => (
                    <div
                      key={location}
                      className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full"
                    >
                      <MapPin className="w-4 h-4 text-[#2596be]" />
                      <span className="text-gray-700 font-medium">
                        {location}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Global Description */}
                <div className="bg-white rounded-xl p-6  border border-gray-100">
                  <div className="flex gap-4">
                    <Globe className="w-6 h-6 text-[#2596be] mt-1 flex-shrink-0" />
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        We are UK-based company with our offices in{" "}
                        <span
                          className={`${COLORS.title_color} font-semibold `}
                        >
                          Saudi Arabia
                        </span>
                        ,{" "}
                        <span
                          className={`${COLORS.title_color} font-semibold `}
                        >
                          Australia
                        </span>{" "}
                        and{" "}
                        <span
                          className={`${COLORS.title_color} font-semibold `}
                        >
                          Pakistan
                        </span>
                        .
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        We enable businesses and their industries to increase
                        their performance and enhance customer experience. Our
                        team of AI video experts is dedicated to helping
                        businesses unlock the full potential of their
                        surveillance footage.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Our mission is to transform standard security recordings
                        into valuable insights that drive operational excellence
                        and strategic decision-making.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src={about2}
                    alt="Global Presence"
                    className="w-full h-auto rounded-2xl  object-cover"
                  />
                  {/* Stats Overlay */}
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-4xl font-bold text-[#2596be]">4+</p>
                        <p className="text-sm text-gray-600">Global Offices</p>
                      </div>
                      <div>
                        <p className="text-4xl font-bold text-[#2596be]">
                          24/7
                        </p>
                        <p className="text-sm text-gray-600">Support</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gray-50 shadow-xl rounded-2xl -rotate-6 z-0"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-xl mb-4 text-[#2596be] font-semibold px-2 py-2 bg-blue-50 rounded-full inline-block">
              Global Footprint
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Headquarters</h3>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-[#2596be] mt-1" />
                    <div>
                      <p className="font-medium">Address:</p>
                      <p className="text-gray-600">
                        20 Wenlock Road
                        <br />
                        London N1 7GU, United Kingdom
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {contacts.map((contact, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#2596be]" />
                      <div>
                        <p className="font-medium">{contact.country}:</p>
                        <p className="text-gray-600">{contact.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#2596be]" />
                  <div>
                    <p className="font-medium">Email:</p>
                    <a
                      href="mailto:info@develmo.com"
                      className="text-[#2596be] hover:underline"
                    >
                      info@develmo.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Map */}
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.5804889812936!2d-0.09352158466333215!3d51.53099887963885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca99b4d4a93%3A0xa537abae91e6c76d!2s20%20Wenlock%20Rd%2C%20London%20N1%207GU%2C%20UK!5e0!3m2!1sen!2sus!4v1691776606758!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                {/* Section Tag */}
                <div className="">
                  <p className="text-lg text-[#2596be] font-semibold px-4 py-2 bg-blue-50 rounded-full inline-block">
                    Join our Team
                  </p>
                </div>
                <h3 className="text-4xl font-semibold">
                  Are you our new superstar?
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Building2 className="w-6 h-6 text-[#2596be] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 mb-2">
                        We have many open positions, understand our culture
                      </p>
                      <p className="text-gray-600">
                        and how we aim to diversify and strengthen the range of
                        perspectives that exist on our team.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#2596be] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 mb-2">
                        Drop off your CV or resume:
                      </p>
                      <a
                        href="mailto:shahzebali@develmo.com"
                        className="text-[#2596be] hover:underline"
                      >
                        shahzebali@develmo.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative h-full">
                <img
                  src="/team.png"
                  alt="Join our team"
                  className="w-full rounded-lg object-cover h-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
