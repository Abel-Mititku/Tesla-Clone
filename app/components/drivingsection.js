"use client";

export default function DrivingSection() {
  return (
    <div className="mt-8 [@media(max-width:500px)]:ml-[8px] [@media(min-width:500px)]:mr-4 [@media(min-width:500px)]:ml-4 [@media(min-width:700px)]:ml-8 [@media(min-width:700px)]:mr-8 [@media(min-width:950px)]:flex justify-between">
      <div className="flex items-end relative z-10 h-[450px] [@media(max-width:950px)]:w-full [@media(min-width:950px)]:w-[68%]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
          autoPlay
          loop
          muted
          playsInline
        >
          {" "}
          <source src="/assets/Homepage-FSD-Tablet.webm" type="video/mp4" />
        </video>
        <div className="absolute w-full z-10 m-8">
          <p className="text-white text-4xl text-bold z-10">
            Full Self-Driving (Supervised)
          </p>
          <div className="flex text-sm mt-2">
            <button className="bg-blue-500 w-[120px] rounded-md h-8 text-white mr-4 hover:bg-blue-600 cursor-pointer">
              Demo Drive
            </button>
            <button className="bg-white w-[120px] rounded-md h-8 text-gray-800 dark:text-gray-800 hover:bg-gray-100 cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-end [@media(max-width:950px)]:mt-8 rounded-lg [@media(min-width:950px)]:w-[30%] [@media(max-width:500px)]:bg-[url('/assets/Homepage-Features-Mobile.avif')] [@media(min-width:500px)]:bg-[url('/assets/Homepage-Features-Desktop.avif')] bg-cover bg-center h-[450px]">
        <div className="m-8 z-10">
          <p className="text-white text-4xl text-bold">
            Features That Come Standard
          </p>
          <div className="flex text-sm z-10">
            <button className="bg-blue-500 w-[120px] rounded-md h-8 text-white mr-4 hover:bg-blue-600 cursor-pointer">
              Discover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
