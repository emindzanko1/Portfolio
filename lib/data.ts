import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaSchool } from 'react-icons/fa';
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import scoreSphereNext from "@/public/ScoreSpehereNext.jpg";
import ulaznice from "@/public/Ulaznice.jpg";
import alarm from "@/public/Alarm.jpg";
import cinaeste from "@/public/Cinaeste.png";
import anketa from "@/public/Anketa.png";
import schedule from "@/public/Schedule.jpg";
import places from "@/public/proba.jpg"

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
    title: "Highschool",
    location: "Sarajevo BiH",
    description:
      "I successfully completed my high school education at Prva gimnazija Sarajevo, renowned as the oldest and high-quality high school in Sarajevo.",
    icon: React.createElement(FaSchool),
    date: "2015 - 2019",
  },
  {
    title: "Bachelor degree",
    location: "Sarajevo BiH",
    description:
      "I am a third-year student at the Faculty of Electrical Engineering in Sarajevo, majoring in Computer Science and Informatics. I am only one exam away from graduating.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "ScoreSphere",
    description:
      "I am currently finishing work on a project that involves development of a football result application, that delivers real-time scores, statistics, and match highlights.",
    tags: ["React", "Next.js", "MongoDB", "Node.js", "Express.js"],
    imageUrl: scoreSphereNext,
  },
  {
    title: "Ulaznice.com",
    description:
      "This app simplifies the ticket-buying experience, providing a seamless platform for users to effortlessly purchase event tickets and access event information.",
    tags: [".NET", "HTML", "CSS", "C#", "MySQL"],
    imageUrl: ulaznice,
  },
  {
    title: "Places",
    description:
    "Places App empowers users to effortlessly manage, create, update, and explore their favorite locations with ease.",
    tags: ["React", "Next.js", "MongoDB", "Node.js", "Express.js"],
    imageUrl: places,
  },
  {
    title: "Schedule",
    description:
      "The Schedule App simplifies time management by providing an intuitive platform for organizing and optimizing daily tasks and activities.",
    tags: ["Java", "MySQL", "Maven", "JavaFX", "JUnit"],
    imageUrl: schedule,
  },
  {
    title: "Alarm",
    description:
      "The alarm system provides highly reliable security for properties, ensuring peace of mind and safety for owners and users.",
    tags: ["Java", "MQTT", "LED"],
    imageUrl: alarm,
  },
  {
    title: "Cinaeste",
    description:
      "Mobile application for discovering, rating, and exploring a vast collection of movies, TV shows, and entertainment.",
    tags: ["Kotlin", "XML", "MVVM", "JUnit"],
    imageUrl: cinaeste,
  },
  {
    title: "Anketa",
    description:
    "Anketa enables students to participate in quick and easy surveys.",
    tags: ["Kotlin", "MySQL", "Heroku"],
    imageUrl: anketa,
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  ".NET",
  "Java",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Tailwind",
  "Bootstrap",
  "Motoko",
  "Redux",
  "Git",
  "C",
  "C++",
  "Kotlin",
  "Blender",
  "Python",
  "Framer Motion",
  "Ajax",
  "MQTT",
  "C#",
  "EJS",
  "jQuery"
] as const;