"use client";

import { ChevronRight } from "lucide-react";
// import CodedBy from "@/components/CodedBy";
import Image from "next/image";

export default function Component() {


  return (
    <div className="min-h-screen w-full grid md:grid-cols-12 font-BACS-josefin">
      <div className="bg-[url('/base-apparel-coming-soon/images/bg-pattern-desktop.svg')] bg-no-repeat bg-cover bg-center md:col-span-7 flex flex-col px-20 py-20">
      <Image width={150} height={50} src="/base-apparel-coming-soon/images/logo.svg" alt="logo" />
      <h1 className="flex flex-col text-7xl uppercase">
        <span className="text-BACS-desaturated-red font-extralight">We're</span>
        <span className="">Coming</span>
        <span className="">Soon</span>
      </h1>
      <p className="text-BACS-desaturated-red">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
      <div className="flex items-center border border-BACS-desaturated-red w-full rounded-full">
        <input type="email" placeholder="Email Address" className="w-full h-full px-7 text-BACS-desaturated-red" />
        <button className="px-10 py-4 rounded-full bg-[linear-gradient(135deg,hsl(0,80%,86%),hsl(0,74%,74%))] -my-px -mr-px text-white shadow-2xl shadow-BACS-desaturated-red"> <ChevronRight /> </button>
      </div>
      </div>
      <div className="md:col-span-5 bg-[url('/base-apparel-coming-soon/images/hero-desktop.jpg')] bg-no-repeat bg-cover bg-center">
        {/* <Image width={1000} height={2000} src="/base-apparel-coming-soon/images/hero-desktop.jpg" alt="hero desktop" className="w-full h-full object-cover object-center" /> */}
      </div>
      {/* <div className="flex py-4 text-center text-xs text-gray-500">
        <CodedBy />
      </div> */}
    </div>
  );
}