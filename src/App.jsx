import React from 'react'
import { Navbar } from './Layout/Navbar';
import {Hero} from './Sections/Hero';
import {About} from './Sections/About'
import {Contact} from './Sections/Contact';
import {Experince} from './Sections/Experince';
import {Projects} from './Sections/Projects';
import {Testimonials} from './Sections/Testimonials';





const App = () => {


  
  return (
    <>
   <div className='min-h-screen overflow-x-hidden'>
    <Navbar/>
    <main>
      <Hero/>
      <About/>
      <Contact/>
      <Experince/>
      <Projects/>
      <Testimonials/>
    </main>

   </div>
   </>
  )
}
export default App;
