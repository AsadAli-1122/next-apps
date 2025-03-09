"use client";

import { ChevronRight } from "lucide-react";
// import CodedBy from "@/components/CodedBy";
import Image from "next/image";

export default function Component() {
  return (
    <div className="min-h-screen w-full flex flex-col-reverse md:flex-row font-BACS-josefin relative">
      <div className="bg-[url('/base-apparel-coming-soon/images/bg-pattern-desktop.svg')] bg-no-repeat bg-cover bg-center md:w-7/12 flex flex-col px-4 sm:px-10 md:px-20 py-20 justify-evenly space-y-10">
        <div className="absolute md:relative top-0 left-0 right-0 px-4 py-4 sm:px-10 md:p-0 bg-white md:bg-transparent">
          <Image
            width={150}
            height={50}
            src="/base-apparel-coming-soon/images/logo.svg"
            alt="logo"
            className=""
          />
        </div>
        <h1 className="flex flex-col text-7xl uppercase">
          <span className="text-BACS-desaturated-red font-extralight">
            We're
          </span>
          <span className="">Coming</span>
          <span className="">Soon</span>
        </h1>
        <p className="text-BACS-desaturated-red">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <div className="flex items-center border border-BACS-desaturated-red w-full rounded-full">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full h-full px-7 text-BACS-desaturated-red outline-0"
          />
          <button className="px-10 py-4 rounded-full bg-[linear-gradient(135deg,hsl(0,80%,86%),hsl(0,74%,74%))] hover:bg-[linear-gradient(135deg,hsl(0,80%,86%,0.5),hsl(0,74%,74%,0.5))] cursor-pointer active:bg-[linear-gradient(135deg,hsl(0,80%,86%,0.5),hsl(0,74%,74%,0.5))] duration-200 ease-in-out -mr-px -my-px">
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="min-h-96 md:w-5/12 bg-[url('/base-apparel-coming-soon/images/hero-mobile.jpg')] md:bg-[url('/base-apparel-coming-soon/images/hero-desktop.jpg')] bg-no-repeat bg-cover bg-top md:bg-center mt-16 md:mt-0"></div>
      {/* <div className="flex py-4 text-center text-xs text-gray-500">
        <CodedBy />
      </div> */}
    </div>
  );
}
