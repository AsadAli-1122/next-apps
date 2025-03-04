"use client";

import { useState } from "react";
import { ArrowRight, Copy, CopyCheck } from "lucide-react";
import copy from "clipboard-copy";

const generatePassword = (
  length: number,
  options: { upper: boolean; lower: boolean; number: boolean; symbol: boolean }
) => {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let characters = "";
  if (options.upper) characters += upper;
  if (options.lower) characters += lower;
  if (options.number) characters += numbers;
  if (options.symbol) characters += symbols;

  if (characters.length === 0) return "";

  return Array.from(
    { length },
    () => characters[Math.floor(Math.random() * characters.length)]
  ).join("");
};

const getPasswordStrength = (
    length: number,
    options: { upper: boolean; lower: boolean; number: boolean; symbol: boolean }
  ) => {
    const activeOptions = Object.values(options).filter(Boolean).length;
  
    if (length < 8 || activeOptions === 1) return 1;
  
    if (length >= 8 && length <= 10) {
      return activeOptions >= 3 ? 3 : activeOptions;
    }
  
    if (length >= 11 && length <= 14) {
      return activeOptions >= 3 ? 3 : activeOptions;
    }
  
    if (length >= 15) {
      return activeOptions;
    }
  
    return 1;
  };

export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [animatedPassword, setAnimatedPassword] = useState("");
  const [options, setOptions] = useState({
    upper: true,
    lower: true,
    number: true,
    symbol: false,
  });
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const strength = getPasswordStrength(length, options);

  const handleGenerate = () => {
    setCopied(false);
    const finalPassword = generatePassword(length, options);
  
    let animationIndex = 0;
    const interval = setInterval(() => {
      if (animationIndex < 10) {
        setAnimatedPassword(generatePassword(length, options));
        animationIndex++;
      } else {
        clearInterval(interval);
        setAnimatedPassword(finalPassword);
        setPassword(finalPassword);
      }
    }, 50); 
  };

  const handleCopy = () => {
    copy(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
    <div className="flex flex-col justify-center items-center min-h-svh bg-[#0F0E14] select-none">
      <div className="max-w-xs w-full">
        <h1 className="text-center text-xl font-semibold mb-4 text-gray capitalize font-mono">
          Password Generator
        </h1>
        <div className="relative w-full flex items-center bg-darkGrey px-4 py-3 mb-4">
          <input
            type="text"
            value={animatedPassword}
            readOnly
            placeholder="P4$5W0rD!"
            className="w-full bg-transparent text-lg font-mono outline-none text-gray-300"
          />
          <button
            onClick={handleCopy}
            className="ml-2 text-neonGreen hover:fill-neonGreen cursor-pointer hover:scale-110 duration-200 ease-in-out"
          >
            {copied ? <CopyCheck height={18} /> : <Copy height={18} />}
          </button>
        </div>
        <div className="w-full bg-darkGrey px-4 py-5">
          <div className="mb-4">
            <div className="text-sm mb-2 flex justify-between items-center text-almostWhite">
              <p className="font-mono">Character Length:</p>{" "}
              <p className="text-neonGreen font-mono text-xl">{length}</p>
            </div>
            <input
              type="range"
              min={4}
              max={20}
              value={length}
              onChange={(e) => {
                setLength(parseInt(e.target.value));
              }}
              style={{
                background: `linear-gradient(
                                to right,
                                var(--color-neonGreen) 0%,
                                var(--color-neonGreen) ${
                                  ((length - 4) / 16) * 100
                                }%,
                                var(--color-veryDarkGrey) ${
                                  ((length - 4) / 16) * 100
                                }%,
                                var(--color-veryDarkGrey) 100%
                                )`,
              }}
              className="slider"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            {Object.entries(options).map(([key, value]) => (
              <label
                key={key}
                className="flex items-center space-x-4 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => setOptions({ ...options, [key]: !value })}
                  className="checkbox appearance-none bg-darkGrey checked:bg-neonGreen checked:border-neonGreen w-4 h-4 border-2 border-almostWhite hover:border-neonGreen grid place-content-center cursor-pointer ease-in-out duration-100"
                />
                <span className="text-gray-300 text-sm font-mono">
                  Include {key.charAt(0).toUpperCase() + key.slice(1)}
                </span>
              </label>
            ))}
          </div>
          <div className="mb-4 bg-veryDarkGrey flex justify-between items-center text-gray font-mono px-4 py-2">
            <p className="text-base mb-2 uppercase font-semibold tracking-wider pt-2">
              Strength
            </p>
            <div className="flex gap-1.5">
              {[...Array(4)].map((_, i) => {
                let colorClass = "border-gray-500";

                if (i < strength) {
                  if (strength === 1)
                    colorClass = "border-gray-500 bg-gray-500";
                  else if (strength === 2)
                    colorClass = "border-yellow-400 bg-yellow-400";
                  else if (strength === 3)
                    colorClass = "border-orange-500 bg-orange-500";
                  else colorClass = "border-red-500 bg-red-500";
                }

                return (
                  <div key={i} className={`h-5 w-2 border-2 ${colorClass}`} />
                );
              })}
            </div>
          </div>
          <button
            onClick={handleGenerate}
            className="w-full px-4 py-2 text-sm font-medium bg-neonGreen border-2 border-neonGreen hover:bg-transparent hover:text-neonGreen uppercase flex justify-center items-center space-x-2 cursor-pointer duration-200 ease-in-out text-darkGrey"
          >
            <span>Generate</span> <ArrowRight height={18} />
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
