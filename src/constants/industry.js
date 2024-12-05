// constants.js

import Hero from "../assets/industry/hero.webp";
import Feature from "../assets/industry/e1.webp";
export const HERO_SECTION = {
  title: "AI-Driven Computer Vision Solutions in",
  highlightText: "Industry",
  description:
    "From enhancing retail operations to revolutionizing healthcare, discover how DevelMo's computer vision technology transforms industries for the better.",
  imagePath: "/General.jpg",
};

export const VISION_BANNER = {
  title: "AI-Driven Computer Vision Solutions",
  subtitle:
    "DevelMo's Computer Vision technology transforms industries for the better.",
};

export const FEATURES = [
  {
    title: "Retail",
    description:
      "Transform the retail experience by leveraging AI-powered computer vision. With applications such as customer behavior analytics, inventory tracking, and theft prevention, retailers can gain valuable insights to enhance store layouts, improve product placement, and create personalized customer experiences. Our solutions also enable real-time monitoring of foot traffic, helping retailers adapt to ",
    highlightText: "peak hours and optimize staffing.",
    imgSrc: "/Retail.jpg",
    imgAlt: "Wafer Inspection",
  },
  {
    title: "Healthcare",
    description:
      "Revolutionize healthcare with the power of computer vision. From assisting in medical imaging analysis to monitoring patient vitals and even supporting surgeons in real-time, computer vision enhances diagnostic accuracy and patient care. By detecting anomalies in X-rays, MRIs, and CT scans, our technology enables early diagnosis and reduces human error. In surgery, AI-assisted cameras can alert surgeons to vital issues, ",
    highlightText: "improving patient outcomes and minimizing risks.",
    imgSrc: "/Health.jpg",
    imgAlt: "Optical Pattern Recognition",
  },
  {
    title: "Manufacturing",
    description:
      "Achieve unmatched quality and efficiency in manufacturing through computer vision. Our technology enables automated quality inspection to detect product defects, ensuring only the highest quality items reach consumers. Assembly line monitoring helps to identify bottlenecks, streamline workflows, and optimize resource usage. Additionally, real-time fault detection reduces waste by catching issues early, preventing costly downtime, ",
    highlightText: "and enhancing overall productivity.",
    imgSrc: "/Manufacturing.jpg",
    imgAlt: "Semiconductor Quality Control",
  },
  {
    title: "Transportation & Smart Cities",
    description:
      "Pave the way for safer, smarter cities with computer vision. Our solutions provide real-time traffic analysis for optimized flow, help detect road accidents instantly to alert emergency responders, and monitor traffic density to reduce congestion. By integrating with city infrastructure, computer vision can also enhance public transportation, manage pedestrian traffic, and support sustainable urban development. OmniRoad AI is a prime example,",
    highlightText:
      " offering actionable insights for efficient road management.",
    imgSrc: "/Traffic.jpg",
    imgAlt: "Semiconductor Quality Control",
  },
  {
    title: "Agriculture",
    description:
      "Empower precision farming and sustainable practices with AI-powered computer vision. Our technology enables crop monitoring to assess health, identify pests, and detect nutrient deficiencies, ensuring timely interventions for optimal yield. With disease detection capabilities, farmers can spot issues early to reduce crop loss, and livestock monitoring helps track the health and activity of animals, improving farm management. This data-driven approach enhances productivity while conserving resources, .",
    highlightText: "supporting sustainable agriculture",
    imgSrc: "/Agriculture.jpg",
    imgAlt: "Semiconductor Quality Control",
  },
];

export const EFFICIENCY_CARDS = [
  {
    icon: "ArrowUpCircle",
    title: "Maintain Quality, Boost Efficiency",
    points: [
      "Visual inspection of electronic devices poses several challenges, largely due to the sheer number of applications involved. Tasks such as wafer inspection, PCB inspection, and welding/soldering inspection each present unique, difficult complexities for traditional machine vision systems.",
      "By training software with images of defective and non-defective parts, LandingLens can perform better than rules-based systems, improve inspection accuracy, and reduce false positives. Additionally, the software standardizes deep learning solutions to reduce development time and to scale projects easily to multiple facilities.",
    ],
  },
  {
    icon: "Settings",
    title: "Easily Adapt to Evolving Needs",
    points: [
      "Electronics manufacturing needs can quickly vary and evolve, for example, when new or customized parts are introduced into a process. Deep learning systems must be flexible and capable of adapting to meet new inspection requirements in today's ever-changing manufacturing environment.",
      "LandingLens deep learning software provides continuous learning capabilities, which makes the accommodation of changes fast and easy. When new parts are introduced or environmental changes occur, users can easily add new images into the model and update it on the go.",
    ],
  },
];

export const STATS = [
  { value: "99.9%", label: "Accuracy Rate" },
  { value: "60%", label: "Faster Deployment" },
  { value: "40%", label: "Cost Reduction" },
  { value: "24/7", label: "Monitoring" },
];
