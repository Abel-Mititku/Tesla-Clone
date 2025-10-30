"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

export default function Hero() {
  const refs = [useRef(null), useRef(null)];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slides = refs.map((ref) => ref.current);
    gsap.killTweensOf(slides);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
    }, 5000);

    gsap.fromTo(
      slides[currentIndex],
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 1 }
    );

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, refs]);

  return (
    <div className="h-16 z-30 [@media(min-width:500px)]:fixed top-0 bg-gradient-to-l from-orange-200 via-orange-100 to-orange-200 [@media(max-width:500px)]:flex-col flex justify-center items-center w-full [@media(min-width:500px)]:justify-between">
      <div className="flex [@media(max-width:500px)]:flex-col items-center justify-between z-30 [@media(max-width:500px)]:bg-gradient-to-l from-orange-200 via-orange-100 to-orange-200 w-full h-16">
        {currentIndex === 0 && (
          <div
            ref={refs[0]}
            className="text-xs flex justify-center h-full items-center"
          >
            <div className="[@media(max-width:500px)]:w-[90%] w-full [@media(min-width:500px)]:ml-16 [@media(min-width:700px)]:ml-32">
              Lease Model Y Rear-Wheel Drive from $399/mo. Price increases to
              $479/mo after Sept. 21
            </div>
          </div>
        )}
        {currentIndex === 1 && (
          <div
            ref={refs[1]}
            className="text-xs flex justify-center h-full items-center"
          >
            <div className="[@media(max-width:500px)]:w-[90%] w-full [@media(min-width:500px)]:ml-16 [@media(min-width:700px)]:ml-32">
              Secure the $7,500 Federal Tax Credit Take delivery by September
              30.
            </div>
          </div>
        )}

        <div className="flex space-x-1 mr-8 justify-center mb-2">
          <div
            className={`${
              currentIndex === 0 ? `bg-gray-500 ` : `bg-gray-200`
            } rounded-full w-2 h-2`}
          ></div>
          <div
            className={`${
              currentIndex === 1 ? `bg-gray-500 ` : `bg-gray-200`
            } rounded-full w-2 h-2`}
          ></div>
        </div>
      </div>
    </div>
  );
}
