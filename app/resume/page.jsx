"use client";
import { FaHtml5, FaCss3, FaJs, FaJava, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiPostman,
  SiApachemaven,
  SiJunit5,
  SiGithub,
  SiGit,
  SiMysql,
  SiSpringboot,
  SiHibernate,
  SiSolid,
  SiJira,
  SiSplunk,
  SiJenkins,
} from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "This is the descriptions, please update it once your design is completed.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Dhananay Jadhav",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 8830449186",
    },
    {
      fieldName: "Experience",
      fieldValue: "2.4+ Years",
    },

    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "dhananjayjadhav2151@gmail.com",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Marathi, Hindi",
    },
  ],
};
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "This is the experience from previous company. Please edit it once design is completed",
  items: [
    {
      company: "Deepraj Softwares",
      Position: "Software Engineer",
      duration: "Feb-2024 to April-2024",
    },

    {
      company: "Tech Mahindra",
      Position: "Software Engineer",
      duration: "May-2021 to July-2023",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "This is the education details. Please edit it once design is completed",
  items: [
    {
      institution: "Pune University",
      degree: "Bachlor of Engineering",
      duration: "Aug-2016 to June-2020",
    },
    {
      institution: "Pune University",
      degree: "Bachlor of Engineering",
      duration: "Aug-2016 to June-2020",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "This is skills description. Update it once design is completed",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javaScript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <SiMysql />,
      name: "mysql",
    },
    {
      icon: <SiHibernate />,
      name: "hibernate",
    },
    {
      icon: <SiSpringboot />,
      name: "spring boot",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return <div>resume page</div>;
};

export default Resume;
