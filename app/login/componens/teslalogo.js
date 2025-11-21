"use client";
import { GlobeIcon } from "lucide-react";
import "../../style.css";

export default function TeslaLogo() {
  return (
    <div className="relative">
      <div className="tesla-logo z-30">
        <div className="text-black dark:black flex justify-between  w-screen bg-white h-8">
          <a href="#" className="ml-4 [@media(min-width:500px)]:ml-8">
            T E S L A
          </a>
          <div className="flex mr-4 [@media(min-width:500px)]:mr-8">
            <GlobeIcon className="w-4 h-4" />
            <p className="text-xs">US</p>
          </div>
        </div>
      </div>
    </div>
  );
}
