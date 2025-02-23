import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

import stockImg from "@/public/stockBuddy.png"
import cosmicImg from "@/public/cosmicjewells.png"
import campusImg from "@/public/CampusConnect.png"


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer",
    company: "Improdata",
    location: "Karachi, Pakistan",
    duration: "Jun-Aug, 2024",
    description:
      "Worked on development of a financial product startup, and worked with Technologies like React, Node.js and MySQL.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Computer Science Tutor",
    company: "Preply",
    duration: "Jun 2023 - Present",
    location: "Remote",
    description:
      "350 + hours of virtual tutoring to international students enrolled in Undergraduate or High School programs related computer science courses and programming.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Cosmic Jewels",
    description:
      "I worked as a freelance developer on this project for a jewllery design startup. I setup there website for displaying their services and portfolio.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: cosmicImg,
  },
  {
    title: "Stock Buddy",
    description:
      "Developed a deep learning model to forecast stock prices and built a web app to browse stocks, access historical data from Yahoo Finance, and view price forecast.",
    tags: ["Django", "MySQL", "Tensorflow", "Keras", "React", "Next.js"],
    imageUrl: stockImg,
  },
  {
    title: "Campus Connect",
    description:
      "A centralized system to manage student societies affairs at FAST Karachi Campus.",
    tags: ["TypeScript", "Java", "Next.js", "SpringBoot", "Python", "Langchain", "Flask", "PostgreSQL"],
    imageUrl: campusImg,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "C#",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "Spring Boot",
  ".NET",
  "Flask",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "React",
  "Next.js",
  "Redux",
  "Git",
  "Docker",
  "Kubernetes"
] as const;
