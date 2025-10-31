"use client";
import { Flag, UserCircle } from "lucide-react";
import { Globe } from "lucide-react";
import { MessageCircleQuestion } from "lucide-react";
import { X } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function Navigation() {
  const [click, setClick] = useState(false);
  const [vehicle, setVehicle] = useState(false);
  const [energy, setEnergy] = useState(false);
  const [charging, setCharging] = useState(false);
  const [discover, setDiscover] = useState(false);
  const [shop, setShop] = useState(false);
  const menuOpen = vehicle || energy || charging || discover || shop;
  const slides = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleCancel = () => {
    if (vehicle) {
      setVehicle(false);
    }
    if (energy) {
      setEnergy(false);
    }
    if (charging) {
      setCharging(false);
    }
    if (discover) {
      setDiscover(false);
    }
  };

  useLayoutEffect(() => {
    const slideElements = slides.map((slide) => slide.current);

    slideElements.forEach((slide) => {
      gsap.set(slide, { autoAlpha: 0 });
    });
  }, []);

  useEffect(() => {
    const slideElements = slides.map((slide) => slide.current);

    slideElements.forEach((slide) => {
      gsap.fromTo(
        slide,
        {
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        }
      );
    });
    return () => {
      slideElements.forEach((slide) => {
        gsap.killTweensOf(slide);
      });
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen || click) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen, click]);

  return (
    <nav className="w-full z-30 absolute [@media(max-width:500px)]:sticky top-0 [@media(min-width:500px)]:fixed [@media(min-width:500px)]:top-[40px]">
      <div className="flex flex-col absolute top-0 z-10 w-full">
        <div className="flex justify-between h-[40px] items-center [@media(min-width:500px)]:bg-white">
          <a
            href="#"
            className="text-black [@media(min-width:500px)]:text-xl ml-8"
          >
            T E S L A
          </a>
          <div className=" hidden [@media(min-width:950px)]:block ">
            <div className="relative w-full flex justify-center">
              <ul className="flex items-center space-x-6 text-xs font-bold">
                <li
                  onMouseEnter={() => {
                    setVehicle(true);
                    setEnergy(false);
                    setCharging(false);
                    setDiscover(false);
                    setShop(false);
                  }}
                  className={`${
                    vehicle ? `bg-gray-100` : ``
                  } p-2 rounded cursor-pointer`}
                >
                  Vehicles
                </li>
                <li
                  onMouseEnter={() => {
                    setEnergy(true);
                    setVehicle(false);
                    setCharging(false);
                    setDiscover(false);
                    setShop(false);
                  }}
                  className={`${
                    energy ? `bg-gray-100` : ``
                  } p-2 rounded cursor-pointer`}
                >
                  Energy
                </li>
                <li
                  onMouseEnter={() => {
                    setCharging(true);
                    setEnergy(false);
                    setVehicle(false);

                    setDiscover(false);
                    setShop(false);
                  }}
                  className={`${
                    charging ? `bg-gray-100` : ``
                  } p-2 rounded cursor-pointer`}
                >
                  Charging
                </li>
                <li
                  onMouseEnter={() => {
                    setDiscover(true);
                    setVehicle(false);
                    setCharging(false);

                    setEnergy(false);
                    setShop(false);
                  }}
                  className={`${
                    discover ? `bg-gray-100` : ``
                  } p-2 rounded cursor-pointer`}
                >
                  Discover
                </li>
                <li
                  onMouseEnter={() => {
                    setShop(true);
                    setDiscover(false);
                    setVehicle(false);
                    setCharging(false);

                    setEnergy(false);
                  }}
                  className={`${
                    shop ? `bg-gray-100` : ``
                  } p-2 rounded cursor-pointer`}
                >
                  Shop
                </li>
              </ul>
            </div>
          </div>
          {!menuOpen && (
            <div className="block [@media(min-width:950px)]:hidden">
              {" "}
              <button
                className="rounded text-black text-sm bg-black/5 p-[6px] cursor-pointer"
                onClick={() => setClick(true)}
              >
                Menu
              </button>
            </div>
          )}
          <div className="hidden [@media(min-width:950px)]:flex mr-8 space-x-6">
            <MessageCircleQuestion className="w-[20px] cursor-pointer" />
            <Globe className="w-[20px] cursor-pointer" />
            <UserCircle className="w-[20px] cursor-pointer" />
          </div>
        </div>
        {menuOpen && (
          <div
            className="fixed inset-0 buttom-0 top-[100px]  bg-black/30 backdrop-blur-sm z-[5]"
            onMouseEnter={() => {
              setVehicle(false);
              setEnergy(false);
              setCharging(false);
              setDiscover(false);
              setShop(false);
            }}
          />
        )}

        {vehicle && (
          <div ref={slides[0]} className="relative z-60 flex z-80">
            <button onClick={handleCancel}>
              <ChevronLeft className="text-black dark:text-black absolute top-0 left-0 z-60 opacity-[0.7] hover:bg-gray-100 cursor-pointer flex [@media(min-width:950px)]:hidden text-black dark:text-black cursor-pointer" />
            </button>
            <div className=" text-black dark:text-blackz-60 [@media(max-width:950px)]:h-screen bg-white overflow-y-scroll [@media(max-width:950px)]:flex-col [@media(max-width:950px)]:items-center [@media(min-width:950px)]:flex [@media(min-width:950px)]:justify-center  absolute top-0 w-full">
              <div className="flex [@media(min-width:500px)]:flex-col flex items-center justify-center mt-8 mr-8 space-y-6 mb-8">
                <div className="z-40 bg-white space-x-6 flex [@media(max-width:500px)]:flex-col [@media(max-width:500px)]:mt-6">
                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/Mega-Menu-Vehicles-Model-S-New.avif"
                      alt="Model-S-New"
                      className="w-[150px] h-[80px]"
                    />
                    <p className="text-sm">Model S</p>
                    <div className="flex space-x-2">
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Learn
                      </a>
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Order
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/Mega-Menu-Vehicles-Model-3-Performance-LHD.avif"
                      alt="Model-3"
                      className="w-[150px] h-[80px]"
                    />
                    <p className="text-sm">Model 3</p>
                    <div className="flex space-x-2">
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Learn
                      </a>
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Order
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/Mega-Menu-Vehicles-Model-Y-2-v2.avif"
                      alt="Model-Y"
                      className="w-[150px] h-[80px]"
                    />
                    <p className="text-sm">Model Y</p>
                    <div className="flex space-x-2">
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Learn
                      </a>
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Order
                      </a>
                    </div>
                  </div>
                </div>
                <div className="z-40 bg-white space-x-6 flex [@media(max-width:500px)]:flex-col">
                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/Mega-Menu-Vehicles-Model-X-New.avif"
                      alt="Model-X"
                      className="w-[150px] h-[80px]"
                    />
                    <p className="text-sm">Model X</p>
                    <div className="flex space-x-2">
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Learn
                      </a>
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Order
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/Mega-Menu-Vehicles-Cybertruck-1x.avif"
                      alt="Cyber-Truck"
                      className="w-[150px] h-[80px]"
                    />
                    <p className="text-sm">Cybertruck</p>
                    <div className="flex space-x-2">
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Learn
                      </a>
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Order
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/Mega-Menu-Vehicles-Inventory.avif"
                      alt="Inventory"
                      className="w-[150px] h-[80px]"
                    />
                    <p className="text-sm">Inventory</p>
                    <div className="flex space-x-2">
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        New
                      </a>
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Pre-Owned
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-8 ml-8 mr-8 [@media(max-width:950px)]:border-t [@media(min-width:950px)]:border-l bg-white h-[280px] items-center">
                <div className="ml-8 mt-8 [@media(max-width:950px)]:pb-32 [@media(max-width:950px)]:space-y-6 flex flex-col space-y-[8px] text-xs">
                  <a href="#" className="hover:underline">
                    Current Offers
                  </a>
                  <a href="#" className="hover:underline">
                    Demo Drive
                  </a>
                  <a href="#" className="hover:underline">
                    Trade-in
                  </a>
                  <a href="#" className="hover:underline">
                    Pre-Owned
                  </a>
                  <a href="#" className="hover:underline">
                    Help Me Choose
                  </a>
                  <a href="#" className="hover:underline">
                    Compare
                  </a>
                  <a href="#" className="hover:underline">
                    Workshops
                  </a>
                  <a href="#" className="hover:underline">
                    Help Me Charge
                  </a>
                  <a href="#" className="hover:underline">
                    Fleet
                  </a>
                  <a href="#" className="hover:underline">
                    Semi
                  </a>
                  <a href="#" className="hover:underline">
                    Roadster
                  </a>
                  <a href="#" className="hover:underline">
                    Federal Tax Credit
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {energy && (
          <div ref={slides[1]} className="relative z-50 flex z-80">
            <button onClick={handleCancel}>
              <ChevronLeft className="text-black dark:text-black absolute top-0 left-0 z-60 opacity-[0.7] hover:bg-gray-100 cursor:pointer flex [@media(min-width:950px)]:hidden cursor-pointer" />
            </button>
            <div className="text-black dark:text-black z-40 [@media(max-width:950px)]:h-screen bg-white overflow-y-scroll [@media(max-width:950px)]:flex-col [@media(min-width:950px)]:flex justify-center  absolute top-0 w-full">
              <div className="flex flex-col items-center mt-16 space-y-6 mb-8">
                <div className="z-40 bg-white space-x-6 flex justify-center flex-1">
                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/Mega-Menu-Energy-Solar-Panels.avif"
                      alt="Solar Panel"
                      className="w-[150px] h-[80px]"
                    />
                    <p className="text-sm">Solar Panels</p>
                    <div className="flex space-x-2">
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Learn
                      </a>
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Order
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/Mega-Menu-Energy-Solar-Roof.avif"
                      alt="Solar Roof"
                      className="w-[150px] h-[80px]"
                    />
                    <p className="text-sm">Solar Roof</p>
                    <div className="flex space-x-2">
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Learn
                      </a>
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Order
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/Mega-Menu-Energy-Powerwall-US.avif"
                      alt="Power-Wall"
                      className="w-[150px] h-[80px]"
                    />
                    <p className="text-sm">Power Wall</p>
                    <div className="flex space-x-2">
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Learn
                      </a>
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Order
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-left flex-1">
                  <div className="w-[150px] flex flex-col items-center">
                    <img
                      src="/assets/Mega-Menu-Energy-Megapack.avif"
                      alt="Mega-Pack"
                      className="w-[150px] h-[80px]"
                    />

                    <div className="flex flex-col items-center w-[200px]">
                      <p className="text-sm">Mega Pack</p>
                      <div className="flex  w-[200px] justify-center">
                        <a
                          href="#"
                          className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                        >
                          Learn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-8 mr-8 mt-16 items-center [@media(max-width:950px)]:border-t [@media(min-width:950px)]:border-l">
                <div className="ml-8 mt-8 flex flex-col space-y-[15px] text-xs [@media(max-width:950px)]:pb-40 [@media(max-width:950px)]:space-y-6">
                  <a href="#" className="hover:underline">
                    Schedule a Consultation
                  </a>
                  <a href="#" className="hover:underline">
                    Why Solar
                  </a>
                  <a href="#" className="hover:underline">
                    Incentives
                  </a>
                  <a href="#" className="hover:underline">
                    Support
                  </a>
                  <a href="#" className="hover:underline">
                    Partner with Tesla
                  </a>
                  <a href="#" className="hover:underline">
                    Commercial
                  </a>
                  <a href="#" className="hover:underline">
                    Utilities
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {charging && (
          <div ref={slides[2]} className="relative z-60 flex z-80">
            <button onClick={handleCancel}>
              <ChevronLeft className="text-black dark:text-black absolute top-0 left-0 z-80 opacity-[0.7] hover:bg-gray-100 cursor:pointer flex [@media(min-width:950px)]:hidden cursor-pointer" />
            </button>
            <div className="text-black dark:text-black z-60 [@media(max-width:950px)]:h-screen bg-white overflow-y-scroll [@media(max-width:950px)]:flex-col [@media(max-width:950px)]:items-center [@media(min-width:950px)]:flex [@media(min-width:950px)]:justify-center items-center absolute top-0 w-full">
              <div className="flex flex-col space-y-6 items-center mb-8">
                <div className="z-60 bg-white space-x-6 mt-16 flex justify-center">
                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/Mega-Menu-Charging-Charging.avif"
                      alt="Charging"
                      className="w-[150px] h-[80px]"
                    />
                    <p className="text-sm">Charging</p>
                    <div className="flex space-x-2">
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Learn
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/Mega-Menu-Charging-Home-Charging.avif"
                      alt="Home Charging"
                      className="w-[150px] h-[80px]"
                    />
                    <p className="text-sm">Home Charging</p>
                    <div className="flex space-x-2">
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Learn
                      </a>
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Shop
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/Mega-Menu-Charging-Supercharging-NA.avif"
                      alt="Super Charging"
                      className="w-[150px] h-[80px]"
                    />
                    <p className="text-sm">Super Charging</p>
                    <div className="flex space-x-2">
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Learn
                      </a>
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Find
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center">
                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/Mega-Menu-Charging-Charging-for-Business.avif"
                      alt="Charging For Business"
                      className="w-[150px] h-[80px]"
                    />
                    <p className="text-sm">Charging For Business</p>
                    <div className="flex space-x-2">
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Learn
                      </a>
                      <a
                        href="#"
                        className=" text-xs underline opacity-[0.7] hover:opacity-[1]"
                      >
                        Order
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center ml-8 mr-8 mt-16 h-[280px] [@media(max-width:950px)]:border-t [@media(min-width:950px)]:border-l ">
                <div className="ml-8 mt-8 flex flex-col space-y-[15px] [@media(max-width:950px)]:pb-32 [@media(max-width:950px)]:space-y-6 text-xs h-full">
                  <a href="#" className="hover:underline">
                    Help Me Charge
                  </a>
                  <a href="#" className="hover:underline">
                    Charging Calculator
                  </a>
                  <a href="#" className="hover:underline">
                    Charging With NACS
                  </a>
                  <a href="#" className="hover:underline">
                    Supercharger Voting
                  </a>
                  <a href="#" className="hover:underline">
                    Host a Supercharger
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {discover && (
          <div ref={slides[3]} className="relative z-60 flex z-80">
            <button onClick={handleCancel}>
              <ChevronLeft className="text-black dark:text-black absolute top-0 left-0 z-80 opacity-[0.7] hover:bg-gray-100 cursor:pointer flex [@media(min-width:950px)]:hidden cursor-pointer" />
            </button>
            <div className="text-black dark:text-black [@media(max-width:950px)]:h-screen z-60 bg-white w-full flex justify-center absolute top-0 left-0 overflow-y-scroll">
              <div className="mb-16 flex justify-center space-x-16 [@media(max-width:950px)]:flex-col">
                <div className="flex flex-col space-y-2 text-xs [@media(max-width:950px)]:pt-60">
                  <p className="opacity-[0.7] hidden [@media(min-width:950px)]:flex">
                    Resources
                  </p>
                  <div className="flex flex-col space-y-2 font-semibold mt-4 [@media(max-width:950px)]:space-y-6">
                    <a href="#" className="hover:underline">
                      Demo Drive
                    </a>
                    <a href="#" className="hover:underline">
                      Insurance
                    </a>
                    <a href="#" className="hover:underline">
                      Current Offers
                    </a>
                    <a href="#" className="hover:underline">
                      Learn
                    </a>
                    <a href="#" className="hover:underline">
                      Video Guides
                    </a>
                    <a href="#" className="hover:underline">
                      Customer Stories
                    </a>
                    <a href="#" className="hover:underline">
                      Events
                    </a>
                    <a href="#" className="hover:underline">
                      Workshops
                    </a>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 text-xs">
                  <p className="opacity-[0.7] hidden [@media(min-width:950px)]:flex">
                    Location Services
                  </p>
                  <div className="flex flex-col space-y-2 font-semibold mt-4 [@media(max-width:950px)]:space-y-6">
                    <a href="#" className="hover:underline">
                      Find Us
                    </a>
                    <a href="#" className="hover:underline">
                      Find a Collision Center
                    </a>
                    <a href="#" className="hover:underline">
                      Find a Certified Installer
                    </a>
                  </div>
                </div>
                <div className="flex flex-col  text-xs">
                  <p className="opacity-[0.7] hidden [@media(min-width:950px)]:flex">
                    Company
                  </p>
                  <div className="flex flex-col space-y-2 font-semibold mt-4 [@media(max-width:950px)]:space-y-6 [@media(max-width:950px)]:pb-32">
                    <a href="#" className="hover:underline">
                      About
                    </a>
                    <a href="#" className="hover:underline">
                      Careers
                    </a>
                    <a href="#" className="hover:underline">
                      Investor Relations
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {shop && (
          <div ref={slides[4]} className="relative z-60 flex">
            <div className="text-black dark:text-black z-60 bg-white  flex justify-center  w-full cursor-pointer">
              <div className="flex flex-col items-center mb-8 mt-8">
                <img
                  src="assets/Mega-Menu-Shop-Charging.avif"
                  alt="Shop-Charging"
                  className="w-[150px] h-[80px] "
                />
                <p>Charging</p>
              </div>

              <div className="flex flex-col items-center mb-8 mt-8">
                <img
                  src="assets/Mega-Menu-Shop-Vehicle-Accessories.avif"
                  alt="Vehicle-Accessories"
                  className="w-[150px] h-[80px]"
                />
                <p>Vehicle Accessories</p>
              </div>
              <div className="flex flex-col items-center mb-8 mt-8 cursor-pointer">
                <img
                  src="assets/Mega-Menu-Shop-Apparel.avif"
                  alt="Apparel"
                  className="w-[150px] h-[80px]"
                />
                <p>Apparel</p>
              </div>
              <div className="flex flex-col items-center mb-8 mt-8 cursor-pointer">
                <img
                  src="assets/Mega-Menu-Shop-Lifestyle.avif"
                  alt="Lifestyle"
                  className="w-[150px] h-[80px]"
                />
                <p>Lifestyle</p>
              </div>
            </div>
          </div>
        )}

        {click && (
          <div className="absolute bg-white top-0 left-0 w-full h-screen z-60 text-sm overflow-y-scroll">
            <button
              onClick={() => {
                setClick(false);
                setVehicle(false);
                setEnergy(false);
                setCharging(false);
                setDiscover(false);
                setShop(false);
              }}
              className="absolute top-0 right-0 opacity-[0.7] hover:bg-gray-100 cursor:pointer text-black dark:text-black cursor-pointer"
            >
              <X />
            </button>

            <ul className="space-y-[10px] mt-16 bg-white">
              <li
                className={`p-4 cursor:pointer flex justify-between ${
                  menuOpen
                    ? `text-white`
                    : `text-black dark:text-black hover:bg-gray-100`
                }`}
                onClick={() => setVehicle(true)}
              >
                <p>Vehicles</p>
                <ChevronRight
                  className={`${
                    menuOpen ? `text-white` : `text-black dark:text-black`
                  }`}
                />
              </li>
              <li
                className={`p-4 cursor:pointer flex justify-between ${
                  menuOpen
                    ? `text-white`
                    : `text-black dark:text-black hover:bg-gray-100`
                }`}
                onClick={() => setEnergy(true)}
              >
                <p>Energy</p>{" "}
                <ChevronRight
                  className={`${
                    menuOpen ? `text-white` : `text-black dark:text-black`
                  }`}
                />
              </li>
              <li
                className={`p-4 cursor:pointer flex justify-between ${
                  menuOpen
                    ? `text-white`
                    : `text-black dark:text-black hover:bg-gray-100`
                }`}
                onClick={() => setCharging(true)}
              >
                <p>Charging</p>{" "}
                <ChevronRight
                  className={`${
                    menuOpen ? `text-white` : `text-black dark:text-black`
                  }`}
                />
              </li>
              <li
                className={`p-4 cursor:pointer flex justify-between ${
                  menuOpen
                    ? `text-white`
                    : `text-black dark:text-black hover:bg-gray-100`
                }`}
                onClick={() => setDiscover(true)}
              >
                <p>Discover</p>{" "}
                <ChevronRight
                  className={`${
                    menuOpen ? `text-white` : `text-black dark:text-black`
                  }`}
                />
              </li>
              <li className="hover:bg-gray-100  p-4 cursor:pointer text-black dark:text-black">
                Shop
              </li>
              <li className="hover:bg-gray-100  p-4 cursor:pointer flex justify-between text-black dark:text-black">
                <div className="">
                  <div className="flex">
                    {" "}
                    <Globe /> United States
                  </div>
                  <p className="ml-[25px] opacity-[0.7]">English</p>
                </div>
                <ChevronRight className="opacity-[0.7]" />
              </li>
              <li className="hover:bg-gray-100  p-4 flex cursor:pointer text-black dark:text-black">
                <UserCircle />
                Account
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
