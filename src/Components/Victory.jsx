import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import victory from "../assets/images/victory.webp";

gsap.registerPlugin(ScrollTrigger);

function Victory() {
  const victoryRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.victory-heading', {
        scrollTrigger: {
          trigger: victoryRef.current,
          start: 'top 75%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      });

      gsap.from('.victory-para', {
        scrollTrigger: {
          trigger: victoryRef.current,
          start: 'top 70%',
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.1,
      });

      gsap.from('.victory-btn', {
        scrollTrigger: {
          trigger: victoryRef.current,
          start: 'top 65%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 0.2,
      });
    }, victoryRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={victoryRef} className="w-full bg-white mt-16 overflow-hidden">
      <section className="Victory-content w-full">
        <div className="Victory relative w-full flex justify-center items-center">
          {/* 🖼️ Background Image Section */}
          <div id="Victory-bg" className="h-[75vh] w-full relative z-0">
            <div className="shape absolute bg-[#FAFBFC] h-[8vh] left-[-60%] top-0 w-full -skew-x-56 z-10"></div>
            <img
              className="object-cover h-full w-full object-center z-0"
              src={victory}
              alt="Victory"
            />
          </div>

          {/* ℹ️ Text Info Section */}
          <div className="Victory-info absolute z-20 text-white left-4 sm:left-12 md:left-24 lg:left-32 top-[30%] w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%]">
            <div className="overflow-hidden">
              <h1 className="victory-heading text-[7vw] sm:text-[5vw] md:text-[3vw] leading-none font-[Familjen_Grotesk] font-bold whitespace-nowrap">
                Enjoy your <br />
                <span className="text-red-800">Victory lap.</span>
              </h1>
            </div>

           <div className="overflow-hidden">
           <div className="victory-para overflow-hidden text-[3.2vw] sm:text-[2vw] md:text-[1vw] leading-tight mt-4 sm:mt-6 font-[Familjen_Grotesk] capitalize tracking-wide text-zinc-200">
              <p>
                Nimble corners, extreme responsiveness in turns, higher acceleration. Start crafting your best ride from the
                ground up{' '}
                <span className="font-bold text-white">
                  that match your ride style perfectly.
                </span>
              </p>
            </div>
           </div>

            <div className="overflow-hidden">
              <button className="victory-btn mt-8 flex items-center gap-[15px] bg-black text-white px-4 py-3 rounded-md font-medium transition-all duration-300 hover:bg-red-950 hover:scale-95">
                Explore Product
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Victory;
