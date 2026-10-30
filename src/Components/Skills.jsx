import React from 'react'
import { FaChevronDown } from "react-icons/fa";





const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "FireBase",
  "Redux",
  "React Router",
  "Vercel",
  "Netlify",
  "HTML5",
  "Tailwind CSS",
  "Bootstrap",
  "CSS3",
  "Figma",
  "Git",
  "GitHub Actions"
];

export const Skills = () => {
  return (
    <section>
        <div className='mb-8'>
            {/* Skills Section */}

            <div className='mt-20 animate-fade-in animation-delay-500'>
                <p className='text-sm font-medium text-muted-foreground mb-6 text-center'>Technologies I Work With</p>
                <div className='relative overflow-hidden'>
                    <div className='flex animate-marquee'>
                        {[...skills, ...skills].map((skills, idx)=>(
                        <div key={idx} className='flex-shrink-0 px-8 py-4'>
                            <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors'>{skills}</span>
                        </div>
                    ))}</div>
                </div>
            </div>
        </div>
        <div className='absolute  left-1/2 -translate-1/2 animate-fade-in aimnation-delay-800'>
            <a href="#about"
            className='flex flex-col items-center gap-2 text-muted-foreground hover:text-primary'
            >
                <span className='text-xs uppercase tracking-wider'>Scroll</span>
                
                <FaChevronDown className='w-6 h-6 animate-bounce'/>
            </a>
        </div>
    </section>
  )
}
