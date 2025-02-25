"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import VideoPopup from "./videoPopup";
import Link from "next/link";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Children&apos;s Summer Camp</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Sigurno, zabavno i edukativno ljeto za vaše dijete! CSC nudi
          raznovrsne aktivnosti koje podstiču kreativnost, timski rad i fizičku
          aktivnost, sve u sigurnom okruženju.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="ocjena"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            1000+
            <span className="regular-16 lg:regular-20 ml-1">
              Odličnih Recenzija
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Link href="/prijava">
            <Button
              type="button"
              title="Prijavite se"
              variant="btn_green"
              full
            />
          </Link>
          <button
            type="button"
            className="flexCenter gap-2 border border-[#30AF5B] bg-white px-8 py-3 text-gray-90 rounded-full hover:bg-gray-100 hover:scale-125 transition"
            onClick={() => setIsVideoOpen(true)}
          >
            <Image
              src="/play.svg"
              alt="video o children summer campu"
              width={20}
              height={20}
            />
            <span>Kako Mi Radimo?</span>
          </button>
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Lokacija</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Šiljkovača</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distanca</p>
              <p className="bold-20 text-white">7 km</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevacija</p>
              <p className="bold-20 text-white">150 m</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Popup */}
      {isVideoOpen && <VideoPopup onClose={() => setIsVideoOpen(false)} />}
    </section>
  );
};

export default Hero;
