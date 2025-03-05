"use client";

import { useState, useEffect } from "react";
import CountUp from "react-countup";
import CodedBy from "@/components/CodedBy";

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { value: 10, label: "Companies", suffix: "K+" },
  { value: 314, label: "Templates" },
  { value: 12, label: "Queries", suffix: "M+" },
];

export default function Component() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div className="min-h-screen w-full bg-SPC-very-dark-blue flex flex-col justify-center items-center p-4 font-SPC-lexend">
      <div className="flex flex-col-reverse md:flex-row bg-SPC-dark-desaturated-blue rounded-xl overflow-hidden max-w-4xl">
        <div className="md:w-1/2 px-8 py-12 sm:p-12 space-y-6 text-white flex flex-col justify-between">
          <h1 className="text-3xl font-semibold tracking-wide">
            Get <span className="text-SPC-soft-violet">insights</span> that help
            your business grow.
          </h1>
          <p className="text-sm text-gray-400 font-light">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>

          <div className="flex flex-row justify-between items-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                {hasMounted && (
                  <h2 className="text-lg font-sans font-bold tracking-wider uppercase">
                    <CountUp end={stat.value} duration={2.5} /> {stat.suffix}
                  </h2>
                )}
                <p className="text-xs font-light text-gray-400 uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 overflow-hidden relative">
          <div className="absolute inset-0 bg-SPC-soft-violet/30"></div>
          <img
            src="/stats-preview-card/images/image.jpg"
            alt="Business Insights"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex py-4 text-center text-xs text-gray-500">
        <CodedBy />
      </div>
    </div>
  );
}
