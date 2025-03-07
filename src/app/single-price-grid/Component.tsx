"use client";

import CodedBy from "@/components/CodedBy";

export default function Component() {

  const whyUs = [
    "Tutoials by industry experts",
    "Peer & expert code review",
    "Coding exercises",
    "Access to out GitHub repos",
    "Community forum",
    "Flashcard decks",
    "New videos every week",
  ]
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-SPG-light-gray font-SPG-karla p-6">
      <div className="w-full max-w-2xl rounded-xl shadow overflow-hidden">
        <div className="bg-white px-6 py-12 sm:px-12">
          <h1 className="text-2xl text-SPG-cyan font-semibold">Join our community</h1>
          <h2 className="text-base text-SPG-bright-yellow tracking-wider mt-4">30-day, hassle-free money back guarantee</h2>
          <p className="text-SPG-grayish-blue text-sm mt-2">Gain access to our full library of tutorials along with expert code reviews. <br /> Perfect for any developers who are serious about honing their skills.</p>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="bg-SPG-cyan text-white px-6 py-12 sm:px-12 flex flex-col justify-between space-y-3">
            <h2 className="tracking-wider">Monthly Subscription</h2>
            <h2 className="flex items-center space-x-2"><span className="text-3xl font-semibold">$29</span> <span className="text-sm text-SPG-light-gray">per month</span></h2>
            <p className="text-sm">Full access for less than $1 a day</p>
            <button className="w-full py-2 px-4 bg-SPG-bright-yellow  rounded-sm shadow cursor-pointer hover:bg-transparent active:bg-transparent border-2 border-SPG-bright-yellow duration-200 ease-in-out hover:text-SPG-bright-yellow active:text-SPG-bright-yellow">Sign Up</button>
          </div>
          <div className="bg-SPG-cyan/80 text-white px-6 py-12 sm:px-12 space-y-2">
            <h2 className="">Why Us</h2>
            <div>
            {whyUs.map((s, i)=>{
              return(<p key={i} className="text-xs font-extralight text-SPG-light-gray tracking-wider">{s}</p>)
            })}
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