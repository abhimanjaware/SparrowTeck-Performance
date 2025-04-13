// components/Loader.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "@fontsource/poppins/600.css";

const Loader = ({ onFinish }) => {
  const loaderRef = useRef();
  const kiteRef = useRef();
  const counterRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.to(loaderRef.current, {
      background: "radial-gradient(circle at center, #1a1a1a 0%, #000 90%)",
      duration: 1,
    });

    tl.fromTo(
      kiteRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.5 }
    );

    gsap.to(kiteRef.current, {
      scale: 1.02,
      duration: 2.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    let current = 0;
    const interval = setInterval(() => {
      const step = Math.floor(Math.random() * 6) + 4;
      current += step;
      if (current >= 100) {
        current = 100;
        counterRef.current.textContent = "100%";
        clearInterval(interval);

        gsap.to(counterRef.current, {
          opacity: 0,
          duration: 0.6,
          delay: 0.6,
        });

        gsap.killTweensOf(kiteRef.current);
        gsap.to(kiteRef.current, {
          scale: 80,
          backgroundColor: "#ffffff",
          duration: 2,
          ease: "power4.inOut",
          delay: 1.2,
        });

        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 1,
          delay: 2.5,
          pointerEvents: "none",
          onComplete: () => {
            if (onFinish) onFinish();
          },
        });

        return;
      }
      counterRef.current.textContent = `${current}%`;
    }, 90);
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      <div
        ref={kiteRef}
        className="relative w-32 sm:w-36 md:w-40 lg:w-44 aspect-square bg-[#1f1f1f] text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-semibold flex items-center justify-center tracking-wider transition-colors"
        style={{
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
      >
        <div ref={counterRef}>0%</div>
      </div>
    </div>
  );
};

export default Loader;
