"use client";

import CodedBy from "@/components/CodedBy";
import { Share } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Component() {
  const [isShareActive, setIsShareActive] = useState(false);

  useEffect(() => {  
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".share-container")) {
        setIsShareActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-APC-light-grayish-blue flex flex-col justify-center items-center p-4 font-APC-manrope">
      <div className="grid sm:grid-cols-12 bg-white rounded-2xl shadow overflow-hidden max-w-4xl">
        <div className="sm:col-span-5">
          <Image width={500} height={500} src="/article-preview-card/images/drawers.jpg" alt="drawers" className="h-full w-full object-cover" />
        </div>
        <div className="sm:col-span-7 space-y-5 sm:space-y-3 p-10 pb-6 sm:pb-10 relative">
          <h1 className="font-semibold text-2xl text-APC-dark-grayish-blue">
            Shift the overall look and feel by adding these wonderful touches to furniture in your home
          </h1>
          <p className="text-sm text-APC-desaturated-blue">
            Ever been in a room and felt like something was missing? <br />
            Perhaps it felt slightly bare and uninviting. I&apos;ve got some simple tips to help you make any room feel complete.
          </p>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg">
              <Image width={100} height={100} src="/article-preview-card/images/avatar-michelle.jpg" alt="" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-sm text-APC-dark-grayish-blue tracking-wide">Michelle Appleton</h3>
              <p className="font-medium text-xs text-APC-grayish-blue">28 Jun 2020</p>
            </div>
            <div 
              className="share-container ml-auto w-8 h-8 rounded-full bg-APC-light-grayish-blue flex justify-center items-center cursor-pointer hover:bg-APC-dark-grayish-blue active:bg-APC-dark-grayish-blue text-APC-dark-grayish-blue hover:text-APC-light-grayish-blue active:text-APC-light-grayish-blue duration-200 ease-in-out" 
              onClick={(e) => {
                e.stopPropagation();
                setIsShareActive(!isShareActive);
              }}
            >
              <Share width={15} height={15} strokeWidth={2.5} className="" />
            </div>
            <div className={`absolute right-0 left-0 bottom-0 h-16 sm:h-20 bg-APC-dark-grayish-blue px-10 flex items-center space-x-4 transition-transform duration-300 ease-in-out cursor-auto ${isShareActive ? "translate-y-0" : "translate-y-full"}`}>
              <p className="text-APC-light-grayish-blue font-extralight tracking-widest">SHARE</p>
              <Image width={15} height={15} src="/article-preview-card/images/icon-facebook.svg" alt="icon-facebook" className="cursor-pointer hover:scale-150 duration-200 ease-in-out" />
              <Image width={15} height={15} src="/article-preview-card/images/icon-twitter.svg" alt="icon-twitter" className="cursor-pointer hover:scale-150 duration-200 ease-in-out" />
              <Image width={15} height={15} src="/article-preview-card/images/icon-pinterest.svg" alt="icon-pinterest" className="cursor-pointer hover:scale-150 duration-200 ease-in-out" />
              <div className="ml-auto w-6 h-6 rounded-full bg-APC-desaturated-blue text-APC-light-grayish-blue flex justify-center items-center cursor-pointer hover:scale-125 duration-200 ease-in-out " onClick={() => setIsShareActive(false)}>
                <Share width={15} height={15} strokeWidth={2.5} className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-4 text-center text-xs text-gray-500">
        <CodedBy />
      </div>
    </div>
  );
}