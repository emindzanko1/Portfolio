import React from 'react'

export default function Footer() {
  let currentDate = new Date();

  return (
    <footer className='mb-10 px-4
    text-center text-gray-500'>
        <small className='mb-2 block text-xs'>
            &copy; {currentDate.getFullYear()} Emin. All rights reserved.
        </small>
        <p className='text-xs'>
            <span className='font-semibold'>About this website:</span> built with Reaxt & Next.js (App Router & Server Actions), 
            TypeScript, Tailwind CSS, Framer Motion, React Emial & Resend, Vercel hosting.
        </p>
    </footer>
  )
}
