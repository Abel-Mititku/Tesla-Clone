"use client";
import { GlobeIcon } from "lucide-react";

export default function TeslaLogo() {
  return (
    <div className="relative">
      <div className="fixed top-0 z-30">
        <div className="text-black dark:black flex justify-between w-screen bg-white">
          <a href="#" className="ml-4 [@media(min-width:500px)]:ml-8 mt-4">
            T E S L A
          </a>
          <div className="flex mr-4 [@media(min-width:500px)]:mr-8 mt-4">
            <GlobeIcon className="w-4 h-4" />
            <p className="text-xs">US</p>
          </div>
        </div>
      </div>
    </div>
  );
}
