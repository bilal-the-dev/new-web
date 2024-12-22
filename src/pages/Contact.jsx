import React, { useEffect, useState } from "react";
import { Send, MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CONTACT_US_CONTENT } from "../constants/contact";
import { COLORS } from "./../constants/config";
import emailjs from "@emailjs/browser";

// EmailJS Configuration - REPLACE WITH YOUR ACTUAL KEYS
const EMAIL_JS_CONFIG = {
  SERVICE_ID: "service_qsf9icr",
  TEMPLATE_ID: "template_n0jrynh",
  PUBLIC_KEY: "XrSTvJgy2muCiI7A5",
};

const AnimatedSection = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.div>
  );
};

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    Email: "",
    Industry: "",
    data: "",
    Challenges: "",
    "Additional Information": "",
  });
  const [submitStatus, setSubmitStatus] = useState({
    message: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAIL_JS_CONFIG.PUBLIC_KEY);

      // Send email
      const response = await emailjs.send(
        EMAIL_JS_CONFIG.SERVICE_ID,
        EMAIL_JS_CONFIG.TEMPLATE_ID,
        {
          from_email: formData.Email,
          from_industry: formData.Industry,
          from_data_type: formData.data,
          from_challenges: formData.Challenges,
          from_additional_info: formData["Additional Information"],
        }
      );

      // Reset form and show success message
      setFormData({
        Email: "",
        Industry: "",
        data: "",
        Challenges: "",
        "Additional Information": "",
      });

      setSubmitStatus({
        message: "Message sent successfully!",
        type: "success",
      });

      console.log("Email sent successfully", response);
    } catch (error) {
      console.error("Failed to send email", error);
      setSubmitStatus({
        message: "Failed to send message. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{
        backgroundColor: COLORS.background,
        color: COLORS.text,
        padding: "1.5rem",
        minHeight: "100vh",
      }}
    >
      <main className="max-w-5xl w-full py-16 px-6 sm:px-10 lg:px-16">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div className="space-y-8">
              <h3 className="text-4xl lg:text-5xl font-semibold mb-4">
                <span className={`text-blue-500`}>
                  {CONTACT_US_CONTENT.contactInfo.title}
                </span>
              </h3>

              <div className="space-y-6">
                {/* Address Section */}
                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-500 p-3 rounded-lg transform transition-all group-hover:scale-110">
                    <MapPinIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      Address:
                    </h3>
                    <p className="text-gray-600">
                      20 Wenlock Road
                      <br />
                      London N1 7GU, United Kingdom
                    </p>
                  </div>
                </div>

                {/* Phone Numbers Section */}
                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-500 p-3 rounded-lg transform transition-all group-hover:scale-110">
                    <PhoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      Phone:
                    </h3>
                    <div className="space-y-1">
                      <p className="text-gray-600">
                        <span className="font-medium text-blue-600">
                          Saudi Arabia:{" "}
                        </span>
                        +966 (0) 55 1028874
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium text-blue-600">
                          Australia:{" "}
                        </span>
                        +61 (0) 480 008104
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium text-blue-600">
                          Pakistan:{" "}
                        </span>
                        +92 (0) 331 647636
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email Section */}
                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-500 p-3 rounded-lg transform transition-all group-hover:scale-110">
                    <MailIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      Email:
                    </h3>
                    <a
                      href="mailto:info@develmo.com"
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                    >
                      info@develmo.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-4">
                {CONTACT_US_CONTENT.contactForm.title}
              </h2>

              {submitStatus.message && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {CONTACT_US_CONTENT.contactForm.fields.map((field) => (
                  <div key={field.name} className="space-y-2">
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-semibold text-gray-800"
                    >
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        rows="4"
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-sm"
                        placeholder={`Enter your ${field.label.toLowerCase()}...`}
                        required
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-sm"
                        placeholder={`Enter your ${field.label.toLowerCase()}...`}
                        required
                      />
                    )}
                  </div>
                ))}
                <motion.button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition duration-300 w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {CONTACT_US_CONTENT.contactForm.submitButton}
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
};

export default ContactUsPage;
