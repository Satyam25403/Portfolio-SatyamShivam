import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles.js";
import {navLinks} from '../constants/index.js';     //we can omit index.js also

import { logo, menu, close } from "../assests/assets.js";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black/90 backdrop-blur-md `}
    >
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/0 via-white to-white/0 pointer-events-none" />

      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={()=>{setActive("");window.scrollTo(0,0)}}>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white">
            <img src={logo} alt="logo" className="w-full h-full object-cover" />
          </div>
          <p className="text-white text-[16px] font-semibold cursor-pointer flex">
            Satyam &nbsp; <span className="sm:block hidden text-[#915eFF]">| Shivam</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer transition duration-200 transform hover:scale-110 hover:-translate-y-1`}
              onClick={() => setActive(link.title)}
            >
              <a href ={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center '>
          <img src={toggle ? close : menu} alt="menu" className={`w-[28px] h-[28px] object-contain cursor-pointer transition-transform duration-300 ${toggle ? 'rotate-90' : ''}`} onClick={()=>setToggle(!toggle)}/>

          <div className={`${!toggle ? 'hidden' : 'flex'} flex-col items-start gap-4 px-6 py-8 bg-[#1a1a1a]/90 backdrop-blur-md absolute top-20 right-4 left-4 rounded-xl z-50 shadow-lg`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4 w-full">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } group w-full font-poppins font-medium cursor-pointer text-[16px] border-b border-[#915eFF] pb-2 mb-2 `}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}` } className="block w-full"
                    >{link.title}</a>
                </li>
              ))} 
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
