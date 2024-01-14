import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaSchool } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import scoreSphereNext from '@/public/ScoreSpehereNext.jpg';
import ulaznice from '@/public/Ulaznice.jpg';
import alarm from '@/public/Alarm.jpg';
import cinaeste from '@/public/Cinaeste.png';
import anketa from '@/public/Anketa.png';
import schedule from '@/public/Schedule.jpg';
import places from '@/public/proba.jpg';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Highschool',
    location: 'Sarajevo BiH',
    description:
      'I successfully completed my high school education at Prva gimnazija Sarajevo, renowned as the oldest and high-quality high school in Sarajevo.',
    icon: React.createElement(FaSchool),
    date: '2015 - 2019',
  },
  {
    title: 'Bachelor degree',
    location: 'Sarajevo BiH',
    description:
      'I am a third-year student at the Faculty of Electrical Engineering in Sarajevo, majoring in Computer Science and Informatics. I am only one exam away from graduating.',
    icon: React.createElement(LuGraduationCap),
    date: '2019 - 2024',
  },
  {
    title: 'Klika Heroes Mentee',
    location: 'Sarajevo BiH',
    description: `For my Bachelor's thesis, I have finished work on a project using MERN stack. My project involves the development of a football result application that delivers real-time scores, statistics, and match highlights to football enthusiasts. Additionally, I am working on the same project using Next.js instead of React.js. Collaborating with a mentor—an industry expert from a software company in Sarajevo—I am gaining guidance and insights into developing dynamic web applications with React.js and Next.js.`,
    icon: React.createElement(FaReact),
    date: '2023',
  },
] as const;

export const projectsData = [
  {
    title: 'Schedule',
    description:
      'The Schedule App simplifies time management by providing an intuitive platform for organizing and optimizing daily tasks and activities.',
    tags: ['Java', 'MySQL', 'Maven', 'JavaFX', 'JUnit'],
    imageUrl: schedule,
  },
  {
    title: 'ScoreSphere',
    description:
      'I am currently finishing work on a project that involves development of a football result application, that delivers real-time scores, statistics, and match highlights.',
    tags: ['React', 'Next.js', 'MySQL', 'Node.js', 'Express.js'],
    imageUrl: scoreSphereNext,
  },
  {
    title: 'Ulaznice.com',
    description:
      'This app simplifies the ticket-buying experience, providing a seamless platform for users to effortlessly purchase event tickets and access event information.',
    tags: ['.NET', 'HTML', 'CSS', 'C#', 'MySQL'],
    imageUrl: ulaznice,
  },
  {
    title: 'Cinaeste',
    description:
      'Mobile application for discovering, rating, and exploring a vast collection of movies, TV shows, and entertainment.',
    tags: ['Kotlin', 'XML', 'JUnit'],
    imageUrl: cinaeste,
  },
  {
    title: 'Alarm',
    description:
      'The alarm system provides highly reliable security for properties, ensuring peace of mind and safety for owners and users.',
    tags: ['Java', 'MQTT', 'LED'],
    imageUrl: alarm,
  },

  {
    title: 'Anketa',
    description: 'Anketa enables students to participate in quick and easy surveys.',
    tags: ['Kotlin', 'MySQL', 'Heroku'],
    imageUrl: anketa,
  },
  {
    title: 'Places',
    description:
      'Places App empowers users to effortlessly manage, create, update, and explore their favorite locations with ease.',
    tags: ['React', 'Next.js', 'MongoDB', 'Node.js', 'Express.js'],
    imageUrl: places,
  },
] as const;

export const skillsData = [
  'Java',
  'React',
  'Angular',
  'Node.js',
  'Next.js',
  '.NET',
  'JavaScript',
  'MySQL',
  'PostgreSQL',
  'Kotlin',
  'C',
  'C++',
  'HTML',
  'CSS',
  'C#',
  'TypeScript',
  'Express',
  'MongoDB',
  'Tailwind',
  'Bootstrap',
  'Motoko',
  'Redux',
  'Git',
  'Blender',
  'Python',
  'Framer Motion',
  'Ajax',
  'MQTT',
  'EJS',
  'jQuery',
] as const;
