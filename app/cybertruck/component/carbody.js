"use client";
import { ChevronRight, Flag, X } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { useState, useRef } from "react";
import Payment from "@/app/payment/payment";
import { Orbitron } from "next/font/google";
import "../../style.css";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

export default function CarBody() {
  const refs = [useRef(null), useRef(null), useRef(null)];
  const [cash, setCash] = useState(false);
  const [lease, setLease] = useState(true);
  const [finance, setFinance] = useState(false);
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [gray, setGray] = useState(true);
  const [white, setWhite] = useState(false);
  const [core, setCore] = useState(true);
  const [cyber, setCyber] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [light, setLight] = useState(false);
  const [show, setShow] = useState(false);
  const [order, setOrder] = useState(false);
  const modelCore = [
    `${
      first
        ? `CT-Configurator-Hero-All-Wheel-Drive-20inch-Core-Desktop.avif`
        : `CT-Configurator-Hero-Cyberbeast-Desktop.avif`
    }`,
    "compositor.jpg",
    "compositor-1.jpg",
    "compositor-2.jpg",
    `${gray ? `compositor-3.png` : `compositor-7.png`}`,
    "",
    "CT-Configurator-Towing-Desktop.avif",
    "powershare_home_backup_02.avif",
  ];
  const modelCyber = [
    `${
      first
        ? `CT-Configurator-Hero-All-Wheel-Drive-20inch-Cyber-Desktop.avif`
        : `CT-Configurator-Hero-Cyberbeast-Desktop.avif`
    }`,
    "compositor-4.jpg",
    "compositor-5.jpg",
    "compositor-6.jpg",
    `${gray ? `compositor-3.png` : `compositor-7.png`}`,
    "",
    "CT-Configurator-Towing-Desktop.avif",
    "powershare_home_backup_02.avif",
  ];

  const [selfDriving, setSelfDriving] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [details, setDetails] = useState(false);
  const totalPrice =
    (lease && core && first ? 699 : 0) +
    (lease && core && second ? 1499 : 0) +
    (cash && first ? 79990 : 0) +
    (cash && second ? 144990 : 0) +
    (finance && first ? 1367 : 0) +
    (finance && second ? 1989 : 0) +
    (light ? 65 : 0);

  const handleInput = () => {
    setError(null);
    if (!input) {
      setError("Required");
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < modelCore.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : modelCore.length - 1));
  };

  return (
    <div
      className={`relative flex [@media(max-width:500px)]:flex-col [@media(min-width:500px)]:mt-8  [@media(min-width:500px)]:pt-16 ${orbitron.className} w-screen`}
    >
      <div
        className={`[@media(min-width:500px)]: [@media(min-width:500px)]:w-[50%] [@media(min-width:800px)]:w-[60%]`}
      >
        <div className="sticky z-20 [@media(max-width:500px)]:top-0 [@media(min-width:500px)]:top-[100px]  w-full">
          {core && currentIndex !== 5 && (
            <div
              className={` z-10 h-[400px] bg-center bg-cover bg-no-repeat w-full`}
              style={{
                backgroundImage: `url(/assets/cybertruck/${modelCore[currentIndex]})`,
              }}
            ></div>
          )}
          {currentIndex === 5 && (
            <video
              className="w-full h-[400px] object-cover rounded-lg"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/assets/cybertruck/Accessories shown sold separately.mp4" />
            </video>
          )}
          {cyber && currentIndex !== 5 && (
            <div
              className={` z-10 h-[400px] bg-center bg-cover bg-no-repeat `}
              style={{
                backgroundImage: `url(/assets/cybertruck/${modelCyber[currentIndex]})`,
              }}
            ></div>
          )}

          <ChevronLeft
            className="arrow w-8 h-8 p-2 rounded bg-gray-200 text-black absolute top-[100px] left-0 z-40 top-[150px] cursor-pointer hover:bg-gray-100"
            onClick={handlePrev}
          />
          <ChevronRight
            className="arrow w-8 h-8 p-2 rounded bg-gray-200 text-black absolute top-[100px] right-0 z-40 top-[150px] cursor-pointer hover:bg-gray-100"
            onClick={handleNext}
          />
        </div>
      </div>
      {!show && (
        <div className="z-50 flex [@media(min-width:500px)]:hidden text-xs justify-between items-center h-12 w-full fixed bottom-0">
          <div className="flex ml-4">
            <div>
              {" "}
              <p>$699/mo</p>
              <p>Est. Lease</p>
            </div>
            <div>
              {!show && (
                <ChevronDown
                  className="text-black dark:text-black"
                  onClick={() => setShow(true)}
                />
              )}
            </div>
          </div>

          <button className="bg-blue-500 rounded-xs w-[150px] h-8 text-white mr-4 cursor-pointer hover:bg-blue-600">
            Order Now
          </button>
        </div>
      )}
      {show && (
        <div className="flex flex-col items-center relative z-30 bg-white [@media(min-width:500px)]:hidden [@media(max-width:500px)]:absolute top-0 [@media(min-width:900px)]:w-[30%] [@media(min-width:500px)]:w-[50%] [@media(max-width:500px)]:w-[100%]">
          <div className="absolute top-0 right-0 h-[100vh]">
            <X className="sticky top-5" onClick={() => setShow(false)} />
          </div>
          <p className="text-2xl font-bold">Financing Options</p>
          <div className="relative w-[90%] mt-4 mb-4">
            <input
              type="text"
              placeholder="Enter Delivery ZIP"
              onChange={(e) => setInput(e.target.value)}
              required
              className={`w-full h-8 text-xs border rounded-xs focus:border-blackfocus:outline-none ${
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
          <div className="flex justify-between w-[90%] text-xs mt-4 border-b mb-4">
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
          <div className="flex flex-col w-[90%]">
            <div>
              <p className="font-bold flex text-2xl items-center h-4">
                {lease && `$769`} {finance && `$1,367`} {cash && `$79,990`}
                <p className="text-lg opacity-[0.8]">/mo est.</p>
              </p>
              {!cash && (
                <a
                  href="#"
                  className="text-xs opacity-[0.8] underline hover:opacity-[1]"
                >
                  Get Prequalified
                </a>
              )}
              {cash && (
                <div className="w-[90%] mt-16">
                  <p>Partnership Programs</p>
                  <p className="text-xs ">Verify before ordering.</p>
                  <p className="mt-4">
                    Military, First Responder, Teacher and Student Purchase
                    Program
                  </p>
                  <div className="text-xs flex">
                    <p>$500 off purchase price</p>
                    <a href="#" className="ml-2 underline">
                      Verify Now
                    </a>
                  </div>
                  <p className="mt-4">Potential Savings After Delivery</p>
                  <p className="text-xs">$8,000 Est. 5-Year Gas Savings</p>
                </div>
              )}
            </div>
          </div>
          {!cash && (
            <div className="w-[90%]">
              <div className="w-[90%] flex justify-between mt-4">
                <div className="w-[45%] border border-black/30 flex flex-col justify-center p-2">
                  <p className="text-xs">Down Payment</p>
                  <p>$5000</p>
                </div>
                <div className="w-[45%] border border-black/30 flex flex-col justify-center p-2">
                  <p className="text-xs ml-[5px]">Term</p>
                  <label>
                    <select className="w-full">
                      <option>36 months</option>
                      <option>24 months</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="w-[90%] mt-4 border border-black/30 flex flex-col justify-center p-2">
                <p className="text-xs ml-[5px]">Annual Miles</p>
                <label>
                  <select className="w-full">
                    <option>10,000 miles</option>
                    <option>12,000 miles</option>
                    <option>15,000 miles</option>
                  </select>
                </label>
              </div>
              <div className="w-[90%]">
                <div className="w-full flex mt-4">
                  <input type="checkbox" className="mr-2" />
                  <p className="text-xs"> $133 /mo Est. Gas Savings</p>
                </div>
                <a
                  href="#"
                  className="underline opacity-[0.8] hover:opacity-[1] text-xs"
                >
                  Customize
                </a>
              </div>
              <div className="border-t border-black/30 w-[90%] mt-4"></div>
              <div className="w-[90%] flex flex-col text-xs mt-4">
                <div className="flex justify-between">
                  <p>Due at Signing</p>
                  <p>$6,394</p>
                </div>
                <div className="text-xs flex">
                  <p className="opacity-[0.8]">(excludes taxes & fees)</p>
                  <a
                    href="#"
                    className="text-xs underline opacity-[0.8] hover:opacity-[1] ml-[2px]"
                  >
                    View Breakdown
                  </a>
                </div>
              </div>
              <div className="w-[90%] flex flex-col text-xs mt-4">
                <p>Partnership Programs</p>
                <p className="opacity-[0.8]">
                  Verify before ordering. Only one program applies.
                </p>
              </div>
              <div className="w-[90%] flex flex-col text-xs mt-4">
                <div className="flex">
                  <p>
                    Military,First Responder,Teacher and Student Purchase
                    Program
                  </p>
                </div>
                <div className="text-xs flex">
                  <p className="opacity-[0.8]">$1,000 off purchase price</p>
                  <a
                    href="#"
                    className="text-xs underline opacity-[0.8] hover:opacity-[1] ml-[2px]"
                  >
                    Verify Now
                  </a>
                </div>
              </div>
              <div className="w-[90%] flex flex-col text-xs mt-4">
                <div className="flex">
                  <p>Lyft Driver Purchase Program</p>
                </div>
                <div className="text-xs flex">
                  <p className="opacity-[0.8]">
                    $1,000 Tesla Credit and $1,000 cash from Lyft
                  </p>
                  <a
                    href="#"
                    className="text-xs underline opacity-[0.8] hover:opacity-[1] ml-[2px]"
                  >
                    Verify Now
                  </a>
                </div>
              </div>
              <div className="w-[90%] text-xs opacity-[0.8] mt-4">
                These are estimated monthly payments if you participate in Tesla
                leasing. These estimates are subject to change and contingent on
                lease approval, available interest rates, and other factors. The
                calculator does not include taxes or &quot; fees, however you
                can see estimated values when switching on the Include Est.
                Taxes and Fees&quot; option. Taxes and fees listed are estimates
                only, subject to change, and may not be accurate to you,
                depending on factors like your registration location. Your
                applicable taxes and fees will be confirmed for you closer to
                time of delivery. Early termination fees apply. Fees may be
                charged for excessive wear plus any overage of mileage at a rate
                of $0.25 per mile. Late payments will incur a 5% fee. Lease does
                not include maintenance or insurance. Security deposit not
                required. Complete terms will be included in Motor Vehicle Lease
                Agreement.
              </div>
              <div className="w-[90%] text-xs opacity-[0.8] mt-4">
                *Due at signing amount includes your selected downpayment
                ($5,000), first month&apos;s payment ($699), and acquisition fee
                ($695).
              </div>
              <div className="w-[90%] text-xs opacity-[0.8] mt-4">
                Monthly lease payment already includes the $7,500 Tesla leasing
                incentive, which is subject to change or end at any time. Order
                does not guarantee eligibility. Must take delivery on or prior
                to September 30.
              </div>
              <div className="w-[90%] text-xs opacity-[0.8] mt-4">
                2025.**Lease vehicles are subject to a $395 disposition fee at
                return. Option to purchase for $53,290 plus applicable taxes and
                fees, and purchase fee of up to $350 subject to the terms in
                lease agreement. Purchase option may not be available in IA, LA
                or where prohibited by state law.
              </div>
              <div className="w-[90%] text-xs opacity-[0.8] mt-4">
                Tesla leasing is currently available in AL, AK, AZ, CA, CO, CT,
                DC, DE, FL, GA, HI, IA, ID, IL, IN, KS, KY, LA, MA, MD, ME, MI,
                MN, MO, MS, MT, NC, ND, NH, NJ, NM, NV, NY, OH, OR, PA, RI, SC,
                SD, TN, TX, UT, VA, VT, WA, WV, WY.
              </div>
            </div>
          )}
        </div>
      )}
      <div className="flex flex-col cyber items-center z-10 [@media(min-width:500px)]:w-[50%]">
        <p className="text-2xl font-bold">CYBERTRUCK</p>
        <div className="flex w-full justify-center items-center text-xs">
          <img src="/assets/model3/grok-icon.webp" className="w-4 h-4" />
          <p>Grok AI now available.</p>
          <a href="#" className="underline opacity-[0.8] hover:opacity-[1]">
            Learn more
          </a>
        </div>
        <div className="flex justify-between w-[90%] text-sm mt-4">
          <div className="text-center">
            <p>
              {first && `325mi`} {second && `320mi`}
            </p>
            <p className="text-gray-800 dark:text-white-200 dark:text-gray-800 text-xs">
              Range (est.)
            </p>
          </div>
          <div className="text-center">
            <p>
              {first && `11,000lbs`} {second && `11,000lbs`}
            </p>
            <p className="text-gray-800 dark:text-white-200 dark:text-gray-800 text-xs">
              Towing capacity
            </p>
          </div>
          <div className="text-center">
            <p>
              {first && `4.1sec`} {second && `4.6sec`}
            </p>
            <p className="text-gray-800 dark:text-white-200 dark:text-gray-800 text-xs">
              0-60 mph
            </p>
          </div>
        </div>
        <div className="flex justify-between w-[90%] text-xs mt-4 border-b mb-4">
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
        <div className="flex flex-col w-[90%]">
          <div
            className={`flex justify-between w-full h-12 border opacity-[0.8] rounded-xs text-xs h-8 items-center p-2 cursor-default ${
              first
                ? `bg-gray-100 dark:bg-gray-100 dark:text-black opacity-[1] font-bold`
                : ``
            }`}
            onClick={() => {
              setFirst(true);
              setSecond(false);
            }}
          >
            <p>All-Wheel Drive</p>{" "}
            <p>
              {lease && `$699/mo`} {cash && `$72,490/mo`}{" "}
              {finance && `$1,158/mo`}
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
            }}
          >
            <p>Cyberbeast</p>{" "}
            <p>
              {lease && `$1,499/mo`} {cash && `$114,990/mo`}{" "}
              {finance && `$1,989/mo`}
            </p>
          </div>
        </div>
        <div className="flex w-[90%] h-8 mt-4 bg-gray-100 rounded text-xs items-center justify-between dark:text-black">
          <a href="#" className="ml-2">
            View and Compare Features
          </a>
          <ChevronRight className="text-black dark:text-black" />
        </div>
        <div className="flex flex-col text-xs mt-4">
          <p className="flex">
            Business tax deductions & credits available.{" "}
            <a
              href="#"
              className="underline opacity-[0.8] hover:opacity-[1] ml-[2px]"
            >
              {" "}
              Terms
            </a>
          </p>

          <div className="flex items-center opacity-[0.8] mt-2">
            <input type="checkbox" /> Include $7,500 of est. incentives
          </div>
          <div className="flex items-center opacity-[0.8] mt-2">
            {" "}
            <input type="checkbox" />
            Include est. 5-year gas savings of $8,000
          </div>
        </div>
        <p className="text-xs opacity-[0.8] mt-12">Included</p>
        <p>Cyberbeast Upgrade</p>
        <div className="w-[90%] mt-4">
          <ul className="text-xs list-disc opacity-[0.8] space-y-2 ml-2">
            <li>Includes All-Wheel Drive upgrades</li>
            <li>Tri-Motor All-Wheel Drive</li>
            <li>Performance Launch Mode</li>
            <li>Top Speed: 128mph</li>
            <li>Rear Torque Vectoring</li>
            <li>
              Premium Interior with Suede Textile Trim, Yacht Floor with
              Stainless Accents and Cyberbeast Cabin Graphic
            </li>
            <li>Laser-Etched Cerberus Badge</li>
          </ul>
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
                src="/assets/cybertruck/thumbnail_PSP_CT.avif"
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
        <p className=" mt-16">6’x4’ Truck Bed</p>
        <p className="text-xs opacity-[0.8] mt-2 mb-2">
          Composite bed that doesn’t need a liner
        </p>
        <div className="w-[90%] text-xs border-2 border-black/20 bg-gray-200 px-2 py-4">
          <div className="flex justify-between mb-2">
            <p>Premium Bed Package</p>
            <p>Included</p>
          </div>
          <div className="opacity-[0.8] text-xs space-y-[3px]">
            <p>Motorized Hardtop Tonneau Cover</p>
            <p>Gear Locker, Under Bed</p>
            <p>120V & 240V Outlets</p>
            <p>Full Lenght Bed Lumps</p>
          </div>
        </div>
        <p className="mt-16">Towing</p>
        <p className="text-xs opacity-[0.8] mt-2 mb-2">
          High strength, Class IV steel tow bar
        </p>
        <div className="w-[90%] text-xs border-2 border-black/20 bg-gray-200 px-2 py-4">
          <div className="flex justify-between mb-2">
            <p>Tow Package</p>
            <p>Included</p>
          </div>
          <div className="opacity-[0.8] text-xs space-y-[3px]">
            <p>Towing Capacity upto 11,000 lbs</p>
            <p>Trailer controller</p>
            <p>Integrated trailer brake controller</p>
          </div>
        </div>
        <p className="text-xs opacity-[0.8] mt-12">
          {core ? `Included` : `$3,500`}
        </p>
        <p className="text-sm">
          {core ? `20’’ Core Wheels` : `20’’ Cyber Wheels`}
        </p>
        <p className="text-xs opacity-[0.8] mb-6">
          {core ? `With All-Season Tires` : `Integrated With All-Terrain Tires`}
        </p>
        <div className="flex">
          <img
            src="/assets/cybertruck/CoreWheel.avif"
            className={`w-16 h-16 p-2 cursor-pointer ${core && `border`}`}
            onClick={() => {
              setCore(true);
              setCyber(false);
            }}
          />
          <img
            src="/assets/cybertruck/CyberWheel.avif"
            className={` w-16 h-16 p-2 cursor-pointer ${cyber && `border`}`}
            onClick={() => {
              setCore(false);
              setCyber(true);
            }}
          />
        </div>
        <p className="text-xs opacity-[0.8] mt-4">
          {core ? `Range (est.) : 325mi` : `Range (est.) : 314mi`}
        </p>
        <p className="text-xs opacity-[0.8] mt-12">
          {gray ? `Included` : `$2,000`}
        </p>
        <p>{gray ? `Tactical Grey Décor` : `White Décor`}</p>
        <div className="flex">
          <img
            src="assets/cybertruck/int_grey.avif"
            className={`w-16 h-16 p-2 cursor-pointer ${gray && `border`}`}
            onClick={() => {
              setCurrentIndex(4);
              setGray(true);
              setWhite(false);
            }}
          />
          <img
            src="assets/cybertruck/int_white.avif"
            className={`w-16 h-16 p-2 cursor-pointer ${white && `border`}`}
            onClick={() => {
              setCurrentIndex(4);
              setGray(false);
              setWhite(true);
            }}
          />
        </div>
        <button className="bg-gray-100 rounded text-xs mt-4 w-[30%] h-6 dark:text-black">
          Learn More
        </button>
        <p className="w-[90%] text-center mt-16 mb-4">
          Full Self-Driving (Supervised)
        </p>
        <div className="w-full text-center text-xs mb-4 opacity-[0.8]">
          <p>
            Your car will be able to drive itself almost anywhere with minimal
            driver intervention
          </p>
        </div>
        <div
          className={`flex justify-between border w-[90%] text-xs px-2 py-4 rounded dark:text-black ${
            selfDriving
              ? `opacity-[1] bg-gray-100 font-bold`
              : `opacity-[0.8] bg-white`
          }`}
        >
          <input
            type="checkbox"
            onChange={() => setSelfDriving((prev) => !prev)}
          />
          <p>Full Self-Driving (Supervised)</p> <p>$8,000</p>
        </div>
        <p className="text-center text-xs opacity-[0.8] mb-16 w-[90%] mt-2">
          Currently enabled features require active driver supervision and do
          not make the vehicle autonomous. The activation and use of these
          features are dependent on development and regulatory approval, which
          may take longer in some jurisdictions.
        </p>
        <p className="mb-4">Powershare Bundles</p>
        <p className="text-xs text-center opacity-[0.8] w-[90%]">
          Share power from Cybertruck
        </p>
        <p className="text-xs text-center opacity-[0.8] w-[90%] text-justify mt-6">
          *Installation required. Contact a certified installer to get a quote.
          Estimate based on 30 kWh energy use per day. Results may vary based on
          your actual energy use. 11.5 kW is maximum.
        </p>
        <p className="text-xs text-center opacity-[0.8] w-[90%] text-justify mt-6">
          **Powershare Outlet Adapter only compatible with Cybertruck, and
          Powershare enabled Mobile Chargers.
        </p>
        <button className="bg-gray-100 rounded text-xs mt-4 w-[30%] h-6 dark:text-black">
          Learn More
        </button>
        <div className="relative text-center mt-16">
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
          <div className="flex flex-col space-y-2 mt-6 text-xs w-[90%] opacity-[0.8]">
            <div className="flex justify-between">
              <p>Cybertruck All-Wheel Drive</p>
              <p>$79,990</p>
            </div>
            <div className="flex justify-between">
              <p>20&quot; Core Wheels with 35&quot; Tires</p>
              <p>Included</p>
            </div>
            <div className="flex justify-between">
              <p>Tow Package</p>
              <p>Included</p>
            </div>
            <div className="flex justify-between">
              <p>White Décor</p>
              <p>$2,000</p>
            </div>
            <div className="flex justify-between">
              <p>Traffic-Aware Cruise Control</p>
              <p>Included</p>
            </div>
            <div className="flex justify-between">
              <a href="#" className="underline hover:opacity -[1]">
                Pay-as-you-go Supercharging
              </a>
              <p>Included</p>
            </div>
            <div className="flex justify-between">
              <p>1-Year Premium Connectivity Trial</p>
              <p>Included</p>
            </div>
            <div className="flex justify-between">
              <p>30-Day Full Self-Driving (Supervised) Trial</p>
              <p>Included</p>
            </div>
            <div className="flex justify-between">
              <p>Vehicle Price</p>
              <p>$81,990</p>
            </div>
            <div className="flex justify-between">
              <p>Destination Fee</p>
              <p>$1,995</p>
            </div>
            <div className="flex justify-between">
              <p>Order Fee</p>
              <p>$250</p>
            </div>
            <div className="flex justify-between">
              <p>Est. Purchase Price</p>
              <p>$84,235</p>
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
        <div className="flex justify-between font-bold w-[90%] mt-6">
          <p>Est. Lease Payment</p> <p>${totalPrice}/mo</p>
        </div>
        <p className="text-xs opacity-[0.8] text-start w-[90%]">
          $3,000 down, 24 mo, 10,000 miles
        </p>
        <a
          href="#"
          className="text-xs opacity-[0.8] hover:opacity-[1] underline w-[90%] text-start mt-2"
        >
          Edit Leasing
        </a>
        <div className="flex justify-between font-bold w-[90%] mt-6">
          <p>Due Today</p>
          <p>$250</p>
        </div>
        <p className="text-xs opacity-[0.8] text-start w-[90%]">
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
