import React from 'react';
import logo from "../assets/images/NAV-LOGO.png"

function Footer() {
  return (
    <div className="footer-content relative bg-white h-fit mt-18 overflow-hidden w-full lg:w-[70%]  flex flex-col lg:flex-row gap-[80px] justify-between p-8 font-[Familjen_Grotesk]">
      
      {/* Background shape */}
      <div className="shape absolute bg-[#FAFBFC] h-[10vh] right-[-10%] -top-8 w-[45%] skew-x-56"></div>

      {/* Left Half */}
      <div className="f-half bg-white w-full lg:w-1/2 pt-6">
        {/* Logo */}
        <div className="footer-logo overflow-hidden w-[150px] mb-4">
          <a href="#">
            <img className="h-[130px] w-[250px]" src={logo} alt="LOGO" />
          </a>
        </div>

        {/* Address and Contact Info */}
        <div className="bg-white flex flex-col sm:flex-row justify-between text-zinc-700 text-sm mb-3">
          <div className="mb-2 sm:mb-0">
            <p>Hinglaj Bunglow, 08</p>
            <p>Ambad Kamatwade Rd,</p>
            <p>Nashik, Maharashtra 422008</p>
          </div>
          <div>
            <p><i className="fa-solid fa-phone mr-2"></i>+000000000</p>
            <p><i className="fa-solid fa-envelope mr-2"></i>abc@gmail.com</p>
          </div>
        </div>

        <hr className="my-2" />

        {/* Policies */}
        <div className="policy-footer flex flex-wrap items-center gap-4 text-sm my-3">
          <a href="../policy/privacy.html">Privacy policy</a>
          <a href="../policy/use.html">Terms of use</a>
          <a href="../policy/cookie.html">Cookie notice</a>
          <a href="../policy/sale.html">Terms of sale</a>
        </div>

        <hr className="my-2" />

        {/* Copyright */}
        <div className="copy-right flex items-start justify-start text-sm mt-2">
         <a href="https://github.com/abhimanjaware"> © 2024 aakar.digital. All rights reserved.</a>
        </div>
      </div>

      {/* Right Half */}
      <div
        className="s-half pt-6 w-full lg:w-[70%] bg-white"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        {/* Social Icons */}
        <div className="social text-black flex flex-wrap items-center gap-4 text-xl mb-3">
          <a href="#twitter"><ion-icon name="logo-twitter"></ion-icon></a>
          <a href="#facebook"><ion-icon name="logo-facebook"></ion-icon></a>
          <a href="https://www.instagram.com/sparrowteck/"><ion-icon name="logo-instagram"></ion-icon></a>
          <a href="#linkedin"><ion-icon name="logo-linkedin"></ion-icon></a>
        </div>

        {/* Description */}
        <div className="para text-sm text-zinc-700 mb-4 pr-4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas doloremque ab natus magni voluptatum vel, obcaecati numquam animi deleniti culpa impedit, velit a nostrum voluptatibus optio. Neque velit reiciendis nisi.</p>
        </div>

        {/* Button */}
        <div>
          <button className="flex items-center mt-4 rounded-md text-white gap-3 bg-black px-4 py-3 font-medium transition-all ease-in duration-300 hover:bg-red-800 hover:scale-95">
            Explore Product <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
