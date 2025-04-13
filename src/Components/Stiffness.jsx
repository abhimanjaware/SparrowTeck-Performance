import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Stiffness() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const imageRef = useRef(null);
  const tyreRef = useRef(null);
  const kickRef = useRef(null);
  const verticalTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        defaults: { ease: 'power2.out', duration: 0.8 },
      });

      tl.from(titleRef.current, { y: 50, opacity: 0 })
        .from(
          [para1Ref.current, para2Ref.current],
          { y: 30, opacity: 0, stagger: 0.2 },
          '-=0.5'
        )
        .from(imageRef.current, { scale: 0.97, opacity: 0 }, '-=0.6')
        .from([tyreRef.current, kickRef.current], { y: 40, opacity: 0, stagger: 0.15 }, '-=0.6')
        .from(verticalTextRef.current, { x: 50, opacity: 0 }, '-=0.4');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-[#FAFBFC] py-12 overflow-x-hidden">
      <section className="w-full min-h-[90vh] flex items-center justify-center px-4 md:px-12">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 relative">

          {/* 🔠 Info Text on the LEFT */}
          <div className="w-full lg:w-[40%] text-left">
            <h3
              ref={titleRef}
              className="text-[10vw] sm:text-[6vw] lg:text-[3.2vw] font-[Familjen_Grotesk] font-black leading-tight text-black"
            >
              High power.
            </h3>
            <p
              ref={para1Ref}
              className="mt-4 text-[4vw] sm:text-[2.2vw] lg:text-[1.1vw] text-zinc-800 leading-snug"
            >
              With big power of modern bikes comes a lot of force on wheels. Our revolutionary
              <span className="text-black font-bold"> three-component composite, dry forging and racing design</span>
              provide high torsional, lateral, radial stiffness and great impact resistance.
            </p>
            <p
              ref={para2Ref}
              className="mt-4 text-[4vw] sm:text-[2.2vw] lg:text-[1.1vw] text-zinc-800 leading-snug"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, officiis! Aperiam soluta provident est
              at atque veritatis nulla veniam illo totam, ipsam obcaecati numquam!
            </p>
            <button className="flex items-center mt-6 sm:mt-8 rounded-md text-white gap-3 bg-black px-5 py-3 font-medium transition-all ease-in-out duration-300 hover:bg-red-950 hover:scale-95">
              Explore product
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>

          {/* 🟥 Red BG + Images on the RIGHT */}
          <div className="w-full lg:w-[60%] flex justify-center relative">
            <img
              ref={imageRef}
              className="w-[90%] hidden lg:block lg:w-[80%] object-cover rounded-md"
              src="src/assets/images/redb.jpeg"
              alt="background"
            />

            {/* Tyre & Kick image wrapper */}
            <div className="absolute bottom-0 left-4 md:left-12 flex flex-col items-center w-[40%] sm:w-[45%]">
              <img
                ref={tyreRef}
                className="w-full hidden lg:block"
                src="https://api.rotobox-wheels.com/storage/cache/co/contentlanding-imagerypower-wheel-c749e64da11c4b289a9ad37f0ef605e2.webp"
                alt="tyre"
              />
              <img
                ref={kickRef}
                className="w-[60%] mt-[-12%] hidden lg:block"
                src="https://www.rotobox-wheels.com/_nuxt/img/kick.a37e2ea.png"
                alt="kick"
              />
            </div>
          </div>

          {/* 🔠 Vertical "high stiffness." Text */}
          <span
            ref={verticalTextRef}
            className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 text-zinc-700 tracking-wider font-[Bebas_Neue] text-[6vw] font-bold -rotate-90 capitalize"
          >
            high stiffness.
          </span>
        </div>
      </section>
    </div>
  );
}

export default Stiffness;
