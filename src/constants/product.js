import hero from "../assets/product/hero.svg";
import feature1 from "../assets/product/feature-1.gif";

export const products = {
  Attendify: {
    hero: {
      title: "Attendify",
      breakTitle: "Smart Attendance Made Simple for Teachers",
      subtitle:
        "Automate attendance tracking with facial recognition, saving time and ensuring accuracy.",
      buttonText: "Request a Demo",
      image: hero,
    },
    feature_1: {
      mainTitle: "The Attendify Advantage",
      title: "Transforming Classroom Attendance with AI",
      description:
        "Attendify uses AI facial recognition for fast, accurate attendance tracking, letting teachers focus on teaching.",
      image: "/attendify-3.png",
      bulletPoints: [
        "No More Manual Tracking: Save valuable class time by automating attendance.",
        "Easy Student Setup: Upload a single photo per student to get started.",
        "Reliable, Real-Time Recognition: Identify each student with facial recognition technology in seconds.",
      ],
      buttons: [],
    },
    feature_2: {
      mainTitle: "Key Features of Attendify",
      title: "Built to Simplify Attendance Management",
      description:
        "Attendify’s features are designed to streamline and enhance attendance management for teachers.",
      image: "attendify-2.png",
      bulletPoints: [
        "Photo Setup: Teachers upload a single photo per student, enabling accurate recognition for the entire term",
        "Real-Time Tracking: Attendance is automatically recorded as students face the camera, with instant feedback to ensure accuracy.",
        "Secure Storage: Attendance records and student photos are stored in a centralized, secure database for easy access and review.",
      ],
      buttons: [],
    },
    feature_3: {
      mainTitle: "Secure Data Storage",
      title: "Attendance Data You Can Trust",
      description:
        "All attendance data, along with student images, is securely stored in a centralized database. ",
      image: feature1,
      bulletPoints: [
        "Centralized Storage: Secure database for easy access, management, and download of attendance records.",
        "Privacy & Security: Data is encrypted with strict access controls for authorized use only.",
        "Long-Term Records: Saves historical data to track attendance trends over time.",
      ],
      buttons: [],
    },
    feature_4: {
      mainTitle: "Customizable Dashboard for Real-Time Traffic Insights",
      title: "Monitor and Analyze Traffic Data with Ease",
      description:
        "Attendify offers a customizable dashboard for real-time traffic data and alerts.",
      image: feature1,
      bulletPoints: [
        "Live Traffic Dashboard: View real-time updates on traffic flow, accident locations, and congestion levels.",
        "Customizable Views: Adjust the dashboard to focus on specific metrics like vehicle counts, traffic density, or accident reports.",
        "Automated Reporting and Analytics: Generate reports on traffic patterns, accident statistics.",
      ],
      buttons: [],
    },
    dataCentricAI: {
      mainTitle: "Empowering Educators with Insights",
      title: "Empowering Educators with Insights",
      heading: "Attendify doesn’t just stop at tracking attendance",
      description:
        "It provides powerful tools to help teachers and administrators make informed decisions.",
      bulletPoints: [
        "Attendance Analytics: Generate reports to track patterns, trends, and challenges.",
        "Custom Notifications: Instantly notify parents of student absences to enhance engagement.",
        "Seamless Integration: Sync attendance data with school systems to streamline workflows.",
      ],
      buttonText: "Learn More",
      images: "/attendify-1.png",
    },
    analytics: {
      badge: "POWERFUL ANALYTICS",
      title: "Get Deep Insights Into Your Vision AI Performance",
      description:
        "Track your model's performance, analyze edge cases, and optimize your computer vision system with our comprehensive analytics dashboard.",
      stats: [
        { label: "Average Accuracy", value: "98.5%" },
        { label: "Processing Time", value: "<50ms" },
        { label: "Edge Cases Found", value: "450+" },
        { label: "Model Versions", value: "Auto-tracked" },
      ],
      image: feature1,
    },

    integration: {
      title: "Seamless Integration With Your Workflow",
      description:
        "Deploy your computer vision models anywhere with our flexible integration options",
      features: [
        {
          icon: "zap",
          title: "Quick Deployment",
          description:
            "Deploy models to edge devices or cloud infrastructure in just a few clicks",
        },
        {
          icon: "users",
          title: "Team Collaboration",
          description:
            "Built-in version control and team management features for smooth collaboration",
        },
        {
          icon: "arrow-right",
          title: "API Integration",
          description:
            "RESTful APIs and SDKs for seamless integration with existing systems",
        },
      ],
      image: feature1,
    },
    last: {
      title: "How Attendify Works",
      desc: "Effortlessly Manage Attendance in Just a Few Steps",
      steps: [
        {
          number: 1,
          title: "Download and Set Up",
          description:
            "Teachers use the Attendify app to set up a class by uploading one student photo for facial recognition.",
          img: feature1,
        },
        {
          number: 2,
          title: "Start Attendance",
          description:
            "The teacher opens the app, starts camera mode, and Attendify automatically records attendance as students stand in front of the camera.",
          img: feature1,
        },
        {
          number: 3,
          title: "Real-Time Attendance Tracking",
          description:
            "The app shows real-time feedback, marking present students and flagging unrecognized ones, allowing teachers to adjust manually if needed.",
          img: feature1,
        },
        {
          number: 4,
          title: "Secure Data Storage",
          description:
            "Attendance records and photos are securely stored in Attendify’s central database, available for teachers to access, review, and export.",
          img: feature1,
        },
      ],
    },
  },
  OmniRoad: {
    hero: {
      title: "OmniRoad 2.0",
      breakTitle: "Revolutionizing Road Safety and Traffic Management",
      subtitle:
        "Real-time traffic insights and automated incident detection for safer, smarter roads",
      buttonText: "Try OmniRoad",
      image: "/omni-1-mov.mov",
    },
    feature_1: {
      mainTitle: "The OmniRoad Advantage",
      title: "Bringing Intelligence to Roadways",
      description:
        "OmniRoad 2.0 uses AI to analyze traffic, detect accidents, and enhance road safety.",
      image: "/omni-2-mov.mov",
      bulletPoints: [
        "Real-Time Traffic Insights: Gain immediate data on traffic density, vehicle counts, and more.",
        "Automated Incident Detection: Detect accidents as they happen and assess severity for faster response",
        "Optimized Traffic Management: Use data-driven insights to reduce congestion and improve road safety.",
      ],
      buttons: [],
    },
    feature_2: {
      mainTitle: "Key Features of OmniRoad 2.0",
      title: "Traffic Monitoring with AI-Powered Insights",
      description:
        "OmniRoad 2.0’s suite of features is designed to optimize road safety and traffic management.",
      image: "/omni-3.png",
      bulletPoints: [
        "Object Detection: Identifies vehicles, pedestrians, and road elements with precision.",
        "Accident Alerts: Detects accidents and assesses severity for prioritized responses",
        "Traffic Analysis: Tracks vehicle counts and flow to optimize planning.",
        "Instant Alerts: Notifies of accidents or high traffic density immediately.",
      ],
      buttons: [],
    },
    feature_3: {
      mainTitle: "Secure Data Storage and Management",
      title: "Data Management for Decision-Making",
      description:
        "OmniRoad 2.0 securely stores all traffic data, making it easy for authorities to access historical data for analysis.",
      image: feature1,
      bulletPoints: [
        "Centralized Database for Traffic Insights: All data, including vehicle counts, accident reports, is stored in a secure database.",
        "Historical Data Access: Review traffic patterns, accident history, and congestion trends over time.",
        "Data Privacy and Security: OmniRoad ensures that all data is encrypted and accessible only to authorized personnel",
      ],
      buttons: [],
    },
    feature_4: {
      mainTitle: "Customizable Dashboard for Real-Time Traffic Insights",
      title: "Monitor and Analyze Traffic Data with Ease",
      description:
        "OmniRoad 2.0 offers a customizable dashboard for real-time traffic data and alerts.",
      image: feature1,
      bulletPoints: [
        "Live Traffic Dashboard: View real-time updates on traffic flow, accident locations, and congestion levels.",
        "Customizable Views: Adjust the dashboard to focus on specific metrics like vehicle counts, traffic density, or accident reports.",
        "Automated Reporting and Analytics: Generate reports on traffic patterns, accident statistics.",
      ],
      buttons: [],
    },
    dataCentricAI: {
      title: "Effortless Setup and Integration",
      heading: "Seamlessly Integrate with Existing Road Camera Systems",
      description:
        "OmniRoad 2.0 works with most cameras, enabling easy adoption without costly hardware.",
      bulletPoints: [
        "Seamless Integration: Easily connect your existing cameras by entering simple RTSP details without requiring additional hardware.",
        "Quick Calibration: Automatically detect and configure tracking zones for precise and efficient data collection.",
        "Customizable Deployment: Choose between cloud or on-premises options for optimal performance and data security.",
      ],
      buttonText: "Learn More",
      image: "/omni-4.jpg",
    },
    analytics: {
      badge: "POWERFUL ANALYTICS",
      title: "Get Deep Insights Into Your Vision AI Performance",
      description:
        "Track your model's performance, analyze edge cases, and optimize your computer vision system with our comprehensive analytics dashboard.",
      stats: [
        { label: "Average Accuracy", value: "98.5%" },
        { label: "Processing Time", value: "<50ms" },
        { label: "Edge Cases Found", value: "450+" },
        { label: "Model Versions", value: "Auto-tracked" },
      ],
      image: feature1,
    },

    integration: {
      title: "Seamless Integration With Your Workflow",
      description:
        "Deploy your computer vision models anywhere with our flexible integration options",
      features: [
        {
          icon: "zap",
          title: "Quick Deployment",
          description:
            "Deploy models to edge devices or cloud infrastructure in just a few clicks",
        },
        {
          icon: "users",
          title: "Team Collaboration",
          description:
            "Built-in version control and team management features for smooth collaboration",
        },
        {
          icon: "arrow-right",
          title: "API Integration",
          description:
            "RESTful APIs and SDKs for seamless integration with existing systems",
        },
      ],
      image: feature1,
    },
    last: {
      title: "How OmniRoad 2.0 Works",
      desc: "Experience Safer, Smarter Roadways in a Few Simple Steps",
      steps: [
        {
          number: 1,
          title: "Connect to Road Cameras",
          description:
            "OmniRoad 2.0 auto-detects and integrates with compatible road cameras, instantly connecting to live feeds",
          img: feature1,
        },
        {
          number: 2,
          title: "Real-Time Object Detection",
          description:
            "Once connected, OmniRoad begins detecting vehicles, road elements in real time, providing insights on road usage",
          img: feature1,
        },
        {
          number: 3,
          title: "Accident Detection and Notification",
          description:
            "OmniRoad’s AI continuously monitors for accidents, assessing severity and sending instant alerts to designated contacts",
          img: feature1,
        },
        {
          number: 4,
          title: "Secure Data Storage",
          description:
            "All traffic data, including vehicle counts, accident reports, and congestion data, is stored securely for future analysis",
          img: feature1,
        },
      ],
    },
  },
  CrowdIQ: {
    hero: {
      title: "CrowdIQ",
      breakTitle: " Real-Time Visitor Analytics and Insights",
      subtitle:
        "Unlock the power of AI to monitor, analyze, and optimize visitor engagement.",
      buttonText: "Request a Demo",
      image: "/crowd-1.png",
    },
    feature_1: {
      mainTitle: "The CrowdIQ Advantage",
      title: "Insights to Retail Spaces",
      description:
        "CrowdIQ uses AI analytics to deliver real-time visitor insights, helping retailers enhance customer experience and optimize operations.",
      image: "/crowdiq-5.png",
      bulletPoints: [
        "AI-Driven Visitor Analytics: Understand visitor behavior, demographics, and engagement patterns effortlessly",
        "Automated Crowd Monitoring: Track visitor counts, density, and flow to adjust in-store layouts and promotions.",
        "Optimized Store Management: Leverage insights to staff effectively, plan inventory, and increase customer satisfaction.",
      ],
      buttons: [],
    },
    feature_2: {
      mainTitle: "Key Features of CrowdIQ",
      title: "Analytics for Retail Success",
      description:
        "CrowdIQ’s feature set is designed to provide comprehensive insights for retailers looking to enhance customer engagement and operational efficiency.",
      image: "/crowd-3.png",
      bulletPoints: [
        "Visitor Counting – Accurately track the number of visitors entering and leaving the store.",
        "Demographic Analysis – Identify age and gender demographics to understand your customer base better",
        "Time Tracking – Monitor how long visitors spend in different areas, helping identify high-interest zones",
        "Peak and Off-Peak Analysis – Determine rush hours and quieter times to optimize staffing and resources.",
        "Repeat vs. New Visitors – Track returning customers vs. new ones to gauge customer loyalty",
      ],
      buttons: [],
    },
    feature_3: {
      mainTitle: "Secure Data Storage",
      title: "Reliable Storage for Decision-Making",
      description:
        "CrowdIQ securely stores all visitor data, ensuring you have a reliable, long-term record of visitor patterns and metrics.",
      image: feature1,
      bulletPoints: [
        "Centralized Database: Securely stores visitor data for easy access, management, and reporting.",
        "Historical Data Access: Analyze visitor trends, peak times, and demographics over long periods.",
        "Data Privacy and Security: Uses encryption and access controls to ensure only authorized personnel can view or export data.",
      ],
      buttons: [],
    },
    feature_4: {
      mainTitle: "Customizable Dashboard for Insights",
      title: "Hub for Real-Time Analytics",
      description:
        "CrowdIQ’s dashboard offers a complete view of visitor metrics, helping retailers visualize data, track patterns, and generate reports with ease.",
      image: feature1,
      bulletPoints: [
        "Real-Time Metrics: View current visitor counts, demographics, and activity.",
        "Customizable Widgets: Focus on key store metrics with adjustable dashboards.",
        "Automated Reports: Generate and schedule delivery of visitor trends and analysis.",
      ],
      buttons: [],
    },
    dataCentricAI: {
      title: "Effortless Setup and Integration",
      heading: "Quick and Easy Integration with In-Store Cameras",
      description:
        "CrowdIQ is designed to work with your existing in-store cameras, making it easy to get started without additional hardware.",
      bulletPoints: [
        "Auto-Detect Cameras: CrowdIQ automatically finds and connects to IP cameras on your network, making setup easy.",
        "Minimal Setup: Once connected, CrowdIQ automatically calibrates tracking zones for quick and efficient data collection.",
        "Flexible Deployment: Choose between cloud-based processing for convenience or on-premises deployment for enhanced data security.",
      ],
      buttonText: "Learn More",
      image: "/crowd-2.png",
    },
    analytics: {
      badge: "POWERFUL ANALYTICS",
      title: "Get Deep Insights Into Your Vision AI Performance",
      description:
        "Track your model's performance, analyze edge cases, and optimize your computer vision system with our comprehensive analytics dashboard.",
      stats: [
        { label: "Average Accuracy", value: "98.5%" },
        { label: "Processing Time", value: "<50ms" },
        { label: "Edge Cases Found", value: "450+" },
        { label: "Model Versions", value: "Auto-tracked" },
      ],
      image: feature1,
    },

    integration: {
      title: "Seamless Integration With Your Workflow",
      description:
        "Deploy your computer vision models anywhere with our flexible integration options",
      features: [
        {
          icon: "zap",
          title: "Quick Deployment",
          description:
            "Deploy models to edge devices or cloud infrastructure in just a few clicks",
        },
        {
          icon: "users",
          title: "Team Collaboration",
          description:
            "Built-in version control and team management features for smooth collaboration",
        },
        {
          icon: "arrow-right",
          title: "API Integration",
          description:
            "RESTful APIs and SDKs for seamless integration with existing systems",
        },
      ],
      image: feature1,
    },
    last: {
      title: "How CrowdiQ Works",
      steps: [
        {
          number: 1,
          title: "Auto-Detect and Connect Cameras",
          description:
            "CrowdIQ auto-detects IP cameras in your network. Select your in-store camera to start tracking.",
          img: feature1,
        },
        {
          number: 2,
          title: "Intelligent Zone Calibration",
          description: "CrowdIQ auto-detects IP cameras for instant tracking.",
          img: feature1,
        },
        {
          number: 3,
          title: "Real-Time Visitor Analytics",
          description:
            "Connected and calibrated, CrowdIQ shows real-time visitor data on a sleek dashboard.",
          img: feature1,
        },
        {
          number: 4,
          title: "Secure Data Storage",
          description:
            "CrowdIQ securely stores all visitor data, providing easy access to both historical and real-time metrics.",
          img: feature1,
        },
      ],
    },
  },
};
