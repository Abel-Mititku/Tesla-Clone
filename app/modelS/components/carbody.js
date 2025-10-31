"use client";
import { ChevronRight, Flag } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";
import Payment from "@/app/payment/payment";
import Image from "next/image";
import { useState, useRef } from "react";

export default function CarBody() {
  const refs = [useRef(null), useRef(null), useRef(null)];
  const [cash, setCash] = useState(false);
  const [lease, setLease] = useState(true);
  const [finance, setFinance] = useState(false);
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [gray, setGray] = useState(true);
  const [white, setWhite] = useState(false);
  const [blue, setBlue] = useState(false);
  const [black, setBlack] = useState(false);
  const [silver, setSilver] = useState(false);
  const [red, setRed] = useState(false);
  const [magnetite, setMagnetite] = useState(true);
  const [velarium, setVelarium] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [interiorBlack, setInteriorBlack] = useState(true);
  const [interiorWhite, setInteriorWhite] = useState(false);
  const [interiorCream, setInteriorCream] = useState(false);
  const [towHitch, setTowHitch] = useState(false);
  const [fiveSeat, setFiveSeat] = useState(true);
  const [sixSeat, setSixSeat] = useState(false);
  const [sevenSeat, setSevenSeat] = useState(false);
  const [order, setOrder] = useState(false);

  const modelGrayMagnetite = [
    "compositor (57).jpg",
    "compositor (58).jpg",
    "compositor (59).jpg",
    "compositor (60).jpg",
    `${
      interiorBlack
        ? `compositor (61).jpg`
        : interiorWhite
        ? `compositor (6).jpg`
        : interiorCream && `compositor (7).jpg`
    }`,
  ];

  const modelBlueMagnetite = [
    "compositor (82).jpg",
    "compositor (83).jpg",
    "compositor (84).jpg",
    "compositor (85).jpg",
    `${
      interiorBlack
        ? `compositor (61).jpg`
        : interiorWhite
        ? `compositor (6).jpg`
        : interiorCream && `compositor (7).jpg`
    }`,
  ];

  const modelBlackMagnetite = [
    "compositor (74).jpg",
    "compositor (75).jpg",
    "compositor (76).jpg",
    "compositor (77).jpg",
    `${
      interiorBlack
        ? `compositor (61).jpg`
        : interiorWhite
        ? `compositor (6).jpg`
        : interiorCream && `compositor (7).jpg`
    }`,
  ];

  const modelWhiteMagnetite = [
    "compositor (66).jpg",
    "compositor (67).jpg",
    "compositor (68).jpg",
    "compositor (69).jpg",
    `${
      interiorBlack
        ? `compositor (61).jpg`
        : interiorWhite
        ? `compositor (6).jpg`
        : interiorCream && `compositor (7).jpg`
    }`,
  ];

  const modelSilverMagnetite = [
    "compositor (98).jpg",
    "compositor (99).jpg",
    "compositor (100).jpg",
    "compositor (1).jpg",
    `${
      interiorBlack
        ? `compositor (61).jpg`
        : interiorWhite
        ? `compositor (6).jpg`
        : interiorCream && `compositor (7).jpg`
    }`,
  ];

  const modelRedMagnetite = [
    "compositor (90).jpg",
    "compositor (91).jpg",
    "compositor (92).jpg",
    "compositor (93).jpg",
    `${
      interiorBlack
        ? `compositor (61).jpg`
        : interiorWhite
        ? `compositor (6).jpg`
        : interiorCream && `compositor (7).jpg`
    }`,
  ];

  const modelGrayVelarium = [
    "compositor (62).jpg",
    "compositor (63).jpg",
    "compositor (64).jpg",
    "compositor (65).jpg",
    `${
      interiorBlack
        ? `compositor (61).jpg`
        : interiorWhite
        ? `compositor (6).jpg`
        : interiorCream && `compositor (7).jpg`
    }`,
  ];

  const modelWhiteVelarium = [
    "compositor (70).jpg",
    "compositor (71).jpg",
    "compositor (72).jpg",
    "compositor (73).jpg",
    `${
      interiorBlack
        ? `compositor (61).jpg`
        : interiorWhite
        ? `compositor (6).jpg`
        : interiorCream && `compositor (7).jpg`
    }`,
  ];

  const modelBlueVelarium = [
    "compositor (86).jpg",
    "compositor (87).jpg",
    "compositor (88).jpg",
    "compositor (89).jpg",
    `${
      interiorBlack
        ? `compositor (61).jpg`
        : interiorWhite
        ? `compositor (6).jpg`
        : interiorCream && `compositor (7).jpg`
    }`,
  ];

  const modelBlackVelarium = [
    "compositor (78).jpg",
    "compositor (79).jpg",
    "compositor (80).jpg",
    "compositor (81).jpg",
    `${
      interiorBlack
        ? `compositor (61).jpg`
        : interiorWhite
        ? `compositor (6).jpg`
        : interiorCream && `compositor (7).jpg`
    }`,
  ];

  const modelSilverVelarium = [
    "compositor (2).jpg",
    "compositor (3).jpg",
    "compositor (4).jpg",
    "compositor (5).jpg",
    `${
      interiorBlack
        ? `compositor (61).jpg`
        : interiorWhite
        ? `compositor (6).jpg`
        : interiorCream && `compositor (7).jpg`
    }`,
  ];

  const modelRedVelarium = [
    "compositor (94).jpg",
    "compositor (95).jpg",
    "compositor (96).jpg",
    "compositor (97).jpg",
    `${
      interiorBlack
        ? `compositor (61).jpg`
        : interiorWhite
        ? `compositor (6).jpg`
        : interiorCream && `compositor (7).jpg`
    }`,
  ];

  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [details, setDetails] = useState(false);
  const totalPrice =
    (lease
      ? (gray && first && magnetite ? 1729 : 0) +
        (gray && first && velarium ? 1821 : 0) +
        (gray && second && magnetite ? 1759 : 0) +
        (gray && second && velarium ? 1759 : 0) +
        (white && first && magnetite ? 1759 : 0) +
        (white && first && velarium ? 1759 : 0) +
        (white && second && magnetite ? 1759 : 0) +
        (white && second && velarium ? 1759 : 0) +
        (blue && first && magnetite ? 1759 : 0) +
        (blue && second && magnetite ? 1759 : 0) +
        (blue && first && velarium ? 1780 : 0) +
        (blue && second && velarium ? 1780 : 0) +
        (black && first && magnetite ? 1780 : 0) +
        (black && second && magnetite ? 1780 : 0) +
        (black && first && velarium ? 1780 : 0) +
        (black && second && velarium ? 1780 : 0) +
        (silver && first && magnetite ? 1780 : 0) +
        (silver && second && magnetite ? 1780 : 0) +
        (silver && first && velarium ? 2110 : 0) +
        (silver && second && velarium ? 2030 : 0) +
        (red && first && magnetite ? 2000 : 0) +
        (red && second && magnetite ? 1990 : 0) +
        (red && first && velarium ? 2020 : 0) +
        (red && second && velarium ? 2090 : 0)
      : 0) +
    (cash && first ? 94990 : 0) +
    (cash && second ? 109990 : 0) +
    (finance && first ? 1497 : 0) +
    (finance && second ? 1740 : 0) +
    (towHitch ? 1000 : 0);

  const handleInput = () => {
    setError(null);
    if (!input) {
      setError("Required");
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < modelGrayMagnetite.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : modelGrayMagnetite.length - 1
    );
  };

  return (
    <div className="relative flex [@media(max-width:500px)]:flex-col [@media(min-width:500px)]:mt-8  [@media(min-width:500px)]:pt-16">
      <div className={`h-[400vh]`}>
        <div className="sticky z-20 [@media(max-width:500px)]:top-0 [@media(min-width:500px)]:top-[100px]">
          {gray && magnetite && (
            <img
              src={`/assets/modelS/${modelGrayMagnetite[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {red && magnetite && (
            <img
              src={`/assets/modelS/${modelRedMagnetite[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {blue && magnetite && (
            <img
              src={`/assets/modelS/${modelBlueMagnetite[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {silver && magnetite && (
            <img
              src={`/assets/modelS/${modelSilverMagnetite[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {black && magnetite && (
            <img
              src={`/assets/modelS/${modelBlackMagnetite[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {white && magnetite && (
            <img
              src={`/assets/modelS/${modelWhiteMagnetite[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {gray && velarium && (
            <img
              src={`/assets/modelS/${modelGrayVelarium[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {white && velarium && (
            <img
              src={`/assets/modelS/${modelWhiteVelarium[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {blue && velarium && (
            <img
              src={`/assets/modelS/${modelBlueVelarium[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {black && velarium && (
            <img
              src={`/assets/modelS/${modelBlackVelarium[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {silver && velarium && (
            <img
              src={`/assets/modelS/${modelSilverVelarium[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {red && velarium && (
            <img
              src={`/assets/modelS/${modelRedVelarium[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          <ChevronLeft
            className="w-8 h-8 p-2 rounded bg-gray-200 text-black absolute top-[100px] left-0 z-40 [@media(min-width:800px)]:top-[150px] [@media(min-width:800px)]:flex hidden [@media(max-width:500px)]:flex cursor-pointer hover:bg-gray-100"
            onClick={handlePrev}
          />
          <ChevronRight
            className="w-8 h-8 p-2 rounded bg-gray-200 text-black absolute top-[100px] right-0 [@media(min-width:800px)]:top-[150px] [@media(min-width:800px)]:flex hidden [@media(max-width:500px)]:flex z-40 cursor-pointer hover:bg-gray-100"
            onClick={handleNext}
          />
        </div>
      </div>
      <div className="flex flex-col items-center z-10 [@media(max-width:500px)]:pt-[110px] [@media(max-width:500px)]:absolute top-30">
        <p className="text-2xl font-bold">Model S</p>
        <div className="flex justify-between w-[80%] text-sm mt-4">
          <div className="text-center">
            <p>410mi</p>
            <p className="text-gray-800 dark:text-white-200 dark:text-gray-800 text-xs">
              Range (EPA est.)
            </p>
          </div>
          <div className="text-center">
            <p>130mph</p>
            <p className="text-gray-800 dark:text-white-200 dark:text-gray-800 text-xs">
              Top Speed
            </p>
          </div>
          <div className="text-center">
            <p>3.1sec</p>
            <p className="text-gray-800 dark:text-white-200 dark:text-gray-800 text-xs">
              0-60 mph
            </p>
          </div>
        </div>
        <div className="flex justify-between w-[80%] text-xs mt-4 border-b mb-4">
          <p
            className={`${
              cash ? `border-b opacity-[1]` : ``
            } w-[30%] text-center opacity-[0.8] cursor-pointer`}
            onClick={() => {
              setFinance(false);
              setLease(false);
              setCash(true);
            }}
          >
            Cash
          </p>
          <p
            className={`${
              lease ? `border-b opacity-[1]` : ``
            } w-[30%] text-center opacity-[0.8] cursor-pointer`}
            onClick={() => {
              setCash(false);
              setFinance(false);
              setLease(true);
            }}
          >
            Lease
          </p>
          <p
            className={`${
              finance ? `border-b opacity-[1]` : ``
            } w-[30%] text-center opacity-[0.8] cursor-pointer`}
            onClick={() => {
              setLease(false);
              setCash(false);
              setFinance(true);
            }}
          >
            Finance
          </p>
        </div>
        <div className="flex flex-col w-[80%]">
          <div
            className={`flex justify-between h-12 w-full border opacity-[0.8] rounded-xs text-xs h-8 items-center p-2 cursor-default ${
              first
                ? `bg-gray-100 dark:bg-gray-100 dark:text-black opacity-[1] font-bold`
                : ``
            }`}
            onClick={() => {
              setFirst(true);
              setSecond(false);
              setThird(false);
            }}
          >
            <p>All-Wheel Drive</p>{" "}
            <p>
              {lease && `$1,729/mo`} {cash && `$94,990/mo`}{" "}
              {finance && `$1,361/mo`}
            </p>
          </div>
          <div
            className={`flex justify-between w-full h-12 border opacity-[0.8] rounded-xs mt-2 text-xs h-8 items-center p-2 cursor-default ${
              second
                ? `bg-gray-100 dark:bg-gray-100 dark:text-black opacity-[1] font-bold`
                : ``
            }`}
            onClick={() => {
              setFirst(false);
              setSecond(true);
              setThird(false);
            }}
          >
            <p>Plaid</p>{" "}
            <p>
              {lease && `$1,929/mo`} {cash && `$109,990/mo`}{" "}
              {finance && `$1,582/mo`}
            </p>
          </div>
        </div>
        <div className="flex justify-between w-[80%] h-10 mt-4 bg-gray-100 rounded text-xs items-center dark:text-black">
          <a href="#" className="px-2">
            View and Compare Features
          </a>
          <ChevronRight className="text-black dark:text-black " />
        </div>

        {!cash && (
          <div className="w-[80%] text-xs mt-2">
            <p className="opacity-[0.8]">
              {`${lease && `6.19% APR, $3,999 down, 84 mo`}`}{" "}
              {`${
                finance &&
                `$7,500 down, 36 mo, 10,000 miles
`
              }`}
            </p>
            {!cash && (
              <a href="#" className="opacity-[0.8] underline hover:opacity-[1]">
                Edit {lease && `Leasing`}
                {finance && `Financing`}
              </a>
            )}
          </div>
        )}
        <div className="w-[80%] flex justify-start mt-4">
          <a
            href="#"
            className="underline opacity-[0.8] hover:opacity-[1] text-xs"
          >
            Get Prequalified
          </a>
        </div>
        <p className="text-xs opacity-[0.8] mt-12">Included</p>
        <p>Luxe Package</p>
        <div className="flex flex-col w-[90%] border-2 border-black/20  mt-2">
          <div className="flex mt-4 ml-2">
            <div>
              <img
                src="/assets/cybertruck/thumbnail_FSD.avif"
                className="rounded"
              />
            </div>
            <div className="flex flex-col ml-2">
              <p className="text-sm mb-[4px]">Full Self-Driving (Supervised)</p>
              <p className="text-xs opacity-[0.8]">
                Your car will be able to drive itself almost everywhere with
                minimal driver intervention
              </p>
            </div>
          </div>
          <div className="flex mt-6 ml-2">
            <div>
              <img
                src="/assets/modelX/thumbnail_PSP.avif"
                className="rounded"
              />
            </div>
            <div className="flex flex-col ml-2">
              <p className="text-sm mb-[4px]">Four-Year Premium Service</p>
              <p className="text-xs opacity-[0.8]">
                Wheel and tire protection ,windshield protection and recommended
                maintenance
              </p>
            </div>
          </div>
          <div className="flex mt-6 mb-4 ml-2">
            <div>
              <img
                src="/assets/cybertruck/thumbnail_SC.avif"
                className="w-[105px] h-[70px] rounded"
              />
            </div>
            <div className="flex flex-col ml-2">
              <p className="text-sm mb-[4px]">Supercharging</p>
              <p className="text-xs opacity-[0.8]">
                Charge for free at 70,000+ Superchargers worldwide
              </p>
            </div>
          </div>
          <div className="flex mt-6 mb-4 ml-2">
            <div>
              <img
                src="/assets/cybertruck/thumbnail_PC.avif"
                className="rounded"
              />
            </div>
            <div className="flex flex-col ml-2">
              <p className="text-sm mb-[4px]">Premium Connectivity</p>
              <p className="text-xs opacity-[0.8]">
                Listen to music,stream movies,monitor live traffic and more--no
                WI-FI needed
              </p>
            </div>
          </div>
        </div>
        <p className="text-xs opacity-[0.8] mt-12">
          {gray && `Included`} {white && `$1,000`} {blue && `$1,000`}{" "}
          {black && `$1,500`} {silver && `$2,000`} {red && `$2,000`}
        </p>
        <p className="text-sm mb-6">
          {gray && `Stealth Grey`} {white && `Pearl White Multi-Coat`}{" "}
          {blue && `Frost Blue Metallic`} {black && `Diamond Black`}{" "}
          {silver && `Quicksilver`} {red && `Ultra Red`}
        </p>
        <div className="flex w-[80%] justify-between">
          <img
            src="/assets/model3/Paint_StealthGrey.avif"
            className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
              gray && `border`
            }`}
            onClick={() => {
              setCurrentIndex(0);
              setGray(true);
              setBlack(false);
              setBlue(false);
              setRed(false);
              setSilver(false);
              setWhite(false);
            }}
          />
          <img
            src="/assets/model3/Paint_White.avif"
            className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
              white && `border`
            }`}
            onClick={() => {
              setCurrentIndex(0);
              setGray(false);
              setBlack(false);
              setBlue(false);
              setRed(false);
              setSilver(false);
              setWhite(true);
            }}
          />
          <img
            src="/assets/modelX/FrostBlue.avif"
            className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
              blue && `border`
            }`}
            onClick={() => {
              setCurrentIndex(0);
              setGray(false);
              setBlack(false);
              setBlue(true);
              setRed(false);
              setSilver(false);
              setWhite(false);
            }}
          />
          <img
            src="/assets/model3/DiamondBlack.avif"
            className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
              black && `border`
            }`}
            onClick={() => {
              setCurrentIndex(0);
              setGray(false);
              setBlack(true);
              setBlue(false);
              setRed(false);
              setSilver(false);
              setWhite(false);
            }}
          />
          <img
            src="/assets/model3/Paint_Silver_R1.avif"
            className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
              silver && `border`
            }`}
            onClick={() => {
              setCurrentIndex(0);
              setGray(false);
              setBlack(false);
              setBlue(false);
              setRed(false);
              setSilver(true);
              setWhite(false);
            }}
          />
          <img
            src="/assets/model3/Paint_Red.avif"
            className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
              red && `border`
            }`}
            onClick={() => {
              setCurrentIndex(0);
              setGray(false);
              setBlack(false);
              setBlue(false);
              setRed(true);
              setSilver(false);
              setWhite(false);
            }}
          />
        </div>
        <div>
          <p className="mt-6 opacity-[0.8] text-xs">{`${
            magnetite ? `Included` : `$4,500`
          }`}</p>
        </div>

        <p className="text-sm mb-6">
          {magnetite ? `20'' Magnetite Wheels` : `21" Velarium Wheels`}
        </p>
        <div className="flex">
          <img
            src="/assets/modelS/19-Magnetite-Wheels.avif"
            className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
              magnetite && `border`
            }`}
            onClick={() => {
              setMagnetite(true);
              setVelarium(false);
            }}
          />
          <img
            src="/assets/modelS/21-Velarium-Wheels.avif"
            className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
              velarium && `border`
            }`}
            onClick={() => {
              setMagnetite(false);
              setVelarium(true);
            }}
          />
        </div>
        <p className="text-xs opacity-[0.8] mt-12">All-Season Tires</p>
        <p className="text-sm opacity-[0.8]">Range (EPA est.) : 357mi</p>
        <p className="text-xs opacity-[0.8] mt-12">
          {interiorBlack ? `Included` : `$1,000`}
        </p>
        <p className="text-sm mb-6">
          {interiorBlack ? `Black Interior` : `Black and White Interior`}
        </p>
        <div className="flex">
          <img
            src="/assets/model3/ui_swat_int_in3pb.avif"
            className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
              interiorBlack && `border`
            }`}
            onClick={() => {
              setInteriorBlack(true);
              setInteriorWhite(false);
              setInteriorCream(false);
            }}
          />
          <img
            src="/assets/model3/ui_swat_int_white.avif"
            className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
              interiorWhite && `border`
            }`}
            onClick={() => {
              setInteriorBlack(false);
              setInteriorWhite(true);
              setInteriorCream(false);
            }}
          />
          <img
            src="/assets/modelX/Interior_Cream.avif"
            className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
              interiorCream && `border`
            }`}
            onClick={() => {
              setInteriorBlack(false);
              setInteriorWhite(false);
              setInteriorCream(true);
            }}
          />
        </div>
        <p className="text-xs opacity-[0.8] mt-12">Included</p>
        <p className="text-lg font-bold">Full Self-Driving (Supervised)</p>
        <p className="w-[90%] text-center text-sm mt-4">
          Your car will be able to drive itself almost anywhere with minimal
          driver intervention
        </p>
        <p className="w-[90%] text-center text-xs mt-4 opacity-[0.8]">
          Currently enabled features require active driver supervision and do
          not make the vehicle autonomous. The activation and use of these
          features are dependent on development and regulatory approval, which
          may take longer in some jurisdictions.
        </p>
        <p className="text-lg font-bold mt-16">Charging</p>
        <p className="w-[90%] text-center text-xs mt-4 opacity-[0.8]">
          Every Tesla includes access to the largest global Supercharging
          network
        </p>
        <div className="relative text-center">
          <p className="mt-4 font-bold mb-4">Enter Delivery ZIP</p>
          <input
            type="text"
            placeholder="Enter Delivery ZIP"
            onChange={(e) => setInput(e.target.value)}
            required
            className={`text-center h-8 text-xs border rounded-xs focus:border-blackfocus:outline-none ${
              error ? `border-red-700` : ``
            }`}
            onBlur={handleInput}
          />
          {error && (
            <p className="absolute left-0 mt-[2px] text-red-700 text-xs">
              {error}
            </p>
          )}
        </div>
        {details && (
          <div className="flex flex-col space-y-2 mt-6 text-xs w-[80%]">
            <div className="flex justify-between opacity-[0.8]">
              <p>Model X Dual Motor All-Wheel Drive</p>
              <p>$99,990</p>
            </div>
            <div className="flex justify-between opacity-[0.8]">
              <p>Pearl White Multi-Coat Paint</p>
              <p>$1,500</p>
            </div>
            <div className="flex justify-between opacity-[0.8]">
              <p>20&quot; Perihelix Wheels</p>
              <p>Included</p>
            </div>
            <div className="flex justify-between opacity-[0.8]">
              <p>All Black Premium Interior with Ebony Décor</p>
              <p>Included</p>
            </div>
            <div className="flex justify-between opacity-[0.8]">
              <p>Five Seat Interior</p>
              <p>Included</p>
            </div>
            <div className="flex justify-between opacity-[0.8]">
              <p>Steering Wheel</p>
              <p>Included</p>
            </div>
            <div className="flex justify-between opacity-[0.8]">
              <p>Four-Year Premium Service</p>
              <p>Included</p>
            </div>
            <div className="flex justify-between opacity-[0.8]">
              <p>Autopilot</p>
              <p>Included</p>
            </div>
            <div className="flex justify-between opacity-[0.8]">
              <a href="#" className="underline">
                Free Premium Connectivity
              </a>
              <p>Included</p>
            </div>
            <div className="flex justify-between opacity-[0.8]">
              <p>Tow Package</p>
              <p>Included</p>
            </div>
            <div className="flex justify-between opacity-[0.8]">
              <p>Vehicle Price</p>
              <p>$101,490</p>
            </div>
            <div className="flex justify-between opacity-[0.8]">
              <p>Destination Fee</p>
              <p>$1,390</p>
            </div>
            <div className="flex justify-between opacity-[0.8]">
              <p>Order Fee</p>
              <p>$450</p>
            </div>
            <div className="flex justify-between border-t pt-2 mt-4">
              <p className="font-bold">Est. Purchase Price</p>
              <p className="font-bold">$103,130</p>
            </div>
          </div>
        )}
        <p
          className="text-xs opacity-[0.8] mt-6"
          onClick={() => setDetails((prev) => !prev)}
        >
          {!details && (
            <div className="flex">
              <p className="flex hover:underline">Show Pricing Details</p>
              <ChevronDown className="w-4 h-4" />
            </div>
          )}
          {details && (
            <p className="flex hover:underline">
              Hide Pricing Details <ChevronUp className="w-4 h-4" />
            </p>
          )}
        </p>
        <div className="flex justify-between font-bold w-[80%] mt-6">
          <p>Est. Lease Payment</p> <p>${totalPrice}/mo</p>
        </div>
        <p className="text-xs opacity-[0.8] text-start w-[80%]">
          $3,000 down, 24 mo, 10,000 miles
        </p>
        <a
          href="#"
          className="text-xs opacity-[0.8] hover:opacity-[1] underline w-[80%] text-start mt-2"
        >
          Edit Leasing
        </a>
        <div className="flex justify-between font-bold w-[80%] mt-6">
          <p>Due Today</p>
          <p>$250</p>
        </div>
        <p className="text-xs opacity-[0.8] text-start w-[80%]">
          Non-refundable Order Fee
        </p>
        {!order && (
          <button
            className="w-[80%] h-8 rounded-xs hover:bg-black hover:text-white border-2 text-xs text-gray-600 mt-6 mb-16"
            onClick={() => setOrder(true)}
          >
            Order with Card
          </button>
        )}
        {order && <Payment />}
      </div>
    </div>
  );
}
