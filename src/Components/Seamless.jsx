import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function Seamless() {
  const seamlessRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.seamless-heading', {
        scrollTrigger: {
          trigger: seamlessRef.current,
          start: 'top 75%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      });

      gsap.from('.seamless-text', {
        scrollTrigger: {
          trigger: seamlessRef.current,
          start: 'top 70%',
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.1,
      });

      gsap.from('.seamless-btn', {
        scrollTrigger: {
          trigger: seamlessRef.current,
          start: 'top 65%',
        },
        y: 70,
        opacity: 0,
        duration: 1,
        // ease: 'power2.out',
        delay: 0.1,
      });
    }, seamlessRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-[75vh] mt-[10rem] overflow-hidden bg-white" ref={seamlessRef}>
      <section className="Seamless-content relative w-full h-[80vh]">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          src="https://api.rotobox-wheels.com/storage/cache/co/contenthigh-pressure-core-2-2-7b9f8a281a789d12ce3bd7b7847f92bb.webp"
          alt="Seamless Background"
        />

        {/* Overlay Shape */}
        <div className="absolute bg-[#FAFBFC] h-[8vh] left-[-60%] w-full -skew-x-56 z-10"></div>

        {/* Content */}
        <div className="absolute top-1/2 left-[6%] -translate-y-1/2 text-white z-20 max-w-[90%] sm:max-w-[500px]">
          <div className="overflow-hidden">
            <h1 className="seamless-heading text-[7vw] sm:text-[5vw] md:text-[3vw] leading-none font-[Familjen_Grotesk] font-bold whitespace-normal">
              <span className="text-red-700">Seamless</span> Lay-up.
            </h1>
          </div>

          <div className="overflow-hidden">
            <p className="seamless-text mt-6 text-[3.5vw] sm:text-[2.2vw] leading-none md:text-[1.2vw] font-[Familjen_Grotesk] tracking-wide text-zinc-200">
              Use our configurator to customize a set of wheels.
              <span className="font-bold text-white">
                Attention to details is specially shown in a visible fabric lay-up.
                Minimal possible number of visible joints and distortions of fabric.
              </span>
              <br />
              
                {/* <span className='overflow-hidden'>Vel impedit asperiores voluptatem ipsa illo error tempore! Similique, id repudiandae.
                </span> */}
                
            </p>
          </div>

          <div className="overflow-hidden">
            <button className="seamless-btn flex items-center mt-6 sm:mt-8 rounded-md bg-black text-white gap-[15px] px-4 py-3 font-medium transition-all ease-in duration-300 hover:bg-red-950 hover:scale-95">
              Discover Technology
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Seamless;
