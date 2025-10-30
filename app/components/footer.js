"use client";

export default function Footer() {
  return (
    <div className="pb-16">
      <div className="flex flex-col items-center text-xs [@media(max-width:500px)]:m-[10px] [@media(min-width:500px)]:m-8 [@media(min-width:700px)]:ml-[150px] [@media(min-width:700px)]:mr-[150px]">
        <p className="opacity-[0.7]">
          $7,500 federal tax credit available to eligible buyers who purchase
          and take delivery of a qualifying vehicle by September 30, 2025.
          Leases not eligible. Not all model trims will qualify. MSRP cap of
          $80,000 for Cybertruck and Model Y; $55,000 for Model 3 applies.
          Consult a tax professional regarding your personal eligibility.
        </p>
        <p className="mt-8 opacity-[0.7]">
          Terms subject to change.{" "}
          <a href="#" className="hover:underline">
            Learn more.
          </a>
        </p>
      </div>
      <div className="flex [@media(min-width:500px)]:mb-8 [@media(max-width:500px)]:flex-col w-full justify-center items-center [@media(min-width:500px)]:space-x-6 text-xs opacity-[0.7]">
        <a href="#">Tesla © 2025</a>
        <a href="#">Privacy & Legal</a>
        <a href="#">Vehicle Recalls</a>
        <a href="#" className="hidden [@media(min-width:500px)]:block">
          Contact
        </a>
        <a href="#">News</a>
        <a href="#">Learn</a>
      </div>
    </div>
  );
}
