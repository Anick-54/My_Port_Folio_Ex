import React from 'react'
import { Button } from '../Components/Button'
import { FaArrowRight } from "react-icons/fa6";
import { AnimatedBorderButton } from '../Components/AnimatedBorderButton';
import { LuGithub} from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";








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
                Hi, I'm Anisur Rahman Anick - a Front End software engineer specializing in React, Next.js, and TypeScript. I build scalable, performant web applications that users love.
              </p>
            </div>
            {/* CTAs */}
            <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
              <Button size='lg' className='cursor-pointer font-bold'>Contact Me <FaArrowRight className='w-5 h-5'/></Button>
              <AnimatedBorderButton />
            </div>
            {/* Social Link With Me */}
            <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
              <span className='text-sm text-muted-foreground font-bold'>Follow Me :</span>
              {[
                {icon: <LuGithub />, href: "#"},
                {icon: <FaLinkedinIn />, href: "#"},
                {icon: <FiTwitter />, href: "#"}
              ] .map((social, idx) =>(
                <a 
                key={idx}
                href={social.href}
                className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300'
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className='relatice animate-fade-in animation-delay-300'>
            {/* Profile Image */}
            <div className='relative max-w-md mx-auto'>
              <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse'
              />
              <div className='relative glass rounded-3xl p-2 glow-border'>
                <img src="/profile.png" 
                alt="Anisur Rahman Anick" 
                className='w-full aspect-[4/5] object-cover rounded-2xl'
                />
                {/* Floting Badge */}
                <div className='absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 animate-float'>
                  <div className='flex items-center gap-3'>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'/>
                    <span className='text-sm font-medium'>Available For Work</span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                  <div className='text-2xl font-bold text-primary'>1+</div>
                  <div className='text-xs text-muted-foreground'>Years Exp.</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </section>
    
    </>
  )
}
