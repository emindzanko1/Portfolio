'use client';

import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection('About');
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40
    scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About Me</SectionHeading>
      <p className='mb-3'>
        As a final year student of <span className='font-medium'>Computer Science and Informatics</span>, set to
        graduate by fall, I am looking for an opportunity to apply knowledge and skills gained throughout studies in a
        professional environment.
        <span className='italic'>Throughout my academic experience and independent work</span> I have had the
        opportunity to work on various projects that allowed me to gain an understanding of{' '}
        <span className='underline'> full-stack</span> application development. I have implemented{' '}
        <span className='underline'>web applications</span>
        {', '}
        <span className='underline'>mobile applications</span>, and applications based on <span className='underline'>embedded systems</span>. I have gone
        through various stages of working with applications, from design to implementation, testing, and maintenance. My
        core stack is <span className='font-medium'>React, Next.js, Node.js, and MongoDB</span>. I am also familiar with
        Java, MySQL, TypeScript, C, C++, .Net, and Kotlin. I am always looking to learn new technologies. I am currently
        looking for a <span className='font-medium'>full-time position</span> as a software developer.
      </p>

      <p>
        <span className='italic'>When I'm not coding</span>, I enjoy playing football, tennis or traveling. I also love{' '}
        <span className='font-medium'>learning new languages</span>. I am currently learning about{' '}
        <span className='font-medium'>Spanish language.</span>
      </p>
    </motion.section>
  );
}
