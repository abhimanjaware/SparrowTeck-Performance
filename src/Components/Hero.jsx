import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Hero() {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const motorcycleRef = useRef(null);
  const dividerRef = useRef(null);
  const carRef = useRef(null);
  const bgImageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background zoom
      gsap.fromTo(
        bgImageRef.current,
        { scale: 1.1 },
        { scale: 1, duration: 2.5, ease: 'power3.out' }
      );

      // Fade in main wrapper
      gsap.to(heroRef.current, {
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
      });

      // Animate heading
      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.6,
      });

      // Animate motorcycle card
      gsap.to(motorcycleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 1,
      });

      // Animate divider
      gsap.to(dividerRef.current, {
        opacity: 0.3,
        scaleY: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 1.3,
      });

      // Animate car card
      gsap.to(carRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 1.6,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      style={{ opacity: 0 }}
      className="hero-content h-screen w-full bg-black relative overflow-hidden"
    >
      {/* 🔲 Background image */}
      <img
        ref={bgImageRef}
        style={{ transform: 'scale(1.1)' }}
        className="h-full w-full object-cover object-center opacity-60 absolute inset-0 z-0"
        src="/src/assets/images/landing-hero-poster.f0a6aa9 (1).jpg"
        alt="Hero Background"
      />

      {/* ⚡ Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
        <div className="w-full max-w-6xl text-center mt-28">
          {/* 🌟 Heading */}
          <h1
            ref={headingRef}
            style={{ opacity: 0, transform: 'translateY(40px)' }}
            className="text-white font-[Familjen_Grotesk] font-bold capitalize text-[8vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] xl:text-[2.7vw] leading-tight mb-12"
          >
            Free your ride.
          </h1>

          {/* 🛞 Options */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-24 md:mr-22">
            {/* 🏍️ Motorcycle Option */}
            <div
              ref={motorcycleRef}
              style={{ opacity: 0, transform: 'translateY(40px)' }}
              className="group text-white text-center transition-all duration-300 hover:-translate-y-2"
            >
              <p className="text-zinc-300 text-sm sm:text-start mb-1 transition-all duration-400 group-hover:-translate-y-5">
                Carbon wheels
              </p>
              <h2 className="text-xl sm:text-4xl font-bold transition-all duration-400 group-hover:-translate-y-5">
                For Motorcycle.
              </h2>
              <button className="flex items-center transition-all duration-400 group-hover:-translate-y-5 justify-center mt-4 rounded-md gap-2 bg-black px-6 py-2 text-sm sm:text-base font-medium opacity-0 group-hover:opacity-100 hover:bg-red-950 hover:scale-95">
                Explore <ion-icon name="chevron-forward-outline"></ion-icon>
              </button>
            </div>

            {/* 🚧 Divider */}
            <div
              ref={dividerRef}
              style={{ opacity: 0, transform: 'scaleY(0)' }}
              className="hidden sm:block h-[120px] w-[1px] bg-white opacity-30 origin-bottom"
            ></div>

            {/* 🚗 Car Option */}
            <div
              ref={carRef}
              style={{ opacity: 0, transform: 'translateY(40px)' }}
              className="group text-white text-center transition-all duration-300 hover:-translate-y-2"
            >
              <p className="text-zinc-300 text-sm sm:text-start mb-1 transition-all duration-400 group-hover:-translate-y-5">
                Carbon wheels
              </p>
              <h2 className="text-xl sm:text-4xl font-bold transition-all duration-400 group-hover:-translate-y-5">
                For Cars.
              </h2>
              <button className="flex items-center transition-all duration-400 group-hover:-translate-y-5 justify-center mt-4 rounded-md gap-2 bg-black px-6 py-2 text-sm sm:text-base font-medium opacity-0 group-hover:opacity-100 hover:bg-red-950 hover:scale-95">
                Explore <ion-icon name="chevron-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
