"use client";

import CodedBy from "@/components/CodedBy";
import { Music4 } from "lucide-react";
import Image from "next/image";

export default function Component() {

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-OC-pale-blue bg-[url(/order-summary/images/pattern-background-mobile.svg)] sm:bg-[url(/order-summary/images/pattern-background-desktop.svg)] bg-top bg-no-repeat bg-[length:100%_50%] font-OC-red-hat-display py-4">
      <div className="max-w-xs rounded-2xl overflow-hidden shadow-md">
        <div className="aspect-video">
          <Image width={500} height={300} src="/order-summary/images/illustration-hero.svg" alt="illustration-hero" className="w-full h-full object-cover" />
        </div>
        <div className="bg-white px-8 py-8 space-y-4">
          <h1 className="text-center text-xl font-[900] text-OC-dark-blue">Order Summary</h1>
          <p className="text-xs text-center text-OC-desaturated-blue">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
          <div className="flex items-center space-x-2 bg-OC-very-pale-blue rounded-lg py-4 px-4 group">
            <div className="bg-OC-pale-blue text-OC-desaturated-blue w-8 h-8 aspect-square rounded-full flex justify-center items-center">
            <Music4 width={15} className="group-hover:animate-[spin_3s_ease-in-out_infinite] group-active:animate-[spin_3s_ease-in-out_infinite]" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold tracking-wider">Annual Plan</h3>
              <p className="text-[10px] font-semibold tracking-wider text-OC-desaturated-blue">$59.99/year</p>
            </div>
            <p className="underline text-OC-bright-blue text-xs ml-auto cursor-pointer hover:no-underline">Change</p>
          </div>
        <button className="w-full rounded-lg bg-OC-bright-blue py-2 px-4 text-xs text-white font-semibold tracking-wider shadow-[0_10px_20px_-10px_#3829e0] cursor-pointer hover:bg-OC-bright-blue/80 active:bg-OC-bright-blue/80 duration-200 ease-in-out">Proceed to Payment</button>
        <button className="w-fit mx-auto text-OC-desaturated-blue text-xs font-bold tracking-wider block cursor-pointer hover:text-black active:text-black">Cancel Order</button>
        </div>
      </div>
      
      <div className="flex py-4 text-center text-xs text-gray-500">
        <CodedBy />
      </div>
    </div>
  );
}