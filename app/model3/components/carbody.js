"use client";
import { ChevronRight, Flag } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/app/lib/supabaseClient";

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
  const [light, setLight] = useState(false);
  const [consoleTrays, setConsoleTrays] = useState(false);
  const [interiorLinears, setInteriorLinears] = useState(false);
  const [roofRack, setRoofRack] = useState(false);
  const [order, setOrder] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expireMonth, setExpireMonth] = useState("");
  const [expireYear, setExpireYear] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [billingZipCode, setBillingZipCode] = useState("");
  const [deliveryZipCode, setDeliveryZipCode] = useState("");
  const [submitOrder, setSubmitOrder] = useState(false);
  const [errorOnOrder, setErrorOnOrder] = useState(null);

  const router = useRouter();
  const modelGrayPhoton = [
    "compositor.jpg",
    "compositor (8).jpg",
    "compositor (9).jpg",
    "compositor (5).jpg",
    `${interiorBlack ? `compositor (14).jpg` : `compositor (56).jpg`}`,
  ];
  const modelWhitePhoton = [
    "compositor (10).jpg",
    "compositor (11).jpg",
    "compositor (12).jpg",
    "compositor (13).jpg",
    `${interiorBlack ? `compositor (14).jpg` : `compositor (56).jpg`}`,
  ];

  const modelBluePhoton = [
    "compositor (15).jpg",
    "compositor (16).jpg",
    "compositor (17).jpg",
    "compositor (18).jpg",
    `${interiorBlack ? `compositor (14).jpg` : `compositor (56).jpg`}`,
  ];

  const modelBlackPhoton = [
    "compositor (20).jpg",
    "compositor (21).jpg",
    "compositor (22).jpg",
    "compositor (23).jpg",
    `${interiorBlack ? `compositor (14).jpg` : `compositor (56).jpg`}`,
  ];

  const modelSilverPhoton = [
    "compositor (24).jpg",
    "compositor (25).jpg",
    "compositor (26).jpg",
    "compositor (27).jpg",
    `${interiorBlack ? `compositor (14).jpg` : `compositor (56).jpg`}`,
  ];

  const modelRedPhoton = [
    "compositor (28).jpg",
    "compositor (29).jpg",
    "compositor (30).jpg",
    "compositor (31).jpg",
    `${interiorBlack ? `compositor (14).jpg` : `compositor (56).jpg`}`,
  ];

  const modelGrayNova = [
    "compositor (32).jpg",
    "compositor (33).jpg",
    "compositor (34).jpg",
    "compositor (35).jpg",
    `${interiorBlack ? `compositor (14).jpg` : `compositor (56).jpg`}`,
  ];

  const modelWhiteNova = [
    "compositor (36).jpg",
    "compositor (37).jpg",
    "compositor (38).jpg",
    "compositor (39).jpg",
    `${interiorBlack ? `compositor (14).jpg` : `compositor (56).jpg`}`,
  ];

  const modelBlueNova = [
    "compositor (40).jpg",
    "compositor (41).jpg",
    "compositor (42).jpg",
    "compositor (43).jpg",
    `${interiorBlack ? `compositor (14).jpg` : `compositor (56).jpg`}`,
  ];

  const modelBlackNova = [
    "compositor (44).jpg",
    "compositor (45).jpg",
    "compositor (46).jpg",
    "compositor (47).jpg",
    `${interiorBlack ? `compositor (14).jpg` : `compositor (56).jpg`}`,
  ];

  const modelSilverNova = [
    "compositor (48).jpg",
    "compositor (49).jpg",
    "compositor (50).jpg",
    "compositor (51).jpg",
    `${interiorBlack ? `compositor (14).jpg` : `compositor (56).jpg`}`,
  ];

  const modelRedNova = [
    "compositor (52).jpg",
    "compositor (53).jpg",
    "compositor (54).jpg",
    "compositor (55).jpg",
    `${interiorBlack ? `compositor (14).jpg` : `compositor (56).jpg`}`,
  ];

  const [selfDriving, setSelfDriving] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [home, setHome] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [details, setDetails] = useState(false);
  const totalPrice =
    (lease
      ? (gray && first && photon ? 316 : 0) +
        (gray && first && nova ? 324 : 0) +
        (gray && second && photon ? 519 : 0) +
        (gray && second && nova ? 528 : 0) +
        (gray && third && photon ? 699 : 0) +
        (gray && third && nova ? 699 : 0) +
        (white && first && photon ? 333 : 0) +
        (white && first && nova ? 358 : 0) +
        (white && second && photon ? 333 : 0) +
        (white && second && nova ? 567 : 0) +
        (white && third && photon ? 699 : 0) +
        (white && third && nova ? 699 : 0) +
        (blue && first && photon ? 316 : 0) +
        (blue && second && photon ? 519 : 0) +
        (blue && third && photon ? 699 : 0) +
        (blue && first && nova ? 341 : 0) +
        (blue && second && nova ? 548 : 0) +
        (blue && third && nova ? 699 : 0) +
        (black && first && photon ? 324 : 0) +
        (black && second && photon ? 528 : 0) +
        (black && third && photon ? 699 : 0) +
        (black && first && nova ? 350 : 0) +
        (black && second && nova ? 557 : 0) +
        (black && third && nova ? 699 : 0) +
        (silver && first && photon ? 333 : 0) +
        (silver && second && photon ? 538 : 0) +
        (silver && third && photon ? 699 : 0) +
        (silver && first && nova ? 358 : 0) +
        (silver && second && nova ? 567 : 0) +
        (silver && third && nova ? 699 : 0) +
        (red && first && photon ? 333 : 0) +
        (red && second && photon ? 538 : 0) +
        (red && third && photon ? 699 : 0) +
        (red && first && nova ? 358 : 0) +
        (red && second && nova ? 567 : 0) +
        (red && third && nova ? 699 : 0)
      : 0) +
    (cash && first ? 34990 : 0) +
    (cash && second ? 39990 : 0) +
    (cash && third ? 47490 : 0) +
    (finance && first ? 619 : 0) +
    (finance && second ? 709 : 0) +
    (finance && third ? 844 : 0) +
    (light ? 65 : 0) +
    (consoleTrays ? 35 : 0) +
    (interiorLinears ? 225 : 0) +
    (roofRack ? 400 : 0);

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
  const handleOrder = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    // if (!session) {
    //   router.push("/login");
    // }
    if (session) {
      setOrder(true);
    }
    setOrder(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorOnOrder(null);
    setSubmitOrder(true);
    let hasError = false;

    if (!firstName?.trim()) {
      setErrorOnOrder("First name is required.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!lastName?.trim()) {
      setErrorOnOrder("Last name is required.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!email?.trim()) {
      setErrorOnOrder("Email is required.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (email !== confirmEmail) {
      setErrorOnOrder("Emails do not match.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!phone?.trim()) {
      setErrorOnOrder("Phone number is required");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!cardName?.trim()) {
      setErrorOnOrder("Cardholder name is required.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!cardNumber?.trim()) {
      setErrorOnOrder("Card number is required.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!expireMonth) {
      setErrorOnOrder("Expiration month is required.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!expireYear) {
      setErrorOnOrder("Expiration year is required.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!securityCode?.trim()) {
      setErrorOnOrder("Security code is required.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!billingZipCode?.trim()) {
      setErrorOnOrder("Billing ZIP code is required.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!deliveryZipCode?.trim()) {
      setErrorOnOrder("Delivery ZIP code is required.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrorOnOrder("Please enter a valid email address.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!/^\d{16}$/.test(cardNumber)) {
      setErrorOnOrder("Card number must be 16 digits.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!/^\d{3,4}$/.test(securityCode)) {
      setErrorOnOrder("Invalid security code.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!/^\d{5}$/.test(billingZipCode)) {
      setErrorOnOrder("Invalid ZIP code.");
      hasError = true;
      setSubmitOrder(false);
    }

    if (!hasError) {
      setTimeout(() => {
        setSubmitOrder(false);
        alert("✅ Order placed successfully!");
      }, 500);
    }
  };

  return (
    <div className="relative flex max-[500px]:flex-col min-[500px]:mt-8 min-[500px]:pt-16 w-screen">
      <div className={`h-[500vh]`}>
        <div className="sticky z-20 max-[500px]:top-0 min-[500px]:top-[100px]">
          {gray && photon && (
            <img
              src={`/assets/model3/${modelGrayPhoton[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {red && photon && (
            <img
              src={`/assets/model3/${modelRedPhoton[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {blue && photon && (
            <img
              src={`/assets/model3/${modelBluePhoton[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {silver && photon && (
            <img
              src={`/assets/model3/${modelSilverPhoton[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {black && photon && (
            <img
              src={`/assets/model3/${modelBlackPhoton[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {white && photon && (
            <img
              src={`/assets/model3/${modelWhitePhoton[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {gray && nova && (
            <img
              src={`/assets/model3/${modelGrayNova[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {white && nova && (
            <img
              src={`/assets/model3/${modelWhiteNova[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {blue && nova && (
            <img
              src={`/assets/model3/${modelBlueNova[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {black && nova && (
            <img
              src={`/assets/model3/${modelBlackNova[currentIndex]}`}
              className="z-10 object-contain"
            />
          )}
          {silver && nova && (
            <img
              src={`/assets/model3/${modelSilverNova[currentIndex]}`}
              className="z-10 object-contain w-full absolute top-0"
            />
          )}
          {red && nova && (
            <img
              src={`/assets/model3/${modelRedNova[currentIndex]}`}
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
      <div className="flex flex-col items-center z-10 [@media(max-width:500px)]:absolute top-50">
        <p className="text-2xl font-bold">Model 3</p>
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
              {first && `357mi`} {second && `346mi`} {third && `298mi`}
            </p>
            <p className="text-gray-800 dark:text-white-200 dark:text-gray-800 text-xs">
              Range (EPA est.)
            </p>
          </div>
          <div className="text-center">
            <p>
              {first && `125mph`} {second && `125mph`} {third && `163mph`}
            </p>
            <p className="text-gray-800 dark:text-white-200 dark:text-gray-800 text-xs">
              Top Speed
            </p>
          </div>
          <div className="text-center">
            <p>
              {first && `4.9sec`} {second && `4.2sec`} {third && `2.9sec`}
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
              {lease && `$299/mo`} {cash && `$34,990/mo`} {finance && `$619/mo`}
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
              {lease && `$499/mo`} {cash && `$39,990/mo`} {finance && `$709/mo`}
            </p>
          </div>
          <div
            className={`flex justify-between w-full h-12 border opacity-[0.8] rounded-xs mt-2 text-xs h-8 items-center p-2 cursor-default ${
              third
                ? `bg-gray-100 dark:bg-gray-100 dark:text-black opacity-[1] font-bold`
                : ``
            }`}
            onClick={() => {
              setFirst(false);
              setSecond(false);
              setThird(true);
            }}
          >
            <p>Performance All Wheel Drive</p>{" "}
            <p>
              {lease && `$699/mo`} {cash && `$47,490/mo`} {finance && `$844/mo`}
            </p>
          </div>
        </div>
        <div className="flex w-[80%] mt-4 bg-gray-100 rounded text-xs items-center dark:text-black">
          <img
            src="/assets/model3/Model-3-Explore-Features.avif"
            className="w-[80px] h-[80px] rounded"
          />
          <a href="#">View and Compare Features</a>
        </div>
        <div className="flex flex-col text-xs mt-4">
          <div className="flex items-center opacity-[0.8]">
            <input type="checkbox" checked /> Include $7,500 Federal Tax credit
          </div>
          <div className="flex items-center opacity-[0.8]">
            {" "}
            <input type="checkbox" />
            Include est. 5-year gas savings of $5,000
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
            className={`rounded-full w-10 h-10 p-1 cursor-pointer cursor-pointer ${
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
        <p className="w-[80%] text-center mt-16 mb-4">
          Full Self-Driving (Supervised)
        </p>
        <div className="w-full text-center text-xs mb-4 opacity-[0.8]">
          <p>
            Your car will be able to drive itself almost anywhere with minimal
            driver intervention
          </p>
        </div>
        <div
          className={`flex justify-between border w-[80%] text-xs px-2 py-4 rounded dark:text-black ${
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
        <p className="text-center text-xs opacity-[0.8] mt-4 mb-4 w-[80%]">
          FSD (Supervised) purchase is not counted towards the $7,500 Federal
          Tax Credit price cap.
        </p>
        <p className="text-center text-xs opacity-[0.8] mb-16 w-[80%]">
          Currently enabled features require active driver supervision and do
          not make the vehicle autonomous. The activation and use of these
          features are dependent on development and regulatory approval, which
          may take longer in some jurisdictions.
        </p>
        <p className="mb-4">Charging</p>
        <p className="text-xs text-center opacity-[0.8] w-[80%]">
          Every Tesla includes access to the largest global Supercharging
          network
        </p>
        <div
          className={`relative flex w-[80%] border rounded mt-4 h-[110px] ${
            home && `border-2 border-black-400 bg-gray-100 text-black`
          }`}
        >
          <input
            type="checkbox"
            className="absolute top-2 left-2"
            onChange={() => setHome((prev) => !prev)}
          />
          <img
            src="/assets/model3/WC_ConfigV4.avif"
            className="w-[100px] h-[100px] mt-4"
          />
          <div className="text-xs mt-4">
            <p className="font-bold">
              $420 <br />
              Home Charger
            </p>
            <p className="opacity-[0.8]">
              Up to 44 mi range /hr,install required
            </p>
          </div>
        </div>

        <div
          className={`relative flex w-[80%] border rounded mt-4 h-[110px] ${
            mobile && `border-2 border-black-400 bg-gray-100 text-black`
          }`}
        >
          <input
            type="checkbox"
            className="absolute top-2 left-2"
            onChange={() => setMobile((prev) => !prev)}
          />
          <img
            src="/assets/model3/Powershare-Mobile-Connector-Configurator_transparent.avif"
            className="w-[80px] h-[80px] ml-4 mt-4"
          />
          <div className="text-xs mt-4 w-[40%] ml-6">
            <p className="font-bold">
              $300 <br />
              Mobile Charger
            </p>
            <p className="opacity-[0.8]">
              Up to 30 mi range /hr,plug into any outlet
            </p>
          </div>
        </div>
        <button className="bg-gray-100 rounded text-xs mt-4 w-[30%] h-6 dark:text-black">
          Learn More
        </button>
        <p className="mt-16">Accessories</p>
        <div className="w-[80%]">
          <div
            className={`flex justify-between text-xs h-8 items-center px-2 opacity-[0.8] border rounded mt-4 ${
              light && `border-2 border-black-400 bg-gray-100`
            }`}
            onClick={() => setLight((prev) => !prev)}
          >
            <div className="flex">
              <input type="checkbox" className="mr-2" />{" "}
              <p>Projection Lights </p>
            </div>{" "}
            <p>$65</p>
          </div>
          <div
            className={`flex justify-between text-xs h-8 items-center px-2 opacity-[0.8] border rounded mt-4 ${
              consoleTrays && `border-2 border-black-400 bg-gray-100`
            }`}
            onClick={() => setConsoleTrays((prev) => !prev)}
          >
            <div className="flex">
              <input type="checkbox" className="mr-2" />
              <p>Center Control Trays</p>
            </div>{" "}
            <p>$35</p>
          </div>
          <div
            className={`flex justify-between text-xs h-8 items-center px-2 opacity-[0.8] border rounded mt-4 ${
              interiorLinears && `border-2 border-black-400 bg-gray-100`
            }`}
            onClick={() => setInteriorLinears((prev) => !prev)}
          >
            <div className="flex">
              {" "}
              <input type="checkbox" className="mr-2" />
              <p>All-Wheather Interior Linears</p>
            </div>{" "}
            <p>$225</p>
          </div>
          <div
            className={`flex justify-between text-xs h-8 items-center px-2 opacity-[0.8] border rounded mt-4 ${
              roofRack && `border-2 border-black-400 bg-gray-100`
            }`}
            onClick={() => setRoofRack((prev) => !prev)}
          >
            <div className="flex">
              <input type="checkbox" className="mr-2" />
              <p>Roof Rack</p>
            </div>{" "}
            <p>$500</p>
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
            onClick={() => {
              handleOrder();
            }}
          >
            Order with Card
          </button>
        )}
        {order && (
          <form
            className="flex flex-col items-start w-[80%]"
            onSubmit={handleSubmit}
          >
            <p className="mt-4 font-bold mb-4">Enter Account Details</p>
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              className="mt-2 w-full bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              className="mt-2 w-full bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="mt-2 w-full bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="confirm-email">Confirm Email</label>
            <input
              type="email"
              id="confirm-email"
              className="mt-2 w-full bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
              onChange={(e) => setConfirmEmail(e.target.value)}
            />
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="phone"
              id="mobile"
              className="mt-2 w-full bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
              onChange={(e) => setPhone(e.target.value)}
            />
            <p className="text-xs">
              By proceeding, I authorize Tesla to contact me about this request
              as well as with more information about Tesla products, services
              and regional events via the contact information I provide. I
              understand calls or texts may use automatic or computer-assisted
              dialing or pre-recorded messages. Normal message and data rates
              apply. I can opt out at any time in the Tesla app or by
              unsubscribing. This is not required for purchase.
            </p>
            <p className="mt-4 font-bold mb-4">Card</p>
            <label htmlFor="card-name">Name on Card</label>
            <input
              type="text"
              id="card-name"
              className="mt-2 w-full bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
              onChange={(e) => setCardName(e.target.value)}
            />
            <label htmlFor="card-number">Card Number</label>
            <input
              type="text"
              id="card-number"
              className="mt-2 w-full bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <label htmlFor="expiration-month">Expiration Month</label>
            <input
              type="text"
              id="expiration-month"
              className="mt-2 w-full bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
              onChange={(e) => setExpireMonth(e.target.value)}
            />
            <label htmlFor="expiration-year">Expiration Year</label>
            <input
              type="text"
              id="expiration-year"
              className="mt-2 w-full bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
              onChange={(e) => setExpireYear(e.target.value)}
            />
            <label htmlFor="security-code">Security Code</label>
            <input
              type="text"
              id="security-code"
              className="mt-2 w-full bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
              onChange={(e) => setSecurityCode(e.target.value)}
            />

            <label htmlFor="billing-zip-code">Billing ZIP Code</label>
            <input
              type="text"
              id="billing-zip-code"
              className="mt-2 w-full bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
              onChange={(e) => setBillingZipCode(e.target.value)}
            />
            <label htmlFor="delivery-zip">Delivery ZIP</label>
            <input
              type="text"
              id="delivery-zip"
              placeholder="Enter ZIP Code"
              className="mt-2 w-full bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
              onChange={(e) => setDeliveryZipCode(e.target.value)}
            />
            <p className="text-xs">
              By placing this order, I agree to the Model 3 Order Agreement,
              Terms of Use, and Privacy Notice.
            </p>
            {errorOnOrder && (
              <p className="text-xs text-red-500">{errorOnOrder}</p>
            )}
            <button
              type="submit"
              className={`bg-blue-800/50 w-full mb-8 mt-4 h-10 text-white font-bold hover:bg-blue-800/80 ${
                submitOrder && `bg-blue-800/80 border-2 border-black`
              }`}
            >
              {submitOrder ? `Placing order` : `Place Order`}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
