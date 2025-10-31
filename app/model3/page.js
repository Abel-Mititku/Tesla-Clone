"use client";
import Hero from "./components/herosection";
import TeslaLogo from "./components/teslalogo";
import CarBody from "./components/carbody";
import { useState, useEffect } from "react";
import gsap from "gsap";

export default function Model3() {
  return (
    <div>
      <Hero />
      <TeslaLogo />
      <CarBody />
    </div>
  );
}
