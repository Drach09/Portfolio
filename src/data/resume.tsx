import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

interface HackathonLink {
  icon: React.ReactNode;
  title: string;
  href: string;
}

interface ProjectLink {
  icon: React.ReactNode;
  type: string;
  href: string;
}

export const DATA = {
  name: "Dale Rio Luis",
  initials: "DRL",
  url: "https://dalerioluis.com",
  location: "Goa, India",
  locationLink: "https://www.google.com/maps/place/goa",
  description:
    "Computer Engineering student with hands-on experience in full-stack development. Proven ability to build and ship real-world applications with multiple top-10 hackathon finishes and projects ranging from B2B marketplaces to wearable health devices.",
  summary:
    "Computer Engineering student (CGPA: 8.67) building intelligent solutions with full-stack expertise. Shipped multiple production applications including real-time marketplaces, AI-powered tools, and autonomous systems. 4x hackathon top-10 finalist. Skilled in React, Python, Node.js, and cloud technologies with proven ability to architect scalable systems and ship projects end-to-end.",
  avatarUrl: "/dale.jpeg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "JavaScript", icon: Nodejs },
    { name: "C++", icon: Csharp },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Node.js", icon: Nodejs },
    { name: "TypeScript", icon: Typescript },
  ],
  technicalSkills: {
    languages: [
      "Python",
      "C/C++",
      "Java",
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
      "PHP",
    ],
    frameworksTools: [
      "ReactJS",
      "Node.js",
      "FastAPI",
      "PostgreSQL",
      "Firebase",
      "Scrapy",
      "Git",
      "GitHub",
      "Angular 17",
      "OpenLayers",
      "WebSockets",
      "Drizzle ORM",
    ],
    concepts: [
      "DBMS",
      "REST APIs",
      "Full-Stack Development",
      "Responsive Web Design",
      "Computer Vision",
      "Object Detection",
      "Geospatial Mapping",
      "IoT Systems",
    ],
    softSkills: [
      "Constructive Feedback Handling",
      "Work Ethic",
      "Teamwork & Collaboration",
      "Communication",
      "Adaptability",
      "Problem-Solving",
    ],
    languagesSpoken: ["English (Fluent)", "Konkani (Fluent)", "Hindi (Fluent)"],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "dalerioluis@gmail.com",
    tel: "+91 8767210625",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/DaleLuis",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dale-luis-4ba977332/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Bodhami",
      href: "https://bodhami.com",
      badges: [],
      location: "Goa",
      title: "Intern",
      logoUrl: "/bodhami.jpg",
      start: "July 2025",
      end: "September 2025",
      description:
        "Worked with Angular 17, TypeScript, Postman, and Eclipse IDE on full-stack development projects. Supported clients in analyzing technical requirements and translating business needs into scalable solutions across software systems. Collaborated with teams to troubleshoot issues, optimize workflows, and assist in implementing technology-driven improvements.",
    },
  ],
  education: [
    {
      school: "Padre Conceicao College of Engineering",
      href: "https://pccegoa.ac.in",
      degree: "Bachelor of Engineering in Computer Engineering",
      logoUrl: "/pcce.png",
      start: "2022",
      end: "Present",
    },
    {
      school: "The Kings School Goa",
      href: "#",
      degree: "Higher Secondary Certificate (HSC) - Science",
      logoUrl: "/kings.png",
      start: "2021",
      end: "2022",
    },
    {
      school: "The Kings School Goa",
      href: "#",
      degree: "Secondary School Certificate (SSC)",
      logoUrl: "/kings.png",
      start: "2019",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Circular-Hub Goa",
      href: "#",
      dates: "2024 - 2025",
      active: true,
      description:
        "A full-stack web platform where businesses and individuals in Goa can list, discover, and exchange recyclable resources like plastic, glass, and organic waste. Built the entire frontend and backend; implemented real-time chat between users using WebSockets, and a review system where both parties must submit feedback before reviews go public. Added an interactive map showing nearby listings based on user location with alerts for matching resources.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "WebSockets",
      ],
      links: [] as ProjectLink[],
      image: "/undraw_customer-survey_ek29.svg",
      video: "",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      title: "Market Plus",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Unified product search across 10+ Indian e-commerce platforms using Gemini AI — compare prices in real time. Integrated Google Gemini LLM to automatically generate relevant product variants from user queries, reducing manual search effort. Built a dual scraping engine using BeautifulSoup and Scrapy with Playwright for JavaScript-heavy sites, aggregating results into price and rating insights with a responsive React dashboard.",
      technologies: [
        "React",
        "FastAPI",
        "Python",
        "Scrapy",
        "Google Gemini API",
        "BeautifulSoup",
      ],
      links: [] as ProjectLink[],
      image: "/undraw_online-ad_703t.svg",
      video: "",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      title: "Coastal Cleanup Robot",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Autonomous beach-cleaning robot with YOLOv8 object detection, GPS tracking, and real-time waste logging. Trained a custom object detection model on a self-curated coastal waste dataset (plastics, nets, bottles) and developed an Angular/TypeScript operator dashboard with OpenLayers for live GPS tracking and mission telemetry.",
      technologies: [
        "Python",
        "YOLOv8",
        "OpenCV",
        "C++",
        "Angular",
        "TypeScript",
      ],
      links: [] as ProjectLink[],
      image: "/undraw_beach-day_cnsv.svg",
      video: "",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      title: "RainGauge",
      href: "#",
      dates: "2023 - 2024",
      active: true,
      description:
        "AI advisor for rainwater harvesting: analyzes satellite imagery, rainfall patterns, and soil data to generate actionable system designs with exact dimensions and budget guidance. Integrated automated data pipelines, OpenLayers-based roof mapping, 16-day weather forecasts, and an AI chatbot. Designed IoT sensor architecture for real-time tracking and projected-vs-actual analytics dashboard.",
      technologies: ["OpenLayers", "Python", "Angular", "TypeScript", "IoT"],
      links: [] as ProjectLink[],
      image: "/undraw_weather-forecast_h6pw.svg",
      video: "",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    },
  ],
  hackathons: [
    {
      title: "Infofest Hackathon 2025",
      dates: "2025",
      location: "Goa",
      description:
        "Developed a waste segregation platform for Goan beaches, enhancing environmental sustainability through AI-powered waste classification and IoT sensors.",
      image: "",
      win: "Top 10",
      links: [] as HackathonLink[],
    },
    {
      title: "IDEAS 2025",
      dates: "2025",
      location: "India",
      description:
        "Built a wearable device for fall detection and vital monitoring (heart rate & SpO2) with real-time alerts and cloud integration.",
      image: "",
      win: "Top 15",
      links: [] as HackathonLink[],
    },
    {
      title: "NIT Hackathon 2024",
      dates: "2024",
      location: "National Institute of Technology",
      description:
        "Developed a comprehensive Goa tourism app featuring attractions, accommodations, and intelligent trip planning with recommendations.",
      image: "",
      win: "Top 10",
      links: [] as HackathonLink[],
    },
    {
      title: "HACKINDIA Goa",
      dates: "2024",
      location: "Goa",
      description:
        "Developed an AI Presentation generator that produces ready-to-use templates and generates images based on presentation topics.",
      image: "",
      win: "Top 10",
      links: [] as HackathonLink[],
    },
  ],
} as const;
