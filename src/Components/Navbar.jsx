import React, { useState } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <section className="head bg-white h-[120px] fixed top-0 left-0 z-[50] w-full shadow-md">
        <div className="navbar flex items-center justify-between px-6 sm:px-12 py-4">
          {/* Logo */}
          <div id="logo" className='w-[140px] sm:w-[160px] overflow-hidden mt-[-10px]'>
            <a href="#">
              <img className='object-cover w-full ' src="src/assets/images/NAV-LOGO.png" alt="Logo" />
            </a>
          </div>

          {/* Hamburger Button */}
          <div className="sm:hidden text-3xl text-zinc-700 mt-[-30px] cursor-pointer z-[60]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
          </div>

          {/* Desktop Nav */}
          <ul className="navlist hidden sm:flex font-[Familjen_Grotesk] text-zinc-700 items-end gap-10 ">
            <div className="a flex gap-[20px] text-[13px] leading-none ">
              <li><a href="./">Home</a></li>
              <li><a href="../">Dealers</a></li>
              <li><a href="../">About Us</a></li>
              <li><a href="../">Contact</a></li>
              <li><a href="../">Review</a></li>
            </div>
            <div className="another flex text-zinc-950 gap-[25px] leading-none">
              <li><a href="../">Technology</a></li>
              <li><a href="../">Customize</a></li>
              <li className='flex items-center gap-[5px]'>
                <ion-icon size='small' name="person-outline"></ion-icon>
                <a href="../">Sign In</a>
              </li>
              <li className='flex items-center gap-[5px]'>
                <ion-icon size='small' name="cart-outline"></ion-icon>
                <a href="../">Cart</a>
              </li>
            </div>
          </ul>
        </div>

        {/* Mobile Slide-In Menu */}
        <div className={`
          sm:hidden fixed -top-2 right-0 h-screen w-[80%] bg-white shadow-2xl z-[55] p-8 transform transition-transform duration-500 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="flex flex-col gap-8 mt-[100px] font-[Familjen_Grotesk] text-zinc-800 text-lg">
            {/* Nav section A */}
            <div className="flex flex-col gap-4 border-b pb-4 border-zinc-300">
              <a className="hover:text-red-800 transition-all" href="./">Home</a>
              <a className="hover:text-red-800 transition-all" href="../">Dealers</a>
              <a className="hover:text-red-800 transition-all" href="../">About Us</a>
              <a className="hover:text-red-800 transition-all" href="../">Contact</a>
              <a className="hover:text-red-800 transition-all" href="../">Review</a>
            </div>

            {/* Nav section B */}
            <div className="flex flex-col gap-4 pt-2">
              <a className="hover:text-red-800 transition-all" href="../">Technology</a>
              <a className="hover:text-red-800 transition-all" href="../">Customize</a>
              <a className="flex items-center gap-2 hover:text-red-800 transition-all" href="../">
                <ion-icon size='small' name="person-outline"></ion-icon> Sign In
              </a>
              <a className="flex items-center gap-2 hover:text-red-800 transition-all" href="../">
                <ion-icon size='small' name="cart-outline"></ion-icon> Cart
              </a>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Navbar;
