"use client";
import { Orbitron } from "next/font/google";
import { useEffect, useRef } from "react";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

export default function FooterSlide() {
  const slides = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const dots = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const slideElements = slides.map((slide) => slide.current);
    const dotElemets = dots.map((map) => map.current);

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(slideElements).indexOf(entry.target);

            dotElemets.forEach((dot) => {
              dot.classList.remove("active");
            });
            dotElemets[index].classList.add("active");
          }
        }),
      { threshold: 0.7 }
    );

    slideElements.forEach((slide) => observer.observe(slide));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col items-center relative mt-8">
      <div className="flex space-x-6 items-center h-[430px] w-full scrollbar-hide [@media(max-width:500px)]:ml-[8px] [@media(min-width:500px)]:ml-4 [@media(min-width:700px)]:ml-8 overflow-x-scroll">
        <div
          ref={slides[0]}
          className="flex flex-col justify-end w-[70%] shrink-0 rounded-lg [@media(max-width:500px)]:bg-[url('/assets/Homepage-Card-Solar-Panels-Mobile.avif')] [@media(min-width:500px)]:bg-[url('/assets/Homepage-Card-Solar-Panels-Desktop.avif')] bg-cover bg-center] h-[400px]"
        >
          <div className="[@media(max-width:500px)]:m-[10px] [@media(min-width:500px)]:m-8">
            <p
              className={`${orbitron.className} text-3xl font-bold text-white`}
            >
              Solar Panels
            </p>
            <p className="text-white text-sm">
              Use Solar Energy to Power Your Home and Charge Your Tesla
            </p>
            <div className="flex text-sm">
              <button className="bg-blue-500 w-[35%] rounded-md h-8 text-white mr-4 hover:bg-blue-600 cursor-pointer">
                Order Now
              </button>
              <button className="bg-white w-[35%] rounded-md h-8 text-gray-800 dark:text-gray-800 hover:bg-gray-100 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div
          ref={slides[1]}
          className="flex flex-col justify-end w-[70%] shrink-0 rounded-lg [@media(max-width:500px)]:bg-[url('/assets/Homepage-Card-Powerwall-Mobile.avif')] [@media(min-width:500px)]:bg-[url('/assets/Homepage-Card-Powerwall-Desktop.avif')] bg-cover bg-center] h-[400px]"
        >
          <div className="[@media(max-width:500px)]:m-[10px] [@media(min-width:500px)]:m-8">
            <p
              className={`${orbitron.className} text-3xl font-bold text-white`}
            >
              Powerwall
            </p>
            <p className="text-white text-sm">
              Keep Your Lights On During Outages
            </p>
            <div className="flex text-sm">
              <button className="bg-blue-500 w-[35%] rounded-md h-8 text-white mr-4 hover:bg-blue-600 cursor-pointer">
                Order Now
              </button>
              <button className="bg-white w-[35%] rounded-md h-8 text-gray-800 dark:text-gray-800 hover:bg-gray-100 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div
          ref={slides[2]}
          className="flex flex-col justify-end w-[70%] shrink-0 rounded-lg [@media(max-width:500px)]:bg-[url('/assets/Homepage-Card-Solar-Roof-Mobile.avif')] [@media(min-width:500px)]:bg-[url('/assets/Homepage-Card-Solar-Roof-Desktop.avif')] bg-cover bg-center] h-[400px]"
        >
          <div className="[@media(max-width:500px)]:m-[10px] [@media(min-width:500px)]:m-8">
            <p
              className={`${orbitron.className} text-3xl font-bold text-white`}
            >
              Solar Roof
            </p>
            <p className="text-white text-sm">
              Generate Clean Energy With Your Roof
            </p>
            <div className="flex text-sm">
              <button className="bg-blue-500 w-[35%] rounded-md h-8 text-white mr-4 hover:bg-blue-600 cursor-pointer">
                Order Now
              </button>
              <button className="bg-white w-[35%] rounded-md h-8 text-gray-800 dark:text-gray-800 hover:bg-gray-100 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div
          ref={slides[3]}
          className="flex flex-col justify-end w-[70%] shrink-0 rounded-lg [@media(max-width:500px)]:bg-[url('/assets/Homepage-Card-Megapack-Mobile.avif')] [@media(min-width:500px)]:bg-[url('/assets/Homepage-Card-Megapack-Desktop.avif')] bg-cover bg-center] h-[400px]"
        >
          <div className="[@media(max-width:500px)]:m-[10px] [@media(min-width:500px)]:m-8">
            <p
              className={`${orbitron.className} text-3xl font-bold text-white`}
            >
              Megapack
            </p>
            <p className="text-white text-sm">
              Massive Batteries for Massive Energy Support
            </p>
            <div className="flex text-sm">
              <button className="bg-blue-500 w-[35%] rounded-md h-8 text-white mr-4 hover:bg-blue-600 cursor-pointer">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-2 mb-8">
        <div
          ref={dots[0]}
          className="rounded-full bg-gray-300 w-[10px] h-[10px]"
        ></div>
        <div
          ref={dots[1]}
          className="rounded-full bg-gray-300 w-[10px] h-[10px]"
        ></div>
        <div
          ref={dots[2]}
          className="rounded-full bg-gray-300 w-[10px] h-[10px]"
        ></div>
        <div
          ref={dots[3]}
          className="rounded-full bg-gray-300 w-[10px] h-[10px]"
        ></div>
      </div>
    </div>
  );
}
