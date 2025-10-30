"use client";

export default function StaticSection() {
  return (
    <div className="grid grid-cols-1 [@media(min-width:500px)]:flex justify-between [@media(max-width:500px)]:ml-[8px] [@media(min-width:500px)]:mr-4 [@media(min-width:500px)]:ml-4 [@media(min-width:700px)]:ml-8 [@media(min-width:700px)]:mr-8">
      <div className="rounded-lg mt-8 bg-gray-100 mr-[10px] [@media(min-width:950px)]:flex flex-1">
        <div className="rounded-lg [@media(min-width:500px)]:hidden bg-[url('/assets/Homepage-Grid-Current-Offers.avif')] bg-center bg-cover w-full h-[180px]"></div>
        <div className="mt-4 ml-8 ">
          <p className="text-extrabold text-3xl text-gray-800 dark:text-gray-800">
            Current Offers
          </p>
          <p className="text-gray-700 text-sm">
            Limited inventory. Take delivery today.
          </p>
          <button className="px-4 py-2 mt-4 mb-4 mr-4 w-[200px] text-sm bg-white rounded text-gray-800 dark:text-gray-800 hover:bg-gray-200 cursor-pointer">
            Learn More
          </button>
        </div>
        <div className="m-[10px] [@media(max-width:950px)]:hidden [@media(min-width:950px)]:block bg-[url('/assets/Homepage-Grid-Current-Offers.avif')] bg-center bg-cover w-[150px] h-[180px]"></div>
      </div>

      <div className="rounded-lg mt-8 bg-gray-100 mr-[10px] [@media(min-width:950px)]:flex flex-1">
        <div className="rounded-lg [@media(min-width:500px)]:hidden bg-[url('/assets/Homepage-Grid-Compare-3-Y.avif')] bg-center bg-cover w-full h-[180px]"></div>
        <div className="mt-4 ml-8">
          <p className="text-extrabold text-3xl text-gray-800">Lease a Tesla</p>
          <p className="text-gray-700 text-sm">
            Explore lease pricing for Model 3 and Model Y, starting from
            $299/mo.
          </p>
          <button className="px-4 py-2 mt-4 mb-4 w-[200px] text-sm bg-white rounded text-gray-800 dark:text-gray-800 hover:bg-gray-200 cursor-pointer">
            Compare
          </button>
        </div>
        <div className="m-[10px] [@media(max-width:950px)]:hidden [@media(min-width:950px)]:block bg-[url('/assets/Homepage-Grid-Compare-3-Y.avif')] bg-center bg-cover w-[200px] h-[180px]"></div>
      </div>
    </div>
  );
}
