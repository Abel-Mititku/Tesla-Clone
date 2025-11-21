"use client";
import { GlobeIcon } from "lucide-react";

export default function TeslaLogo() {
  return (
    <div className="relative">
      <div className="z-30 tesla-logo">
        <div className="text-black dark:text-white flex justify-between min-[500px]:mt-4 w-screen bg-white dark:bg-black pt-4 h-16">
          <a href="#" className="ml-4 min-[500px]:ml-8">
            T E S L A
          </a>
          <div className="flex mr-4 min-[500px]:mr-8">
            <GlobeIcon className="w-4 h-4" />
            <p className="text-xs">US</p>
          </div>
        </div>
      </div>
    </div>
  );
}
