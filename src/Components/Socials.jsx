import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function Socials() {
  const socialsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ScrollTrigger animations
      gsap.from('.Insta-fllo', {
        scrollTrigger: {
          trigger: socialsRef.current,
          start: 'top 80%',
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      });

      gsap.from('.insta-link', {
        scrollTrigger: {
          trigger: socialsRef.current,
          start: 'top 78%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      });

      gsap.from('.insta-img a', {
        scrollTrigger: {
          trigger: socialsRef.current,
          start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
        delay: 0.4,
      });

      // Hover animation for Instagram images
      // Minimal Hover animation for Instagram images
const imageLinks = gsap.utils.toArray('.insta-img a');
imageLinks.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    gsap.to(el, {
      scale: 1.02,
      y: -4,
      boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
      duration: 0.3,
      ease: 'power2.out',
    });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to(el, {
      scale: 1,
      y: 0,
      boxShadow: '0 0 0 rgba(0,0,0,0)',
      duration: 0.25,
      ease: 'power2.inOut',
    });
  });
});

    }, socialsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={socialsRef} className='overflow-hidden mt-12'>
      <section className='social-interface w-full min-h-[10vh] mt-12 pl-[5vw] relative pb-6 bg-red-800'>

        {/* Skewed Shape */}
        <div className="shape absolute bg-[#FAFBFC] h-[9vh] right-[-10%] w-[70%] skew-x-60 z-0"></div>

        {/* Text & Link */}
        <div className="follow relative z-10">
          <div className="overflow-hidden">
            <p className='Insta-fllo text-[7vw] sm:text-[5vw] md:text-[3vw] font-[Familjen_Grotesk] pt-9 leading-none text-black font-bold'>
              Follow us
            </p>
          </div>
          <div className="overflow-hidden">
            <div className='insta-link flex items-center gap-[5px] leading-none font-[Bebas_Neue] mt-2'>
              <ion-icon name="logo-instagram" size="large"></ion-icon>
              <span className='text-white text-[4vw] sm:text-[2vw] md:text-[1vw]'>
                <a href="https://www.instagram.com/sparrowteck/" target='_blank' rel="noreferrer">
                  Sparrowteck Performance
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Instagram Images */}
        <div className="overflow-hidden">
          <div className="insta-img flex flex-wrap gap-[10px] w-full h-fit mt-8 relative z-10">
            {[
              { href: "https://www.instagram.com/p/CmouOJloVJH/", src: "src/assets/images/f-insta-1.png" },
              { href: "https://www.instagram.com/p/Cdr4ZiprbV6/", src: "src/assets/images/f-insta-2.png" },
              { href: "https://www.instagram.com/p/CqHw5EuNgks/", src: "src/assets/images/f-insta-3.png" },
              { href: "https://www.instagram.com/p/CetHjrfLCIk/?img_index=1", src: "src/assets/images/f-insta-4.png" },
              { href: "https://www.instagram.com/p/CkNFSX5twWa", src: "src/assets/images/f-insta-5.png" }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target='_blank'
                rel="noreferrer"
                className='w-[47%] sm:w-[30%] md:w-[18%] h-[40vw] sm:h-[22vw] md:h-[18vw]'
              >
                <img
                  className='h-full w-full object-cover object-center opacity-85 transition-all ease-in duration-150 hover:opacity-100 hover:rounded-lg hover:border-[1px] rounded-tr-2xl hover:border-zinc-300/50'
                  src={item.src}
                  alt={`Instagram ${idx + 1}`}
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Socials;
