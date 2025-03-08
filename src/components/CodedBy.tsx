import Link from "next/link";
import React from "react";

const CodedBy: React.FC = () => {
  return (
    <>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        className="text-indigo-500 px-1"
      >
        {" "}
        Frontend Mentor{" "}
      </a>
      .Coded by{" "}
      <Link
        href="https://codebyasad.vercel.app/"
        className="text-indigo-500 px-1"
      >
        {" "}
        Asad Ali{" "}
      </Link>
      .
    </>
  );
};

export default CodedBy;
