"use client";

import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { mainDB } from "@/config/manuDB";

function ProjectSkillsBlog() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="m-10 p-5 y  grid  text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      {mainDB.map((item, index) => (
        <div
          key={item.name}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300  hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Link to={item.id}  smooth={true} duration={500} >
            {item.name}
     
          </Link> */}

          <Link
            className={`mb-3 text-2xl font-semibold`}
            to={item.id}
            smooth={true}
            duration={500}
          >
            {item.name}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProjectSkillsBlog;
