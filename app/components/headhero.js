"use client";
import { useState, useEffect, useRef } from "react";
import { Orbitron } from "next/font/google";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import Link from "next/link";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

export default function HeaderHero() {
  const slides = [useRef(null), useRef(null), useRef(null)];
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const router = useRouter();
  const [orderModel3, setOrderModel3] = useState(false);
  const [orderModel3Second, setOrderModel3Second] = useState(false);
  const [modelY, setModelY] = useState(false);
  const [cybertruck, setCybertruck] = useState(false);
  const [viewInventory, setViewInventory] = useState(false);
  const [viewInventorySecond, setViewInventorySecond] = useState(false);

  useEffect(() => {
    gsap.killTweensOf(slides.map((slide) => slide.current));
    gsap.to(
      slides.map((slide) => slide.current),
      {
        autoAlpha: 0,
        zIndex: 0,
        duration: 1,
      }
    );
    gsap.to(slides[currentIndex].current, {
      autoAlpha: 1,
      zIndex: 30,
      duration: 2,
    });
  }, [currentIndex]);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  function startAutoPlay() {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
    }, 10000);
  }

  function stopAutoPlay() {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }

  function nextSlide() {
    setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
    startAutoPlay();
  }

  function previousSlide() {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
    startAutoPlay();
  }

  function nextSlideOnClick(e) {
    if (
      e.target.closest(
        "button,a,input,textarea,select,[role='button'],svg,path"
      )
    ) {
      return;
    }
    nextSlide();
  }

  return (
    <div className="relative">
      <ChevronLeft
        onClick={previousSlide}
        className="[@media(max-width:950px)]:hidden bg-white/60 opacity-[0.7] rounded w-8 h-8 absolute top-[200px] z-50 left-8 cursor-pointer hover:bg-gray-200"
      />

      <ChevronRight
        onClick={nextSlide}
        className="[@media(max-width:950px)]:hidden bg-white/60 opacity-[0.7] rounded w-8 h-8 absolute top-[200px] z-50 right-8 cursor-pointer hover:bg-gray-200"
      />

      <div
        ref={slides[0]}
        onClick={(e) => nextSlideOnClick(e)}
        className="absolute top-0 w-full [@media(min-width:500px)]:top-[40px]"
      >
        <div className="flex flex-col items-center text-center relative h-[380px] [@media(min-width:500px)]:bg-[url('/assets/Homepage-Promo-FTC-Desktop.avif')] [@media(max-width:500px)]:bg-[url('/assets/Homepage-Promo-FTC-Mobile.avif')] bg-cover bg-[center_50%]">
          <div className="mt-16 flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-white sm:text-5xl ">
                $7,500 Federal Tax Credit Ending
              </div>
              <a
                href="#"
                className="text-sm text-white underline decoration-white/70 hover:decoration-white/100"
              >
                Limited Inventory – Take Delivery Now
              </a>
            </div>
            <div className="flex mt-[3%]">
              <button
                className={`bg-blue-500 rounded-xs w-[150px] h-8 text-white mr-4 cursor-pointer hover:bg-blue-600 ${
                  orderModel3 && `border-2 border-white-500`
                }`}
                onClick={() => {
                  router.push("/model3");
                  setOrderModel3(true);
                }}
              >
                Order Model 3
              </button>
              <button
                className={`bg-blue-500 rounded-xs w-[150px] h-8 text-white cursor-pointer hover:bg-blue-600  ${
                  modelY && `border-2 border-white-500`
                }`}
                onClick={() => {
                  router.push("/modelY");
                  setModelY(true);
                }}
              >
                Order Model Y
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={slides[1]}
        onClick={(e) => nextSlideOnClick(e)}
        className="absolute top-0 w-full [@media(min-width:500px)]:top-[40px]"
      >
        <div className="flex flex-col items-center text-center relative h-[380px] [@media(min-width:500px)]:bg-[url('/assets/Homepage-Promo-Cybertruck-Desktop.avif')] [@media(max-width:500px)]:bg-[url('/assets/Homepage-Promo-Cybertruck-Mobile.avif')] bg-cover bg-center">
          <div className="mt-16 flex flex-col items-center">
            <div className={`text-4xl font-bold text-white sm:text-5xl `}>
              CYBERTRUCK
              <p className="flex [@media(min-width:500px)]:hidden">
                This is the disappearing text
              </p>
            </div>
            <a
              href="#"
              className="text-sm text-white underline decoration-white/70 hover:decoration-white/100"
            >
              Lease From $699/mo for a Limited Time
            </a>
            <div className="flex mt-[3%]">
              <button
                className={`bg-blue-500 rounded-xs w-[150px] h-8 text-white mr-4 cursor-pointer hover:bg-blue-600 ${
                  cybertruck && `border-2 border-white-500`
                }`}
                onClick={() => {
                  router.push("/cybertruck");
                  setCybertruck(true);
                }}
              >
                Order Now
              </button>
              <Link
                href={"/viewinventory?model=Cybertruck&payment=Lease"}
                onClick={() => setViewInventory(true)}
                className={`flex items-center justify-center bg-white rounded-xs w-[150px] h-8 text-gray-800 cursor-pointer hover:bg-gray-100 ${
                  viewInventory ? "border-2 border-black" : ""
                }`}
              >
                View Inventory
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={slides[2]}
        onClick={(e) => nextSlideOnClick(e)}
        className="absolute top-0 w-full [@media(min-width:500px)]:top-[40px]"
      >
        <div className="flex flex-col items-center text-center relative h-[380px] [@media(min-width:500px)]:bg-[url('/assets/Homepage-Promo-Model-3-Desktop-US-July.avif')] [@media(max-width:500px)]:bg-[url('/assets/Homepage-Promo-Model-3-Mobile-US-July.avif')] bg-cover bg-center">
          <div className="mt-16 flex flex-col items-center">
            <div className="text-4xl font-bold text-white sm:text-5xl ">
              Model 3
            </div>
            <a
              href="#"
              className="text-sm text-white underline decoration-white/70 hover:decoration-white/100"
            >
              0% APR With FSD (Supervised) Ends Sept 1
            </a>
            <div className="flex mt-[3%]">
              <button
                className={`bg-blue-500 rounded-xs w-[150px] h-8 text-white mr-4 cursor-pointer hover:bg-blue-600 ${
                  orderModel3Second && `border-2 border-white-500`
                }`}
                onClick={() => {
                  router.push("/model3");
                  setOrderModel3Second(true);
                }}
              >
                Order Now
              </button>
              <Link
                href={"/viewinventory?model=Model 3&payment=Lease"}
                onClick={() => setViewInventorySecond(true)}
                className={`flex items-center justify-center bg-white rounded-xs w-[150px] h-8 text-gray-800 cursor-pointer hover:bg-gray-100 ${
                  viewInventorySecond ? "border-2 border-black" : ""
                }`}
              >
                View Inventory
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full space-x-[4px] absolute [@media(min-width:500px)]:top-[400px] [@media(max-width:500px)]:top-[360px] z-30">
        <div
          className={`w-[10px] h-[10px] ${
            currentIndex === 0 ? `bg-white` : `bg-gray-400`
          } rounded-full`}
        ></div>
        <div
          className={`w-[10px] h-[10px] ${
            currentIndex === 1 ? `bg-white` : `bg-gray-400`
          } rounded-full`}
        ></div>
        <div
          className={`w-[10px] h-[10px] ${
            currentIndex === 2 ? `bg-white` : `bg-gray-400`
          } rounded-full`}
        ></div>
      </div>
    </div>
  );
}
