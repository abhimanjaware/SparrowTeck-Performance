import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Wheels from './Components/Wheels'
import Design from './Components/Design'
import Feather from './Components/Feather'
import Seamless from './Components/Seamless'
import Stiffness from './Components/Stiffness'
import Victory from './Components/Victory'
import Socials from './Components/Socials'
import LocomotiveScroll from 'locomotive-scroll';
import Footer from './Components/Footer'
import Loader from './Components/Loader'


function App() {
  
  const locomotiveScroll = new LocomotiveScroll();
  const [loading, setLoading] = useState(true);

  return (
    <>
    {loading && <Loader onFinish={() => setLoading(false)} />}
    {!loading && (
      <div className='bg-[#FAFBFC] '>
     
     <Navbar/>
     <Hero/>
     <Wheels/>
     <Design/>
     <Feather/>
     <Seamless/>
     <Stiffness/>
     <Victory/>
     <Socials/>
     <Footer/>
   </div>
    )}
 
    
    </>
  )
}

export default App
