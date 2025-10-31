"use client";
import { ChevronRight, Flag } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { useState, useRef } from "react";
import Payment from "@/app/payment/payment";

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
  const [pherihelix, setPherihelix] = useState(true);
  const [machina, setMachina] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [interiorBlack, setInteriorBlack] = useState(true);
  const [interiorWhite, setInteriorWhite] = useState(false);
  const [interiorCream, setInteriorCream] = useState(false);
  const [towHitch, setTowHitch] = useState(false);
  const [fiveSeat, setFiveSeat] = useState(true);
  const [sixSeat, setSixSeat] = useState(false);
  const [sevenSeat, setSevenSeat] = useState(false);
  const [order, setOrder] = useState(false);

  const modelGrayPherihelix = [
    "compositor (6).jpg",
    "compositor (7).jpg",
    "compositor (8).jpg",
    "compositor (9).jpg",
    `${
      interiorBlack
        ? `compositor (10).jpg`
        : interiorWhite
        ? `compositor (55).jpg`
        : interiorCream && `compositor (56).jpg`
    }`,
  ];
  const modelWhitePherihelix = [
    "compositor (15).jpg",
    "compositor (16).jpg",
    "compositor (17).jpg",
    "compositor (18).jpg",
    `${
      interiorBlack
        ? `compositor (10).jpg`
        : interiorWhite
        ? `compositor (55).jpg`
        : interiorCream && `compositor (56).jpg`
    }`,
  ];

  const modelBluePherihelix = [
    "compositor (31).jpg",
    "compositor (32).jpg",
    "compositor (33).jpg",
    "compositor (34).jpg",
    `${
      interiorBlack
        ? `compositor (10).jpg`
        : interiorWhite
        ? `compositor (55).jpg`
        : interiorCream && `compositor (56).jpg`
    }`,
  ];

  const modelBlackPherihelix = [
    "compositor (23).jpg",
    "compositor (24).jpg",
    "compositor (25).jpg",
    "compositor (26).jpg",
    `${
      interiorBlack
        ? `compositor (10).jpg`
        : interiorWhite
        ? `compositor (55).jpg`
        : interiorCream && `compositor (56).jpg`
    }`,
  ];

  const modelSilverPherihelix = [
    "compositor (47).jpg",
    "compositor (48).jpg",
    "compositor (49).jpg",
    "compositor (50).jpg",
    `${
      interiorBlack
        ? `compositor (10).jpg`
        : interiorWhite
        ? `compositor (55).jpg`
        : interiorCream && `compositor (56).jpg`
    }`,
  ];

  const modelRedPherihelix = [
    "compositor (39).jpg",
    "compositor (40).jpg",
    "compositor (41).jpg",
    "compositor (42).jpg",
    `${
      interiorBlack
        ? `compositor (10).jpg`
        : interiorWhite
        ? `compositor (55).jpg`
        : interiorCream && `compositor (56).jpg`
    }`,
  ];

  const modelGrayMachina = [
    "compositor (11).jpg",
    "compositor (12).jpg",
    "compositor (13).jpg",
    "compositor (14).jpg",
    `${
      interiorBlack
        ? `compositor (10).jpg`
        : interiorWhite
        ? `compositor (55).jpg`
        : interiorCream && `compositor (56).jpg`
    }`,
  ];

  const modelWhiteMachina = [
    "compositor (19).jpg",
    "compositor (20).jpg",
    "compositor (21).jpg",
    "compositor (22).jpg",
    `${
      interiorBlack
        ? `compositor (10).jpg`
        : interiorWhite
        ? `compositor (55).jpg`
        : interiorCream && `compositor (56).jpg`
    }`,
  ];

  const modelBlueMachina = [
    "compositor (35).jpg",
    "compositor (36).jpg",
    "compositor (37).jpg",
    "compositor (38).jpg",
    `${
      interiorBlack
        ? `compositor (10).jpg`
        : interiorWhite
        ? `compositor (55).jpg`
        : interiorCream && `compositor (56).jpg`
    }`,
  ];

  const modelBlackMachina = [
    "compositor (27).jpg",
    "compositor (28).jpg",
    "compositor (29).jpg",
    "compositor (30).jpg",
    `${
      interiorBlack
        ? `compositor (10).jpg`
        : interiorWhite
        ? `compositor (55).jpg`
        : interiorCream && `compositor (56).jpg`
    }`,
  ];

  const modelSilverMachina = [
    "compositor (51).jpg",
    "compositor (52).jpg",
    "compositor (53).jpg",
    "compositor (54).jpg",
    `${
      interiorBlack
        ? `compositor (10).jpg`
        : interiorWhite
        ? `compositor (55).jpg`
        : interiorCream && `compositor (56).jpg`
    }`,
  ];

  const modelRedMachina = [
    "compositor (43).jpg",
    "compositor (44).jpg",
    "compositor (45).jpg",
    "compositor (46).jpg",
    `${
      interiorBlack
        ? `compositor (10).jpg`
        : interiorWhite
        ? `compositor (55).jpg`
        : interiorCream && `compositor (56).jpg`
    }`,
  ];

  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [details, setDetails] = useState(false);
  const totalPrice =
    (lease
      ? (gray && first && pherihelix ? 1879 : 0) +
        (gray && first && machina ? 2000 : 0) +
        (gray && second && pherihelix ? 2030 : 0) +
        (gray && second && machina ? 1911 : 0) +
        (white && first && pherihelix ? 2111 : 0) +
        (white && first && machina ? 1990 : 0) +
        (white && second && pherihelix ? 1899 : 0) +
        (white && second && machina ? 2130 : 0) +
        (blue && first && pherihelix ? 2030 : 0) +
        (blue && second && pherihelix ? 2050 : 0) +
        (blue && first && machina ? 1918 : 0) +
        (blue && second && machina ? 1977 : 0) +
        (black && first && pherihelix ? 2029 : 0) +
        (black && second && pherihelix ? 2020 : 0) +
        (black && first && machina ? 2100 : 0) +
        (black && second && machina ? 2110 : 0) +
        (silver && first && pherihelix ? 2000 : 0) +
        (silver && second && pherihelix ? 1890 : 0) +
        (silver && first && machina ? 2110 : 0) +
        (silver && second && machina ? 2030 : 0) +
        (red && first && pherihelix ? 2000 : 0) +
        (red && second && pherihelix ? 1990 : 0) +
        (red && first && machina ? 2020 : 0) +
        (red && second && machina ? 2090 : 0)
      : 0) +
    (cash && first ? 101490 : 0) +
    (cash && second ? 120990 : 0) +
    (finance && first ? 1435 : 0) +
    (finance && second ? 1656 : 0) +
    (towHitch ? 1000 : 0);

  const handleInput = () => {
    setError(null);
    if (!input) {
      setError("Required");
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < modelGrayPherihelix.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : modelGrayPherihelix.length - 1
    );
  };

  return (
    <div className="relative flex [@media(max-width:500px)]:flex-col [@media(min-width:500px)]:mt-8  [@media(min-width:500px)]:pt-16">
      <div className={`h-[500vh]`}>
        <div className="sticky z-20 [@media(max-width:500px)]:top-0 [@media(min-width:500px)]:top-[100px]">
          {gray && pherihelix && (
            <img
              src={`/assets/modelX/${modelGrayPherihelix[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {red && pherihelix && (
            <img
              src={`/assets/modelX/${modelRedPherihelix[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {blue && pherihelix && (
            <img
              src={`/assets/modelX/${modelBluePherihelix[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {silver && pherihelix && (
            <img
              src={`/assets/modelX/${modelSilverPherihelix[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {black && pherihelix && (
            <img
              src={`/assets/modelX/${modelBlackPherihelix[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {white && pherihelix && (
            <img
              src={`/assets/modelX/${modelWhitePherihelix[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {gray && machina && (
            <img
              src={`/assets/modelX/${modelGrayMachina[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {white && machina && (
            <img
              src={`/assets/modelX/${modelWhiteMachina[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {blue && machina && (
            <img
              src={`/assets/modelX/${modelBlueMachina[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {black && machina && (
            <img
              src={`/assets/modelX/${modelBlackMachina[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {silver && machina && (
            <img
              src={`/assets/modelX/${modelSilverMachina[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {red && machina && (
            <img
              src={`/assets/modelX/${modelRedMachina[currentIndex]}`}
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
      <div className="flex flex-col items-center z-10 [@media(max-width:500px)]:absolute top-[350px]">
        <p className="text-2xl font-bold">Model X</p>
        <div className="flex justify-between w-[80%] text-sm mt-4">
          <div className="text-center">
            <p>352mi</p>
            <p className="text-gray-800 dark:text-white-200 dark:text-gray-800 text-xs">
              Range (EPA est.)
            </p>
          </div>
          <div className="text-center">
            <p>149mph</p>
            <p className="text-gray-800 dark:text-white-200 dark:text-gray-800 text-xs">
              Top Speed
            </p>
          </div>
          <div className="text-center">
            <p>3.8sec</p>
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
              {lease && `$1,879/mo`} {cash && `$99,990/mo`}{" "}
              {finance && `$1,435/mo`}
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
              {lease && `$2,030/mo`} {cash && `$114,990/mo`}{" "}
              {finance && `$1,656/mo`}
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
            pherihelix ? `Included` : `$5,500`
          }`}</p>
        </div>

        <p className="text-sm mb-6">
          {pherihelix ? `20'' Pherihelix Wheels` : `22" Machina Wheels`}
        </p>
        <div className="flex">
          <img
            src="/assets/modelX/20-Perihelix-Wheels.avif"
            className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
              pherihelix && `border`
            }`}
            onClick={() => {
              setPherihelix(true);
              setMachina(false);
            }}
          />
          <img
            src="/assets/model3/Wheel-Swatch_19-in.avif"
            className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
              machina && `border`
            }`}
            onClick={() => {
              setPherihelix(false);
              setMachina(true);
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
        <div className="w-[90%] mt-6">
          <div
            className={`flex justify-between h-12 w-full border opacity-[0.8] rounded-xs mt-2 text-xs h-8 items-center p-2 cursor-default ${
              fiveSeat
                ? `bg-gray-100 dark:bg-gray-100 dark:text-black opacity-[1] font-bold`
                : ``
            }`}
            onClick={() => {
              setFiveSeat(true);
              setSixSeat(false);
              setSevenSeat(false);
            }}
          >
            <p>Five Seat Interior</p>
            <p>Included</p>
          </div>
          <div
            className={`flex justify-between w-full h-12 border opacity-[0.8] rounded-xs mt-2 text-xs h-8 items-center p-2 cursor-default ${
              sixSeat
                ? `bg-gray-100 dark:bg-gray-100 dark:text-black opacity-[1] font-bold`
                : ``
            }`}
            onClick={() => {
              setFiveSeat(false);
              setSixSeat(true);
              setSevenSeat(false);
            }}
          >
            <p>Six Seat Interior</p>
            <p>$6,500</p>
          </div>
          <div
            className={`flex justify-between w-full h-12 border opacity-[0.8] rounded-xs mt-2 text-xs h-8 items-center p-2 cursor-default ${
              sevenSeat
                ? `bg-gray-100 dark:bg-gray-100 dark:text-black opacity-[1] font-bold`
                : ``
            }`}
            onClick={() => {
              setFiveSeat(false);
              setSixSeat(false);
              setSevenSeat(true);
            }}
          >
            <p>Seven Seat Interior</p>
            <p>$3,500</p>
          </div>
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
