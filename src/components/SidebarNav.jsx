'use client'
// components/Sidebar.js
import { Link, animateScroll as scroll } from 'react-scroll';
import React from 'react';
import {mainDB} from '@/config/manuDB'
import Image from 'next/image';

const SidebarNav = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  }


  const navData = [
    { imageUrl: "/src/config/house.png" }
    // Add more navigation items as needed
  ];

  return (
    <div className="sm:hidden md:hidden lg:hidden">
      
    
      
      <div className="fixed top-1/2 transform -translate-y-1/2 right-1">
      <div className='flex flex-col gap-8 mr'>
       
       {
        mainDB.map((nav) => (
          <div key={nav.id}>
             <Link  classID='' to={nav.id} smooth={true} duration={500}>
             <Image className='' src={nav.icon} alt='' width={30} height={30} />
             </Link>
          </div>
        ))
       }
      </div>
      </div>
      
    </div>
  );
};

export default SidebarNav;
