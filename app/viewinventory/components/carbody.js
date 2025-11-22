"use client";
import {
  Car,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  X,
  Zap,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";
import Image from "next/image";

export default function CarBody() {
  const [enterZip, setEnterZip] = useState(false);
  const [filter, setFilter] = useState(false);
  const [model, setModel] = useState(true);
  const [payment, setPayment] = useState(true);
  const [trim, setTrim] = useState(true);
  const [wheels, setWheels] = useState(false);
  const [interior, setInterior] = useState(false);
  const [interiorWhite, setInteriorWhite] = useState(false);
  const [interiorBlack, setInteriorBlack] = useState(true);
  const searchParams = useSearchParams();
  const [selectedModel, setSelectedModel] = useState(searchParams.get("model"));
  const [selectedTrim, setSelectedTrim] = useState(() => {
    if (trim !== null) {
      return searchParams.get("trim");
    }
    if (selectedModel === "Cybertruck") return "Long Range Rear-Wheel Drive";
    if (selectedModel === "Model 3") return "All-Wheel Drive";
  });
  const [paint, setPaint] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(
    searchParams.get("payment")
  );
  const [cyberWheel, setCyberWheel] = useState(false);
  const [Vehicles, setVehicles] = useState(null);
  const [selectedWheel, setSelectedWheel] = useState(() => {
    if (selectedModel === "Cybertruck") return "Core Wheels";
    if (selectedModel === "Model 3") return "18 Wheels";
    return "Default Wheels";
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [gray, setGray] = useState(false);
  const [black, setBlack] = useState(false);
  const [silver, setSilver] = useState(false);
  const [white, setWhite] = useState(false);
  const [blue, setBlue] = useState(true);
  const [red, setRed] = useState(false);
  const [selectedPaint, setSelectedPaint] = useState("Blue Paint");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (selectedModel === "Model 3") {
      setSelectedTrim("Long Range Rear-Wheel Drive");
      setSelectedWheel("18 Wheels");
    }
    if (selectedModel === "Cybertruck") {
      setSelectedTrim("All-Wheel Drive");
      setSelectedWheel("Core Wheels");
    }
  }, [selectedModel]);

  useEffect(() => {
    async function fetchVehicles() {
      let query = supabase.from("vehicles").select("*");
      if (selectedModel === "Cybertruck") {
        query = query.eq("model", selectedModel);
        if (selectedTrim) {
          query = query.eq("trim", selectedTrim);
        }
        if (interiorBlack) {
          query = query.contains("features", ["Black Interior"]);
        }
        if (interiorWhite) {
          query = query.contains("features", ["White Interior"]);
        }
        if (selectedWheel === "Core Wheels") {
          query = query.eq(
            "exterior_image",
            "/assets/cybertruck/compositor-10.png"
          );
        }
        if (selectedWheel === "Cyber Wheels") {
          query = query.eq(
            "exterior_image",
            "/assets/cybertruck/compositor-11.png"
          );
        }
      }
      if (selectedModel === "Model 3") {
        query = query.eq("model", selectedModel);
        if (selectedTrim) {
          query = query.eq("trim", selectedTrim);
        }
        if (interiorBlack) {
          query = query.contains("features", ["Black Interior"]);
        }
        if (interiorWhite) {
          query = query.contains("features", ["White Interior"]);
        }
        if (selectedPaint) {
          setError(false);
          query = query.contains("features", [`${selectedPaint}`]);
        }
        if (
          (selectedPaint === "White Paint" && selectedWheel === "19 Wheels") ||
          (selectedPaint === "White Paint" && selectedWheel === "20 Wheels")
        ) {
          setError(true);
        }
        if (selectedWheel) {
          query = query.contains("features", [`${selectedWheel}`]);
        }
      }
      const { data, error } = await query;
      if (error) {
        console.error(error);
      } else {
        setVehicles(data);
      }
    }
    fetchVehicles();
  }, [
    selectedModel,
    selectedTrim,
    interiorBlack,
    interiorWhite,
    selectedWheel,
    selectedPaint,
  ]);

  useEffect(() => {
    if (filter) {
      document.body.style.overflow = "hidden"; // stop scroll
    } else {
      document.body.style.overflow = "auto"; // restore scroll
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [filter]);

  console.log("selected model", selectedModel, selectedTrim, selectedPaint);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("model", selectedModel);
    params.set("trim", selectedTrim);
    params.set("payment", selectedPayment);
    router.replace(`?${params.toString()}`);
  }, [selectedModel, selectedPayment, selectedTrim, selectedWheel]);

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFilter(false);
    }, 1000);
  };

  return (
    <div className="pt- w-full">
      <div className="sticky top-0 z-10 dark:text-black [@media(max-width:500px)]:pt-8 [@media(min-width:500px)]:pt-22 bg-white w-full">
        <div className="ml-8">
          <p className="text-xl font-bold">Inventory</p>
          <p className="text-xs underline">Enter zip code</p>
        </div>
        <div
          className="flex [@media(min-width:700px)]:hidden justify-between ml-8 mr-8 border-2 border-gray-500/50 rounded p-2 mt-2"
          onClick={() => setFilter(true)}
        >
          <div className="flex flex-col">
            <p className="opacity-[0.8] text-xs">Filters</p>
            <p className="text-sm">New,{`${selectedModel}`}</p>
          </div>
          <ChevronDown className="text-black mt-4" />
        </div>
      </div>
      <div className="[@media(max-width:700px)]:pt-8 [@media(min-width:700px)]:pt-8 flex w-full">
        <div className="flex flex-col justify-start mr-2 ml-8 w-[25%] [@media(max-width:700px)]:hidden">
          <button className="w-full h-8 bg-white text-black dark:text-black border-2 border-gray-600/50">
            New
          </button>
          <div className="relative flex flex-col items-center pb-30 bg-white dark:bg-black">
            <div className="w-[90%] mt-16 flex flex-col">
              <p
                className="font-bold  flex justify-between"
                onClick={() => setModel((prev) => !prev)}
              >
                Model {model ? <ChevronUp /> : <ChevronDown />}
              </p>
              {model && (
                <form className="flex flex-col text-xs space-y-2 mt-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="carName"
                      value="Model 3"
                      className="mr-2"
                      checked={selectedModel === "Model 3"}
                      onChange={(e) => setSelectedModel(e.target.value)}
                    />
                    Model 3
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="carName"
                      value="Cybertruck"
                      className="mr-2"
                      checked={selectedModel === "Cybertruck"}
                      onChange={(e) => setSelectedModel(e.target.value)}
                    />
                    Cybertruck
                  </label>
                </form>
              )}
              <p
                className="font-bold mt-8 flex justify-between"
                onClick={() => setPayment((prev) => !prev)}
              >
                Payment {payment ? <ChevronUp /> : <ChevronDown />}
              </p>
              {payment && (
                <form className="flex flex-col text-xs space-y-2 mt-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="Payment"
                      value="Cash"
                      className="mr-2"
                    />
                    Cash
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="Payment"
                      value="Lease"
                      className="mr-2"
                      checked={selectedPayment === "Lease"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                    />
                    Lease
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="Payment"
                      value="Finance"
                      className="mr-2"
                    />
                    Finance
                  </label>
                </form>
              )}
              <p
                className="font-bold mt-8 flex justify-between"
                onClick={() => setTrim((prev) => !prev)}
              >
                Trim {trim ? <ChevronUp /> : <ChevronDown />}
              </p>
              {trim && selectedModel === "Cybertruck" && (
                <form className="flex flex-col text-xs space-y-2 mt-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="trim"
                      value="Long Range Rear-Wheel Drive"
                      className="mr-2"
                      checked={selectedTrim === "Long Range Rear-Wheel Drive"}
                      onChange={(e) => setSelectedTrim(e.target.value)}
                    />
                    Long Range Rear-Wheel Drive
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="trim"
                      value="Cyberbeast Foundation Series"
                      className="mr-2"
                      checked={selectedTrim === "Cyberbeast Foundation Series"}
                      onChange={(e) => setSelectedTrim(e.target.value)}
                    />
                    Cyberbeast Foundation Series
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="trim"
                      value="All-Wheel Drive"
                      className="mr-2"
                      checked={selectedTrim === "All-Wheel Drive"}
                      onChange={(e) => setSelectedTrim(e.target.value)}
                    />
                    All-Wheel Drive
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="trim"
                      value="Cyberbeast"
                      className="mr-2"
                      checked={selectedTrim === "Cyberbeast"}
                      onChange={(e) => setSelectedTrim(e.target.value)}
                    />
                    Cyberbeast
                  </label>
                </form>
              )}
              {trim && selectedModel === "Model 3" && (
                <form className="flex flex-col text-xs space-y-2 mt-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="trim"
                      value="Performance All-Wheel Drive"
                      className="mr-2"
                      checked={selectedTrim === "Performance All-Wheel Drive"}
                      onChange={(e) => setSelectedTrim(e.target.value)}
                    />
                    Performance All-Wheel Drive
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="trim"
                      value="Long Range All-Wheel Drive"
                      className="mr-2"
                      checked={selectedTrim === "Long Range All-Wheel Drive"}
                      onChange={(e) => setSelectedTrim(e.target.value)}
                    />
                    Long Range All-Wheel Drive
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="trim"
                      value="Long Range Rear-Wheel Drive"
                      className="mr-2"
                      checked={selectedTrim === "Long Range Rear-Wheel Drive"}
                      onChange={(e) => setSelectedTrim(e.target.value)}
                    />
                    Long Range Rear-Wheel Drive
                  </label>
                </form>
              )}
              {selectedModel !== "Cybertruck" && (
                <p
                  className="font-bold mt-8 flex justify-between"
                  onClick={() => setPaint((prev) => !prev)}
                >
                  Paint {paint ? <ChevronUp /> : <ChevronDown />}
                </p>
              )}
              {paint && selectedModel === "Model 3" && (
                <div>
                  <div className="flex justify-between">
                    <img
                      src="/assets/model3/Paint_Blue.avif"
                      className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
                        blue && `border`
                      }`}
                      onClick={() => {
                        setGray(false);
                        setBlack(false);
                        setBlue(true);
                        setRed(false);
                        setSilver(false);
                        setWhite(false);
                        setSelectedPaint("Blue Paint");
                      }}
                    />
                    <img
                      src="/assets/model3/DiamondBlack.avif"
                      className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
                        black && `border`
                      }`}
                      onClick={() => {
                        setGray(false);
                        setBlack(true);
                        setBlue(false);
                        setRed(false);
                        setSilver(false);
                        setWhite(false);
                        setSelectedPaint("Black Paint");
                      }}
                    />
                    <img
                      src="/assets/model3/Paint_Silver_R1.avif"
                      className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
                        silver && `border`
                      }`}
                      onClick={() => {
                        setGray(false);
                        setBlack(false);
                        setBlue(false);
                        setRed(false);
                        setSilver(true);
                        setWhite(false);
                        setSelectedPaint("Silver Paint");
                      }}
                    />
                    <img
                      src="/assets/model3/Paint_Red.avif"
                      className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
                        red && `border`
                      }`}
                      onClick={() => {
                        setGray(false);
                        setBlack(false);
                        setBlue(false);
                        setRed(true);
                        setSilver(false);
                        setWhite(false);
                        setSelectedPaint("Red Paint");
                      }}
                    />
                  </div>
                  <div className="flex">
                    <img
                      src="/assets/model3/Paint_StealthGrey.avif"
                      className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
                        gray && `border`
                      }`}
                      onClick={() => {
                        setGray(true);
                        setBlack(false);
                        setBlue(false);
                        setRed(false);
                        setSilver(false);
                        setWhite(false);
                        setSelectedPaint("Gray Paint");
                      }}
                    />
                    <img
                      src="/assets/model3/Paint_White.avif"
                      className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
                        white && `border`
                      }`}
                      onClick={() => {
                        setGray(false);
                        setBlack(false);
                        setBlue(false);
                        setRed(false);
                        setSilver(false);
                        setWhite(true);
                        setSelectedPaint("White Paint");
                      }}
                    />
                  </div>
                </div>
              )}
              <p
                className="font-bold mt-8 flex justify-between"
                onClick={() => setWheels((prev) => !prev)}
              >
                Wheels {wheels ? <ChevronUp /> : <ChevronDown />}
              </p>
              {wheels && selectedModel === "Cybertruck" && (
                <form className="flex flex-col text-xs space-y-2 mt-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="Wheels"
                      value="Core Wheels"
                      className="mr-2"
                      checked={selectedWheel === "Core Wheels"}
                      onChange={(e) => setSelectedWheel(e.target.value)}
                    />
                    Core Wheels
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="Wheels"
                      value="Cyber Wheels"
                      className="mr-2"
                      checked={selectedWheel === "Cyber Wheels"}
                      onChange={(e) => {
                        setSelectedWheel(e.target.value);
                      }}
                    />
                    Cyber Wheels
                  </label>
                </form>
              )}
              {wheels && selectedModel === "Model 3" && (
                <form className="flex flex-col text-xs space-y-2 mt-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="Wheels"
                      value="18 Wheels"
                      className="mr-2"
                      checked={selectedWheel === "18 Wheels"}
                      onChange={(e) => setSelectedWheel(e.target.value)}
                    />
                    18&quot; Wheels
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="Wheels"
                      value="19 Wheels"
                      className="mr-2"
                      checked={selectedWheel === "19 Wheels"}
                      onChange={(e) => {
                        setSelectedWheel(e.target.value);
                      }}
                    />
                    19&quot; Wheels
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="Wheels"
                      value="20 Wheels"
                      className="mr-2"
                      checked={selectedWheel === "20 Wheels"}
                      onChange={(e) => {
                        setSelectedWheel(e.target.value);
                      }}
                    />
                    20&quot; Wheels
                  </label>
                </form>
              )}
              <p
                className="font-bold mt-8 flex justify-between"
                onClick={() => setInterior((prev) => !prev)}
              >
                Interior {interior ? <ChevronUp /> : <ChevronDown />}
              </p>
              {interior && (
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
                      setInteriorWhite(true);
                      setInteriorBlack(false);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="grid [@media(max-width:800px)]:grid-cols-1 [@media(min-width:800px)]:grid-cols-2 ml-8 mr-8 [@media(max-width:500px)]:m-0 w-full">
          {Vehicles &&
            selectedModel === "Cybertruck" &&
            Vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="border border-gray-500/50 cursor-pointer [@media(max-width:800px)]:mt-2 [@media(min-width:800px)]:m-2 flex flex-col items-center rounded"
              >
                <div className="w-full h-48 relative">
                  <Image
                    src={vehicle.exterior_image}
                    alt={vehicle.trim}
                    width={1920}
                    height={300}
                    className="w-full h-full bg-white object-cover transition-opacity duration-300 hover:opacity-0 absolute top-0 left-0"
                  />
                  <Image
                    src={vehicle.interior_image}
                    alt={`${vehicle.trim} Interior`}
                    width={1920}
                    height={300}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                </div>
                <div className="w-full flex flex-col items-start p-4">
                  <p className="font-bold text-sm mt-2">{vehicle.trim}</p>
                  <p className="text-xs">{vehicle.price}</p>
                  <p className="text-xs opacity-[0.8]">{vehicle.lease}</p>
                  <div className="flex justify-between items-center w-[70%]">
                    <div className="flex items-center text-xs">
                      <div
                        className={`w-3 h-3 ${
                          interiorBlack ? `bg-black` : `bg-white border`
                        } mr-2`}
                      ></div>
                      <p>Interior</p>
                    </div>
                    <p className="text-xs">
                      {selectedWheel === "Core Wheels"
                        ? '20" Core Wheels'
                        : '20" Cyber Wheels'}
                    </p>
                    <p className="text-xs flex">
                      <Car className="w-4 h-4 mr-2" />
                      Tow
                    </p>{" "}
                  </div>
                  <p className="text-xs flex mt-2">
                    <Zap className="w-4 h-4" />1 yr Supercharging
                  </p>
                </div>
              </div>
            ))}
          {Vehicles &&
            selectedModel === "Model 3" &&
            !error &&
            Vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="border border-gray-500/50 cursor-pointer [@media(max-width:800px)]:mt-2 [@media(min-width:800px)]:m-2 flex flex-col items-center rounded"
              >
                <div className="w-full h-48 relative">
                  <Image
                    src={vehicle.exterior_image}
                    alt={vehicle.trim}
                    width={1920}
                    height={300}
                    className="w-full h-full bg-white object-cover transition-opacity duration-300 hover:opacity-0 absolute top-0 left-0"
                  />
                  <Image
                    src={vehicle.interior_image}
                    alt={`${vehicle.trim} Interior`}
                    width={1920}
                    height={300}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                </div>
                <div className="w-full flex flex-col items-start p-4">
                  <p className="font-bold text-sm mt-2">{vehicle.trim}</p>
                  <p className="text-xs">{vehicle.price}</p>
                  <p className="text-xs opacity-[0.8]">{vehicle.lease}</p>
                  <div className="flex justify-between items-center w-[70%]">
                    <div className="flex items-center text-xs">
                      <div
                        className={`w-3 h-3 ${
                          interiorBlack ? `bg-black` : `bg-white border`
                        } mr-2`}
                      ></div>
                      <p>Interior</p>
                    </div>
                    <p className="text-xs">{vehicle.features[2]}</p>
                    <p className="text-xs flex">
                      <Car className="w-4 h-4 mr-2" />
                      {vehicle.features[1]}
                    </p>{" "}
                  </div>
                </div>
              </div>
            ))}
          {error && (
            <p>
              Couldn&apos;t find what you are looking for?Check other versions
            </p>
          )}
        </div>
      </div>
      {filter && (
        <div className="w-screen h-[100vh] z-30 backdrop-blur-sm bg-white/30 p-6 rounded-xl absolute top-0 [@media(min-width:800px)]:hidden"></div>
      )}
      {filter && (
        <div className="w-full h-screen dark:text-black bg-white overflow-y-auto z-50 absolute top-[30px] [@media(min-width:800px)]:hidden">
          <div className="relative flex flex-col items-center pb-30 bg-white">
            <div className="sticky top-[30px] right-0 w-full">
              <X
                className="absolute right-0"
                onClick={() => setFilter(false)}
              />
            </div>
            <div className=" top-[55px] flex flex-col items-start w-full  mt-6">
              <p className="ml-4 text-xl font-bold">Filters</p>
            </div>
            <div className="w-[90%] mt-16 flex flex-col">
              <button className="w-full border-2 border-gray-500/50">
                New
              </button>
              <p
                className="font-bold mt-8 flex justify-between"
                onClick={() => setModel((prev) => !prev)}
              >
                Model {model ? <ChevronUp /> : <ChevronDown />}
              </p>
              {model && (
                <form className="flex flex-col text-xs space-y-2 mt-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="carName"
                      value="Model 3"
                      className="mr-2"
                      checked={selectedModel === "Model 3"}
                      onChange={(e) => setSelectedModel(e.target.value)}
                    />
                    Model 3
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="carName"
                      value="Cybertruck"
                      className="mr-2"
                      checked={selectedModel === "Cybertruck"}
                      onChange={(e) => setSelectedModel(e.target.value)}
                    />
                    Cybertruck
                  </label>
                </form>
              )}
              <p
                className="font-bold mt-8 flex justify-between"
                onClick={() => setPayment((prev) => !prev)}
              >
                Payment {payment ? <ChevronUp /> : <ChevronDown />}
              </p>
              {payment && (
                <form className="flex flex-col text-xs space-y-2 mt-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="Payment"
                      value="Cash"
                      className="mr-2"
                    />
                    Cash
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="Payment"
                      value="Lease"
                      className="mr-2"
                      checked={selectedPayment === "Lease"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                    />
                    Lease
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="Payment"
                      value="Finance"
                      className="mr-2"
                    />
                    Finance
                  </label>
                </form>
              )}
              <p
                className="font-bold mt-8 flex justify-between"
                onClick={() => setTrim((prev) => !prev)}
              >
                Trim {trim ? <ChevronUp /> : <ChevronDown />}
              </p>
              {trim && selectedModel === "Cybertruck" && (
                <form className="flex flex-col text-xs space-y-2 mt-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="trim"
                      value="Long Range Rear-Wheel Drive"
                      className="mr-2"
                      checked={selectedTrim === "Long Range Rear-Wheel Drive"}
                      onChange={(e) => setSelectedTrim(e.target.value)}
                    />
                    Long Range Rear-Wheel Drive
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="trim"
                      value="Cyberbeast Foundation Series"
                      className="mr-2"
                      checked={selectedTrim === "Cyberbeast Foundation Series"}
                      onChange={(e) => setSelectedTrim(e.target.value)}
                    />
                    Cyberbeast Foundation Series
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="trim"
                      value="All-Wheel Drive"
                      className="mr-2"
                      checked={selectedTrim === "All-Wheel Drive"}
                      onChange={(e) => setSelectedTrim(e.target.value)}
                    />
                    All-Wheel Drive
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="trim"
                      value="Cyberbeast"
                      className="mr-2"
                      checked={selectedTrim === "Cyberbeast"}
                      onChange={(e) => setSelectedTrim(e.target.value)}
                    />
                    Cyberbeast
                  </label>
                </form>
              )}
              {trim && selectedModel === "Model 3" && (
                <form className="flex flex-col text-xs space-y-2 mt-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="trim"
                      value="Performance All-Wheel Drive"
                      className="mr-2"
                      checked={selectedTrim === "Performance All-Wheel Drive"}
                      onChange={(e) => setSelectedTrim(e.target.value)}
                    />
                    Performance All-Wheel Drive
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="trim"
                      value="Long Range All-Wheel Drive"
                      className="mr-2"
                      checked={selectedTrim === "Long Range All-Wheel Drive"}
                      onChange={(e) => setSelectedTrim(e.target.value)}
                    />
                    Long Range All-Wheel Drive
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="trim"
                      value="Long Range Rear-Wheel Drive"
                      className="mr-2"
                      checked={selectedTrim === "Long Range Rear-Wheel Drive"}
                      onChange={(e) => setSelectedTrim(e.target.value)}
                    />
                    Long Range Rear-Wheel Drive
                  </label>
                </form>
              )}
              {selectedModel !== "Cybertruck" && (
                <p
                  className="font-bold mt-8 flex justify-between"
                  onClick={() => setPaint((prev) => !prev)}
                >
                  Paint {paint ? <ChevronUp /> : <ChevronDown />}
                </p>
              )}
              {paint && selectedModel === "Model 3" && (
                <div>
                  <div className="flex justify-between [@media(max-width:800px)]:w-[200px]">
                    <img
                      src="/assets/model3/Paint_Blue.avif"
                      className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
                        blue && `border`
                      }`}
                      onClick={() => {
                        setGray(false);
                        setBlack(false);
                        setBlue(true);
                        setRed(false);
                        setSilver(false);
                        setWhite(false);
                        setSelectedPaint("Blue Paint");
                      }}
                    />
                    <img
                      src="/assets/model3/DiamondBlack.avif"
                      className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
                        black && `border`
                      }`}
                      onClick={() => {
                        setGray(false);
                        setBlack(true);
                        setBlue(false);
                        setRed(false);
                        setSilver(false);
                        setWhite(false);
                        setSelectedPaint("Black Paint");
                      }}
                    />
                    <img
                      src="/assets/model3/Paint_Silver_R1.avif"
                      className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
                        silver && `border`
                      }`}
                      onClick={() => {
                        setGray(false);
                        setBlack(false);
                        setBlue(false);
                        setRed(false);
                        setSilver(true);
                        setWhite(false);
                        setSelectedPaint("Silver Paint");
                      }}
                    />
                    <img
                      src="/assets/model3/Paint_Red.avif"
                      className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
                        red && `border`
                      }`}
                      onClick={() => {
                        setGray(false);
                        setBlack(false);
                        setBlue(false);
                        setRed(true);
                        setSilver(false);
                        setWhite(false);
                        setSelectedPaint("Red Paint");
                      }}
                    />
                  </div>
                  <div className="flex">
                    <img
                      src="/assets/model3/Paint_StealthGrey.avif"
                      className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
                        gray && `border`
                      }`}
                      onClick={() => {
                        setGray(true);
                        setBlack(false);
                        setBlue(false);
                        setRed(false);
                        setSilver(false);
                        setWhite(false);
                        setSelectedPaint("Gray Paint");
                      }}
                    />
                    <img
                      src="/assets/model3/Paint_White.avif"
                      className={`rounded-full w-10 h-10 p-1 cursor-pointer ${
                        white && `border`
                      }`}
                      onClick={() => {
                        setGray(false);
                        setBlack(false);
                        setBlue(false);
                        setRed(false);
                        setSilver(false);
                        setWhite(true);
                        setSelectedPaint("White Paint");
                      }}
                    />
                  </div>
                </div>
              )}
              <p
                className="font-bold mt-8 flex justify-between"
                onClick={() => setWheels((prev) => !prev)}
              >
                Wheels {wheels ? <ChevronUp /> : <ChevronDown />}
              </p>
              {wheels && selectedModel === "Cybertruck" && (
                <form className="flex flex-col text-xs space-y-2 mt-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="Wheels"
                      value="Core Wheels"
                      className="mr-2"
                      checked={selectedWheel === "Core Wheels"}
                      onChange={(e) => setSelectedWheel(e.target.value)}
                    />
                    Core Wheels
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="Wheels"
                      value="Cyber Wheels"
                      className="mr-2"
                      checked={selectedWheel === "Cyber Wheels"}
                      onChange={(e) => setSelectedWheel(e.target.value)}
                    />
                    Cyber Wheels
                  </label>
                </form>
              )}
              {wheels && selectedModel === "Model 3" && (
                <form className="flex flex-col text-xs space-y-2 mt-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="Wheels"
                      value="18 Wheels"
                      className="mr-2"
                      checked={selectedWheel === "18 Wheels"}
                      onChange={(e) => setSelectedWheel(e.target.value)}
                    />
                    18&quot; Wheels
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="Wheels"
                      value="19 Wheels"
                      className="mr-2"
                      checked={selectedWheel === "19 Wheels"}
                      onChange={(e) => {
                        setSelectedWheel(e.target.value);
                      }}
                    />
                    19&quot; Wheels
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="Wheels"
                      value="20 Wheels"
                      className="mr-2"
                      checked={selectedWheel === "20 Wheels"}
                      onChange={(e) => {
                        setSelectedWheel(e.target.value);
                      }}
                    />
                    20&quot; Wheels
                  </label>
                </form>
              )}
              <p
                className="font-bold mt-8 flex justify-between"
                onClick={() => setInterior((prev) => !prev)}
              >
                Interior {interior ? <ChevronUp /> : <ChevronDown />}
              </p>
              {interior && (
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
                      setInteriorWhite(true);
                      setInteriorBlack(false);
                    }}
                  />
                </div>
              )}
              <div className="fixed bottom-2 w-[90%] bg-white">
                <button
                  className={`w-full bg-blue-600 text-white mt-2 h-8 ${
                    loading && `bg-blue-700`
                  }`}
                  onClick={handleLoading}
                >
                  {`${loading ? `Loading Results` : `Show Results`}`}
                </button>
                <button className="border-2 border-gray-500/50 mt-2 w-full bg-white">
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
