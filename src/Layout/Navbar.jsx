import React, { useEffect, useState } from 'react'
import Logo from '../assets/Logo.png'
import { Button } from '../Components/Button';
import { BsMenuButtonFill } from "react-icons/bs";
import { RiCloseLargeFill } from "react-icons/ri";







const navLinks =[
  {href:"#about", label:"About"},
  {href:"#projects", label:"Projects"},
  {href:"#experince", label:"Experince"},
  {href:"#testimonials", label:"Testimonials"},
 
];
export const Navbar = () => {
  const [ismobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect (()=>{
    const handleScroll = () =>{
      setIsScrolled(window.scrollY > 50 );
    }


  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener ("scroll", handleScroll);

  }, []);




  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${ isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>
      <nav className='container mx-auto px-6 flex items-center justify-between'>
        <a href='#' className='text-xl font-bold tracking-tight hover:text-primary flex gap-0.5'>
          <img src={Logo} alt="#"/>Anick<span></span>
          
        </a>

        {/* Desktop Nav */}


        <div className='hidden md:flex items-center gap-1'>
          <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
            {navLinks.map((link, index)=> (
              <a href={link.href} key={index} className='  px-4 py-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-surface'>{link.label}</a>

            ))}

          </div>
        </div>


        {/* CTA Button */}
        <div className='hidden md:block'>
          <Button size="sm" className='cursor-pointer font-bold'>Contact Me</Button>
        </div>


        {/* Mobile Menu Button */}

        <button className='md:hidden p-2 text-foreground cursor-pointer'onClick={()=>setIsMobileMenuOpen((prev)=>!prev)}>
            {ismobileMenuOpen ? <RiCloseLargeFill size={24}/> : <BsMenuButtonFill size={24}/>}
        </button>
      </nav>
      {/* Mobile Menu */}
        { ismobileMenuOpen && (
          <div className='md:hidden glass-strong animate-fade-in'>
            <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
              {navLinks.map((link, index)=>(
                <a
                  href={link.label}
                  key={index}
                  className="text-lg text-muted-foreground hover:text-foreground "
                >  
                  {link.label}

                </a>
              ))}
              <Button className='sm'>Contact Me</Button>
              
            </div>
          </div>
         )
        } 
    </header>
  )
}
