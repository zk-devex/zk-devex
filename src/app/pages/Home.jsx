import Image from "next/image";
import React from "react";
import profileIcon from "@/config/manuDB";

function HomePage() {
  return (
    <div className="">
      <section id="home" className="bg-whites dark:bg-gray-900">
        <h1 className="text-5xl text-center p-16"> I am Full Stack Developer</h1>

        <div
          href="#"
          class="flex flex-col gap-10 bg-white border border-gray-200 rounded-lg shadow md:flex-row   hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <Image
            class="object-cover w-full rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={profileIcon.businessMan}
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error excepturi qui necessitatibus optio, ad porro quibusdam sapiente ipsam quis at nobis, deleniti sed vitae accusantium, nesciunt aperiam rem? Id, officia.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem soluta, pariatur debitis incidunt aliquid maiores enim nostrum, ducimus earum repudiandae maxime perferendis quod quidem? Optio facilis totam reprehenderit officia saepe!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
