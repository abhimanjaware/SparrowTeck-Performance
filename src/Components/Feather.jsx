import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Feather() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feather-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".feather-para", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      });

      gsap.from(".feather-button", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".wheel-img", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        scale: 0.6,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2,
      });

      gsap.from(".feather-float", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
        y: 30,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.3,
        delay: 0.4,
      });

      gsap.to(".feather-float", {
        y: 10,
        duration: 2.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.4,
          from: "random",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full overflow-hidden min-h-screen bg-white"
    >
      <section className="w-full flex items-center justify-center">
        <div className="relative w-full flex flex-col lg:flex-row items-center mt-10 lg:mt-40 px-4 lg:px-0">

          {/* Left Section */}
          <div className="relative h-[60vh] sm:h-[85vh] w-full lg:w-[60%] flex justify-center items-center">
            <img
              className="h-[80%] w-[90%] object-cover rounded-md"
              src="src/assets/images/redb.jpeg"
              alt="bg"
            />
            <span className="hidden sm:block absolute left-4 sm:left-6 md:left-8 lg:left-[-2rem] top-1/2 -translate-y-1/2 tracking-widest font-[Bebas_Neue] text-[6vw] sm:text-[5vw] md:text-[3.5vw] lg:text-[40px] font-bold text-zinc-300 -rotate-90 z-20 whitespace-nowrap"
              style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)" }}
            >
              SPARROWTECK PERFORMANCE
            </span>

            <img
              className="absolute wheel-img w-[60%] sm:w-[70%] lg:w-[50%] ml-0 sm:ml-8 lg:ml-[28rem] z-10"
              src="src/assets/images/lightasfeatherimg.webp"
              alt="tyre"
            />

            {/* 🌟 Aligned Feathers for Mobile */}
            {/* <img
              className="feather-float hidden absolute w-[13%] top-[25%] left-[18%] rotate-[30deg] z-20"
              src="https://www.rotobox-wheels.com/_nuxt/img/feather6.efd5cbe.png"
              alt="f1"
            />
            <img
              className="feather-float hidden absolute w-[12%] bottom-[18%] left-[28%] rotate-[60deg] z-20"
              src="https://www.rotobox-wheels.com/_nuxt/img/feather2.09d6ea2.png"
              alt="f2"
            />
            <img
              className="feather-float hidden absolute w-[12%] top-[32%] right-[26%] rotate-[-50deg] z-20"
              src="https://www.rotobox-wheels.com/_nuxt/img/feather3.4f20480.png"
              alt="f3"
            />
            <img
              className="feather-float hidden absolute w-[10%] bottom-[20%] right-[22%] rotate-[120deg] z-20"
              src="https://www.rotobox-wheels.com/_nuxt/img/feather5.1357efe.png"
              alt="f4"
            /> */}
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-[25%] mt-10 lg:mt-0 lg:ml-[2rem]">
            <h3 className="feather-heading text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[3vw] font-[Familjen_Grotesk] leading-none font-black text-black">
              Light as a<br />
              <span className="text-red-800">feather.</span>
            </h3>
            <p className="feather-para mt-8 capitalize text-zinc-900 leading-snug text-sm sm:text-base">
              Choosing carbon wheels is the{" "}
              <span className="font-bold">
                single biggest thing you can do to increase the performance of
                your vehicle.
              </span>{" "}
              Ultimately, the lower weight of carbon wheels plays an important
              role in how your vehicle behaves and feels on the road.
            </p>
            <p className="feather-para capitalize text-zinc-900 leading-snug text-sm sm:text-base mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              officiis! Beatae quas sequi inventore voluptates, facere et qui
              illo!
            </p>
            <button className="feather-button flex items-center mt-8 rounded-md text-white gap-[15px] bg-black px-4 py-3 font-medium transition-all ease-in duration-300 hover:bg-red-950 hover:scale-95">
              Make it yours <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>

          {/* Feathers for desktop */}

          <img className="feather-float hidden lg:block  absolute w-[5%] left-[30%] -top-4 rotate-[55deg]" src="https://www.rotobox-wheels.com/_nuxt/img/feather_1.1633d6f.png" alt="feather1" />
          <img className="feather-float hidden lg:block  absolute w-[3.5%] left-[35%] -bottom-2 -rotate-[70deg]" src="https://www.rotobox-wheels.com/_nuxt/img/feather5.1357efe.png" alt="feather5" />
          <img className="feather-float hidden lg:block  absolute w-[3%] right-[12%] bottom-0 rotate-[245deg]" src="https://www.rotobox-wheels.com/_nuxt/img/feather3.4f20480.png" alt="feather3" />
          <img className="feather-float hidden lg:block  absolute w-[1.5%] right-[12%] bottom-[42%] rotate-[240deg]" src="https://www.rotobox-wheels.com/_nuxt/img/feather4.195533d.png" alt="feather4" />
          <img className="feather-float hidden lg:block  absolute w-[5.5%] left-[21%] -bottom-3 -rotate-[55deg]" src="https://www.rotobox-wheels.com/_nuxt/img/feather6.efd5cbe.png" alt="feather6" />
          <img className="feather-float hidden lg:block  absolute w-[5%] top-4 right-[20%] rotate-[110deg]" src="https://www.rotobox-wheels.com/_nuxt/img/feather2.09d6ea2.png" alt="feather2" />
   
         

              </div>
      </section>
    </div>
  );
}

export default Feather;
