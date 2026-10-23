import React from 'react'
import { Button } from '../Components/Button'
import { FaArrowRight } from "react-icons/fa6";
import { AnimatedBorderButton } from '../Components/AnimatedBorderButton';





export const Hero = () => {
  return (
    <>
    <section className='reative min-h-screen flex items-center overflow-hidden'>


      {/*BG */}
      <div className='absolute inset-0 '>
        <img 
        src="/herobg.jpg" 
        alt="Hero Image" 
        className='w-full h-full object-cover opacity-40 '
        />
      </div>
      <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background'/>

      {/* Green Dots */}
      
      <div>
        {[...Array(30)].map((_, i)=>(
          <div 
          className='absolute w-1.5 h-1.5 rounded-full opacity-60'
          style={{
            backgroundColor: "#20B2A6",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`

          }}
          />
        ))}
      </div>

      {/* Content */}
      <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Text Content */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                <span className='w-2 h-2 rounded-full bg-primary animate-pulse'/>
                  Software Enginner • React Specialist
                
              </span>
            </div>
            {/* Headline */}
            <div className='space-y-4'>
              <h1 className='text-5xl md:6xl lg:7xl font-bold leading-tight animate-fade-in animation-delay-100'>
                Crafting <span className='text-primary glow-text'>digital</span>
                <br />
                experiences with
                <br />
                <span className='font-serif italic font-normal text-white'>
                  presicion.
                </span>
              </h1>
              <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200 '>
                Hi, I'm Anisur Rahman Anick - a software engineer specializing in React, Next.js, and TypeScript. I build scalable, performant web applications that users love.
              </p>
            </div>
            {/* CTAs */}
            <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
              <Button size='lg' className='cursor-pointer font-bold'>Contact Me <FaArrowRight className='w-5 h-5'/></Button>
              <AnimatedBorderButton />
              
            </div>
          </div>
          {/* Right Column - Profile Image */}

        </div>
      </div>
      
    </section>
    
    </>
  )
}
