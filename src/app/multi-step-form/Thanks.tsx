import Image from "next/image";
import React from "react";

const Thanks: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-3">
      <Image
        src="/multi-step-form/images/icon-thank-you.svg"
        alt="icon-thank-you"
        width={100}
        height={100}
      />
      <h1 className="font-bold text-3xl">Thanks for purchasing </h1>
      <p className="text-center text-slate-500">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at{" "}
        <a
          className="text-indigo-500 hover:underline"
          href="mailto:codebyasad@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Asad Ali
        </a>{" "}
        .
      </p>
    </div>
  );
};

export default Thanks;
