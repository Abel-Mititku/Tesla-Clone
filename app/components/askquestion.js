"use client";
import { steeringWheel } from "@lucide/lab";
import { createLucideIcon } from "lucide-react";
import { MessageSquareMoreIcon } from "lucide-react";

const SteeringWheel = createLucideIcon("SteeringWheel", steeringWheel);

export default function AskQuestion() {
  return (
    <div className="w-full flex justify-center fixed bottom-0 bg-white shadow-[0_-4px_6px_rgba(0,0,0,0.1)] z-[33331]">
      <div className="w-[80%] flex mb-2 mt-2">
        <div className="border border-gray-300 rounded bg-gray-100 [@media(min-width:500px)]:flex-1 mr-6 cursor-pointer">
          <div className="px-4 py-2 text-xs flex">
            <MessageSquareMoreIcon className="w-4 h-4 mr-2 text-gray-800 dark:text-gray-800" />
            <p className="hidden [@media(min-width:500px)]:block text-gray-800 dark:text-gray-800">
              Ask a Question
            </p>
          </div>
        </div>
        <div className="flex items-center border border-gray-300 rounded bg-gray-100 [@media(max-width:500px)]:w-[70%] [@media(min-width:500px)]:flex-1 cursor-pointer">
          <SteeringWheel className="w-4 h-4 mr-2 ml-2 text-gray-800 dark:text-gray-800" />
          <p className="px-4 py-2 text-xs text-gray-800 dark:text-gray-800">
            Schedule a Drive Today
          </p>
        </div>
      </div>
    </div>
  );
}
