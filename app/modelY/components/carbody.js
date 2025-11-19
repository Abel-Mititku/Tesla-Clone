"use client";
import { ChevronRight, Flag } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { useState, useRef } from "react";
import Payment from "@/app/payment/payment";
import "../../style.css";

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
  const [photon, setPhoton] = useState(true);
  const [nova, setNova] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [interiorBlack, setInteriorBlack] = useState(true);
  const [interiorWhite, setInteriorWhite] = useState(false);
  const [towHitch, setTowHitch] = useState(false);
  const [order, setOrder] = useState(false);

  const modelGrayPhoton = [
    "compositor (57).jpg",
    "compositor (58).jpg",
    "compositor (59).jpg",
    "compositor (60).jpg",
    `${interiorBlack ? `compositor (61).jpg` : `compositor (63).jpg`}`,
    `${interiorBlack ? `compositor (62).jpg` : `compositor (65).jpg`}`,
  ];
  const modelWhitePhoton = [
    "compositor (66).jpg",
    "compositor (67).jpg",
    "compositor (68).jpg",
    "compositor (69).jpg",
    `${interiorBlack ? `compositor (61).jpg` : `compositor (63).jpg`}`,
    `${interiorBlack ? `compositor (62).jpg` : `compositor (65).jpg`}`,
  ];

  const modelBluePhoton = [
    "compositor (70).jpg",
    "compositor (71).jpg",
    "compositor (72).jpg",
    "compositor (73).jpg",
    `${interiorBlack ? `compositor (61).jpg` : `compositor (63).jpg`}`,
    `${interiorBlack ? `compositor (62).jpg` : `compositor (65).jpg`}`,
  ];

  const modelBlackPhoton = [
    "compositor (74).jpg",
    "compositor (75).jpg",
    "compositor (76).jpg",
    "compositor (77).jpg",
    `${interiorBlack ? `compositor (61).jpg` : `compositor (63).jpg`}`,
    `${interiorBlack ? `compositor (62).jpg` : `compositor (65).jpg`}`,
  ];

  const modelSilverPhoton = [
    "compositor (78).jpg",
    "compositor (79).jpg",
    "compositor (80).jpg",
    "compositor (81).jpg",
    `${interiorBlack ? `compositor (61).jpg` : `compositor (63).jpg`}`,
    `${interiorBlack ? `compositor (62).jpg` : `compositor (65).jpg`}`,
  ];

  const modelRedPhoton = [
    "compositor (82).jpg",
    "compositor (83).jpg",
    "compositor (84).jpg",
    "compositor (85).jpg",
    `${interiorBlack ? `compositor (61).jpg` : `compositor (63).jpg`}`,
    `${interiorBlack ? `compositor (62).jpg` : `compositor (65).jpg`}`,
  ];

  const modelGrayNova = [
    "compositor (86).jpg",
    "compositor (87).jpg",
    "compositor (88).jpg",
    "compositor (89).jpg",
    `${interiorBlack ? `compositor (61).jpg` : `compositor (63).jpg`}`,
    `${interiorBlack ? `compositor (62).jpg` : `compositor (65).jpg`}`,
  ];

  const modelWhiteNova = [
    "compositor (90).jpg",
    "compositor (91).jpg",
    "compositor (92).jpg",
    "compositor (93).jpg",
    `${interiorBlack ? `compositor (61).jpg` : `compositor (63).jpg`}`,
    `${interiorBlack ? `compositor (62).jpg` : `compositor (65).jpg`}`,
  ];

  const modelBlueNova = [
    "compositor (94).jpg",
    "compositor (95).jpg",
    "compositor (96).jpg",
    "compositor (97).jpg",
    `${interiorBlack ? `compositor (61).jpg` : `compositor (63).jpg`}`,
    `${interiorBlack ? `compositor (62).jpg` : `compositor (65).jpg`}`,
  ];

  const modelBlackNova = [
    "compositor (98).jpg",
    "compositor (99).jpg",
    "compositor (100).jpg",
    "compositor (101).jpg",
    `${interiorBlack ? `compositor (61).jpg` : `compositor (63).jpg`}`,
    `${interiorBlack ? `compositor (62).jpg` : `compositor (65).jpg`}`,
  ];

  const modelSilverNova = [
    "compositor (102).jpg",
    "compositor (103).jpg",
    "compositor (104).jpg",
    "compositor (105).jpg",
    `${interiorBlack ? `compositor (61).jpg` : `compositor (63).jpg`}`,
    `${interiorBlack ? `compositor (62).jpg` : `compositor (65).jpg`}`,
  ];

  const modelRedNova = [
    "compositor (106).jpg",
    "compositor (107).jpg",
    "compositor (108).jpg",
    "compositor (109).jpg",
    `${interiorBlack ? `compositor (61).jpg` : `compositor (63).jpg`}`,
    `${interiorBlack ? `compositor (62).jpg` : `compositor (65).jpg`}`,
  ];

  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [details, setDetails] = useState(false);
  const totalPrice =
    (lease
      ? (gray && first && photon ? 399 : 0) +
        (gray && first && nova ? 324 : 0) +
        (gray && second && photon ? 519 : 0) +
        (gray && second && nova ? 528 : 0) +
        (white && first && photon ? 415 : 0) +
        (white && first && nova ? 358 : 0) +
        (white && second && photon ? 333 : 0) +
        (white && second && nova ? 567 : 0) +
        (blue && first && photon ? 316 : 0) +
        (blue && second && photon ? 519 : 0) +
        (blue && first && nova ? 341 : 0) +
        (blue && second && nova ? 423 : 0) +
        (black && first && photon ? 324 : 0) +
        (black && second && photon ? 528 : 0) +
        (black && first && nova ? 350 : 0) +
        (black && second && nova ? 557 : 0) +
        (silver && first && photon ? 333 : 0) +
        (silver && second && photon ? 538 : 0) +
        (silver && first && nova ? 358 : 0) +
        (silver && second && nova ? 567 : 0) +
        (red && first && photon ? 333 : 0) +
        (red && second && photon ? 538 : 0) +
        (red && first && nova ? 358 : 0) +
        (red && second && nova ? 567 : 0)
      : 0) +
    (cash && first ? 37490 : 0) +
    (cash && second ? 41490 : 0) +
    (finance && first ? 669 : 0) +
    (finance && second ? 743 : 0) +
    (towHitch ? 1000 : 0);

  const handleInput = () => {
    setError(null);
    if (!input) {
      setError("Required");
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < modelGrayPhoton.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : modelGrayPhoton.length - 1
    );
  };

  return (
    <div className="relative flex [@media(max-width:500px)]:flex-col [@media(min-width:500px)]:mt-8  [@media(min-width:500px)]:pt-16">
      <div className="sticky z-20 h-[200vh] model-Y">
        {gray && photon && (
          <img
            src={`/assets/modelY/${modelGrayPhoton[currentIndex]}`}
            className="z-10 object-contain"
          />
        )}
        {red && photon && (
          <img
            src={`/assets/modelY/${modelRedPhoton[currentIndex]}`}
            className="z-10 object-contain"
          />
        )}
        {blue && photon && (
          <img
            src={`/assets/modelY/${modelBluePhoton[currentIndex]}`}
            className="z-10 object-contain"
          />
        )}
        {silver && photon && (
          <img
            src={`/assets/modelY/${modelSilverPhoton[currentIndex]}`}
            className="z-10 object-contain"
          />
        )}
        {black && photon && (
          <img
            src={`/assets/modelY/${modelBlackPhoton[currentIndex]}`}
            className="z-10 object-contain"
          />
        )}
        {white && photon && (
          <img
            src={`/assets/modelY/${modelWhitePhoton[currentIndex]}`}
            className="z-10 object-contain"
          />
        )}
        {gray && nova && (
          <img
            src={`/assets/modelY/${modelGrayNova[currentIndex]}`}
            className="z-10 object-contain"
          />
        )}
        {white && nova && (
          <img
            src={`/assets/modelY/${modelWhiteNova[currentIndex]}`}
            className="z-10 object-contain"
          />
        )}
        {blue && nova && (
          <img
            src={`/assets/modelY/${modelBlueNova[currentIndex]}`}
            className="z-10 object-contain"
          />
        )}
        {black && nova && (
          <img
            src={`/assets/modelY/${modelBlackNova[currentIndex]}`}
            className="z-10 object-contain"
          />
        )}
        {silver && nova && (
          <img
            src={`/assets/modelY/${modelSilverNova[currentIndex]}`}
            className="z-10 object-contain"
          />
        )}
        {red && nova && (
          <img
            src={`/assets/modelY/${modelRedNova[currentIndex]}`}
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
      <div className="flex flex-col items-center z-10 w-full model-y">
        <p className="text-2xl font-bold">Model Y</p>
        <div className="flex w-full justify-center items-center text-xs">
          <img src="/assets/model3/grok-icon.webp" className="w-4 h-4" />
          <p>Grok AI now available.</p>
          <a href="#" className="underline opacity-[0.8] hover:opacity-[1]">
            Learn more
          </a>
        </div>
        <div className="flex justify-between w-[80%] text-sm mt-4">
          <div className="text-center">
            <p>
              {first && `357mi`} {second && `357mi`} {third && `357mi`}
            </p>
            <p className="text-gray-800 dark:text-white-200 dark:text-gray-800 text-xs">
              Range (EPA est.)
            </p>
          </div>
          <div className="text-center">
            <p>
              {first && `125mph`} {second && `125mph`} {third && `125mph`}
            </p>
            <p className="text-gray-800 dark:text-white-200 dark:text-gray-800 text-xs">
              Top Speed
            </p>
          </div>
          <div className="text-center">
            <p>
              {first && `5.4sec`} {second && `5.4sec`} {third && `5.4sec`}
            </p>
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
            className={`flex justify-between w-full h-12 border opacity-[0.8] rounded-xs text-xs h-8 items-center p-2 cursor-default ${
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
            <p>Long Range Rear-Wheel Drive</p>{" "}
            <p>
              {lease && `$299/mo`} {cash && `$34,990/mo`} {finance && `$669/mo`}
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
            <p>Long Range All-Wheel Drive</p>{" "}
            <p>
              {lease && `$399/mo`} {cash && `$37,490/mo`} {finance && `$747/mo`}
            </p>
          </div>
        </div>
        <div className="flex justify-between w-[80%] h-10 mt-4 bg-gray-100 rounded text-xs items-center dark:text-black">
          <a href="#" className="px-2">
            View and Compare Features
          </a>
          <ChevronRight className="text-black dark:text-black " />
        </div>
        <div className="grid grid-cols-1 w-[80%] text-xs mt-2">
          <p>Lease includes $7,500 incentive. Ends Sept 30.</p>
        </div>
        <div className="w-[80%] text-xs mt-2">
          <p className="opacity-[0.8]">$3,000 down, 36 mo, 10,000 miles</p>
          <a href="#" className="opacity-[0.8] underline hover:opacity-[1]">
            Edit Leasing
          </a>
        </div>
        <div className="w-[80%] flex justify-start mt-4">
          <a
            href="#"
            className="underline opacity-[0.8] hover:opacity-[1] text-xs"
          >
            Get Prequalified
          </a>
        </div>
        <div className="flex flex-col text-xs mt-4 w-[80%]">
          <div className="flex justify-start items-center opacity-[0.8]">
            <input type="checkbox" /> Include est. gas savings of $100 /mo
          </div>
        </div>
        <p className="text-xs opacity-[0.8] mt-12">
          {gray && `Included`} {white && `$1,000`} {blue && `$1,000`}{" "}
          {black && `$1,500`} {silver && `$2,000`} {red && `$2,000`}
        </p>
        <p className="text-sm mb-6">
          {gray && `Stealth Grey`} {white && `Pearl White Multi-Coat`}{" "}
          {blue && `Deep Blue Metallic`} {black && `Diamond Black`}{" "}
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
            src="/assets/model3/Paint_Blue.avif"
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
        <p className="text-xs opacity-[0.8] mt-12">
          {photon ? `Included` : `$1,500`}
        </p>
        <p className="text-sm mb-6">
          {photon ? `18'' Photon Wheels` : `19'' Nova Wheels`}
        </p>
        <div className="flex">
          <img
            src="/assets/model3/Wheel-Swatch_18-in.avif"
            className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
              photon && `border`
            }`}
            onClick={() => {
              setPhoton(true);
              setNova(false);
            }}
          />
          <img
            src="/assets/model3/Wheel-Swatch_19-in.avif"
            className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
              nova && `border`
            }`}
            onClick={() => {
              setPhoton(false);
              setNova(true);
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
            }}
          />
        </div>
        <p className="mt-16">Tow Package</p>
        <p className="text-xs w-[80%]">
          Tow up to 3,500 lbs with a class II steel tow bar
        </p>
        <div className="w-[80%]">
          <div
            className={`flex justify-between text-xs h-8 items-center px-2 opacity-[0.8] border rounded mt-4 ${
              towHitch && `border-2 border-black-400 bg-gray-100`
            }`}
            onClick={() => setTowHitch((prev) => !prev)}
          >
            <div className="flex">
              <input type="checkbox" className="mr-2" /> <p>Tow Hitch</p>
            </div>{" "}
            <p>$1000</p>
          </div>
        </div>
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
          <div className="flex flex-col space-y-2 mt-6 text-xs w-[80%] opacity-[0.8]">
            <div className="flex justify-between">
              <p>Model 3 Long Range Rear-Wheel Drive</p>
              <p>$42,490</p>
            </div>
            <div className="flex justify-between">
              <p>Stealth Grey Paint</p>
              <p>Included</p>
            </div>
            <div className="flex justify-between">
              <p>18’’ Photon Wheels</p>
              <p>Included</p>
            </div>
            <div className="flex justify-between">
              <p>Black Premium Interior</p>
              <p>Included</p>
            </div>
            <div className="flex justify-between">
              <p>Autopilot</p>
              <p>Included</p>
            </div>
            <div className="flex justify-between">
              <a href="#" className="underline hover:opacity -[1]">
                30-Day Premium Connectivity Trial
              </a>
              <p>Included</p>
            </div>
            <div className="flex justify-between">
              <p>30-Day Full Self-Driving (Supervised) Trial</p>
              <p>Included</p>
            </div>
            <div className="flex justify-between">
              <p>Vehicle Price</p>
              <p>$42,490</p>
            </div>
            <div className="flex justify-between">
              <p>Destination Fee</p>
              <p>$1,390</p>
            </div>
            <div className="flex justify-between">
              <p>Order Fee</p>
              <p>$250</p>
            </div>
          </div>
        )}
        <p
          className="text-xs opacity-[0.8] mt-6"
          onClick={() => setDetails((prev) => !prev)}
        >
          {!details && (
            <p className="flex hover:underline">
              Show Pricing Details <ChevronDown className="w-4 h-4" />
            </p>
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
