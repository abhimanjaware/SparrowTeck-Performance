import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all'


gsap.registerPlugin(ScrollTrigger)

function Design() {
  const designRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.design-heading', {
        scrollTrigger: {
          trigger: designRef.current,
          start: 'top 75%',
        },
        y: 180,
        opacity: 0,
        duration: 1,
        // ease: 'power4.out',
      })
  
      gsap.from('.design-text', {
        scrollTrigger: {
          trigger: designRef.current,
          start: 'top 70%',
        },
        y: 120,
        opacity: 0,
        duration: 1,
        // ease: 'power3.out',
        delay: 0.1,
      })
  
      gsap.from('.design-btn', {
        scrollTrigger: {
          trigger: designRef.current,
          start: 'top 65%',
        },
        y: 140,
        opacity: 0,
        duration: 1,
        // ease: 'power2.out',
        delay: 0.1,
      })
    }, designRef)
  
    return () => ctx.revert()
  }, [])
  

  return (
    <div ref={designRef} className="relative h-[100vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="src/assets/images/designinfo1.webp"
        alt="design"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Optional skew shape at bottom */}
      <div className="absolute bg-[#fff] h-[8vh] left-[-60%] bottom-0 w-full skew-x-56 z-10"></div>

      {/* Overlay Content */}
      <div className="relative z-20 h-full w-full flex  flex-col justify-center items-center px-4 lg:items-start lg:px-24 text-white text-center lg:text-left">
        <div className="max-w-[90%] lg:max-w-[40%]">
         <div className="overflow-hidden">
         <h1 className="design-heading text-[8vw] sm:text-[6vw] text- md:text-[4.5vw] lg:text-[3vw] leading-none font-[Familjen_Grotesk] text-start font-bold">
            DESIGN YOUR OWN <br />
            <span className="text-red-800 text-start">WHEELS.</span>
          </h1>
         </div>

         <div className="overflow-hidden">
         <p className="design-text mt-6 text-[4vw] text-start sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] leading-normal font-[Familjen_Grotesk] text-zinc-200 tracking-wide capitalize">
            Use our configurator to customize a set of wheels <br />
            <span className="font-bold text-start text-white">
              that match your ride style perfectly.
            </span>
          </p>
         </div>
<div className="overflow-hidden">
  
<button className="design-btn mt-6 flex items-center gap-[15px] bg-black px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-red-950 hover:scale-95">
            Make it yours <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
</div>
        </div>
      </div>
    </div>
  )
}

export default Design
