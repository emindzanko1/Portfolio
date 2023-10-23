'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src='https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.6435-1/159777540_10158857842176067_7749871483390806744_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=lGuhDZMfWpAAX_6fNl-&_nc_ht=scontent.fsjj1-1.fna&oh=00_AfDdz-5E4Qhl7KdW6K0djUYiYh7-W-CUmEccW1GNuTrsrw&oe=655DB91C'
              alt='Emin portrait'
              width='192'
              height='192'
              quality='95'
              priority={true}
              className='h-24 w-24 rounded-full 
            object-cover border-[0.35rem] border-white shadow-xl'
            />
          </motion.div>

          <motion.span
            className='absolute bottom-0 right-0 text-2xl'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className='mb-10 mt-4 px-4 text 2xl
      font-medium leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hello, I'm Emin.</span> I'm a{' '}
        <span className='font-bold'>full-stack developer</span> with <span className='font-bold'>8 years</span> of
        experience. I enjoy building <span className='italic'>sites & apps</span>. My focus is{' '}
        <span className='underline'>React (Next.js)</span>.
      </motion.p>
      <div className='flex flex-col sm:flex-row'>
        <Link
          href='#contact'
          className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2
        rounded-full'
        >
          Contact me here
          <BsArrowRight />
        </Link>
        <a
          className='bg-white px-7 py-3 flex items-center gap-2
        rounded-full'
        >
          Download CV <HiDownload />
        </a>
        <a
          className='bg-white p-4 text-gray-700 flex items-center gap-2
        rounded-full'
        >
          <BsLinkedin />
        </a>
        <a
          className='bg-white p-4 text-gray-700 flex items-center gap-2
        text-[1.35rem] rounded-full'
        >
          <FaGithubSquare />
        </a>
      </div>
    </section>
  );
}
