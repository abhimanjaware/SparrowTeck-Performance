import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, {useEffect } from "react";
gsap.registerPlugin(ScrollTrigger); // register the hook to avoid React version discrepancies 
import interfacewheel from "../assets/images/interface1wheelimage.jpg"
import convex from "../assets/images/convex.png"
import porsche from "../assets/images/porsche.png"



function Wheels() {

   useEffect(()=>{

    let tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.Wheels-page',
        start:"15% 90%",
        end:"100% 90%",
        // markers:true,
      }

      })
tl.fromTo('#wheelsheading, #wheelpara1, #wheelpara2',{
  x:-100,
  opacity:0,

},{
  x:0,
  opacity:1,
  duration:1,
  stagger:.25
},'a')

tl.fromTo('#wheel-wheelimg, #convex',{
  x:100,
  opacity:0,

},{
  x:0,
  opacity:1,
  duration:1,
  stagger:.25
},'a')
      
let t2 = gsap.timeline({
  scrollTrigger:{
    trigger:'.Wheels-page',
    start:"70% 90%",
    end:"100% 90%",
    // markers:true
  }


})
t2.fromTo('#prosche',{
  x:100,
  opacity:0,

},{
  x:0,
  opacity:1,
  duration:1,
})

    },[])
    


  
  return (
    
    <div className="Wheels-page  bg-[#FAFBFC] min-h-screen w-full my-12">
      <div className="wheels-interface w-full min-h-screen relative flex flex-col items-end mt-20">
        
        {/* Main content */}
        <div className="wheel-info flex flex-col lg:flex-row items-center w-full lg:w-[80%] px-4 lg:px-0">
          
          {/* Text section */}
          <div className="wheels-details  text-black lg:mr-[12rem] w-full lg:w-auto">
          <div className=" overflow-hidden">
          <h2  className=" text-[10vw] sm:text-[6vw] lg:text-[4vw] font-bold leading-none mb-4" id="wheelsheading" >
              CAR <br /> WHEELS
            </h2>
          </div>

           <div className="overflow-hidden">
           <p className="font-[Familjen_Grotesk] text-[4vw] sm:text-[2vw] lg:text-[1vw] text-zinc-700 leading-snug mt-6" id="wheelpara1">
              Car wheels are made of premium carbon fiber and are designed to
              withstand the most extreme conditions. They are product of our
              unique RIMAK technology that enables to use unidirectional carbon
              fibers in thin solid spokes. Compliant with SAE J3204 the wheels
              are available for wide spectrum of performance cars.
            </p>
           </div>

          <div className="overflow-hidden">
          <p className="font-[Familjen_Grotesk] text-[4vw] sm:text-[2vw] lg:text-[1vw] leading-snug text-zinc-700 mt-6" id="wheelpara2">
              RIMAK technology that enables to use unidirectional carbon fibers
              in thin solid spokes. Compliant with SAE J3204 the wheels are
              available for wide spectrum of performance cars.
            </p>
          </div>

           <div className="overflow-hidden">
           <button className="flex items-center mt-8 rounded-md gap-[15px] bg-black px-4 py-3 text-white font-medium transition-all ease-in duration-300 hover:bg-red-950 hover:scale-95" id="wheelbtn">
              Learn More 
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
           </div>
          </div>

          {/* Image section */}
          <div className="wheels-pic mt-8 lg:mt-0 lg:w-[250vw] overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-tl-3xl"
              src={interfacewheel}
              alt="wheel" id="wheel-wheelimg"
            />
          </div>
        </div>

        {/* PNG overlays */}
        <div className="WHEEL-PNG relative w-full flex flex-col  items-end ">
          <img
            className="hidden  w-[80%] sm:w-[60%]  lg:block lg:w-[45%] mt-[2rem] lg:mx-auto mx-auto sm:mt-[-3rem] lg:mt-[-3rem] "
            src={convex}
            alt="wheelpng" id="convex"
          />
          <img
            className="porschediv   hidden   w-[60%] sm:w-[40%]  lg:block lg:w-[50%] lg:mx-auto mx-auto mt-[-4rem] sm:mt-[-5rem]  "
            src={porsche}
            alt="wheelpng" id="prosche"
          />
        </div>
      </div>
    </div>
  );
}

export default Wheels;
