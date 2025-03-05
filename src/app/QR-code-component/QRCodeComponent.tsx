"use client";

import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";
import CodedBy from "@/components/CodedBy";

const QRCard = () => {
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const qrCode = new QRCodeStyling({
      width: 150,
      height: 150,
      data: "https://www.frontendmentor.io",
      dotsOptions: {
        color: "#ffffff",
        type: "rounded",
      },
      backgroundOptions: {
        color: "#2B7BFA",
      },
      cornersSquareOptions: {
        type: "square",
      },
    });

    if (qrRef.current) {
      qrCode.append(qrRef.current);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-sky-100">
      <div className="bg-white rounded-xl shadow-lg p-5 max-w-xs text-center">
        <div className="bg-[#2B7BFA] p-4 rounded-lg aspect-square flex justify-center items-center">
          <div ref={qrRef}></div>
        </div>
        <h2 className="text-xl font-bold mt-6">
          Improve your front-end skills by building projects
        </h2>
        <p className="text-gray-500 text-sm mt-4">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
      <div className="flex mt-8 py-4 text-center text-xs">
      <CodedBy />
      </div>
    </div>
  );
};

export default QRCard;
