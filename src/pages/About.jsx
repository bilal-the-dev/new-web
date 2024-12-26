import React, { useEffect } from "react";
import { products } from "../constants/product";
import { Navigate, useParams, useSearchParams } from "react-router-dom";
import { COLORS } from "../constants/config";
import AOS from "aos";
import "aos/dist/aos.css";

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
    icon: <Eye className="w-10 h-10 text-blue-500" />,
    title: "Vision",
    description:
      "To empower every organization to harness the full potential of its data assets.",
  },
  {
    icon: <Target className="w-10 h-10 text-blue-500" />,
    title: "Mission",
    description:
      "Build innovative AI solutions which reduce the time to market for our customers.",
  },
  {
    icon: <Heart className="w-10 h-10 text-blue-500" />,
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
        <div className="container mx-auto px-4 py-16">
          <div className="text-center flex justify-center flex-col mb-16">
            <h1 className={`text-6xl font-bold mb-4 ${COLORS.title_color}`}>
              About Us
            </h1>

            <h2 className="text-3xl font-semibold text-gray-700">
              Innovation, Insight, Impact – Our Promise
            </h2>
          </div>

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
        <div className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Partnering to co-create lasting value through AI & Data
            </h2>

            <div className="flex justify-center gap-4 mb-8">
              {locations.map((location) => (
                <div key={location} className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span className="text-gray-600">{location}</span>
                </div>
              ))}
            </div>

            <div className="mb-12">
              <div className="flex items-start gap-2 mb-6">
                <Globe className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  We are UK-based company with our offices in{" "}
                  <span>Saudi Arabia, Australia</span> and <span>Pakistan</span>
                  . We enable businesses and their industries to increase their
                  performance and enhance customer experience. Our team of AI
                  video experts is dedicated to helping businesses unlock the
                  full potential of their surveillance footage. Our mission is
                  to transform standard security recordings into valuable
                  insights that drive operational excellence and strategic
                  decision-making.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <p className="text-gray-700 leading-relaxed"></p>
              </div>
            </div>

            <p className="text-xl font-semibold mb-8 text-center">
              By applying advanced analytics to your existing surveillance
              systems, we enable you to:
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {advantages.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all 
                           transform hover:-translate-y-1 duration-300"
                >
                  <div className="p-4 bg-blue-50 rounded-xl inline-block mb-6">
                    <div className="text-blue-500">{item.icon}</div>
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-xl text-blue-600 font-semibold px-4 py-3 bg-blue-50 rounded-full inline-block">
                Partner with DevelMo to transform your surveillance footage into
                strategic assets
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-xl mb-8 text-blue-600 font-semibold px-4 py-3 bg-blue-50 rounded-full inline-block">
              Global Footprint
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Headquarters</h3>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-blue-500 mt-1" />
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
                      <Phone className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium">{contact.country}:</p>
                        <p className="text-gray-600">{contact.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium">Email:</p>
                    <a
                      href="mailto:info@develmo.com"
                      className="text-blue-500 hover:underline"
                    >
                      info@develmo.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Map */}
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg h-[400px]">
                {/* Replace with your map image */}
                <img
                  src="/world.png"
                  alt="Global presence map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-xl text-blue-600 font-semibold px-4 py-3 bg-blue-50 rounded-full inline-block">
              Join our Team
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-semibold mb-4">
                    Are you our new superstar ?
                  </h3>
                  <div className="flex items-start gap-3 mt-8">
                    <Building2 className="w-6 h-6 text-blue-500 mt-1" />
                    <div>
                      <p className="font-medium">
                        We have many open positions, understand our culture
                      </p>
                      <p className="text-gray-600">
                        and how we aim to diversify and strengthen the range
                        <br />
                        of perspectives that exist on our team.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mt-8">
                    <Mail className="w-6 h-6 text-blue-500 mt-1" />
                    <div>
                      <p className="font-medium">
                        Drop off your CV or resume :
                      </p>
                      <p className="text-gray-600">shahzebali@develmo.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Map */}
              <div className=" h-[420px]">
                {/* Replace with your map image */}
                <img
                  src="/hiring.webp"
                  alt="Global presence map"
                  className="w-full h-full object-cover"
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
