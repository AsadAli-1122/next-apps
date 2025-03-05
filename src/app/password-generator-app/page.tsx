import { Metadata } from "next";
import PasswordGenerator from "./PasswordGenerator";

export const metadata: Metadata = {
  title: "Password Generator - Secure & Random Passwords",
  description:
    "Generate strong, secure, and random passwords with customizable options including uppercase, lowercase, numbers, and symbols.",
  keywords:
    "password generator, strong password, secure password, random password, online password generator",
    icons: {
        icon: "/passwordGenerator/images/favicon-32x32.png",
    },
    openGraph: {
      title: "Password Generator - Secure & Random Passwords",
      description: "Generate strong, secure, and random passwords with customizable options including uppercase, lowercase, numbers, and symbols.",
      url: "https://next-apps-rho.vercel.app/password-generator-app",
      images: [
        {
          url: "/passwordGenerator/images/password-generator-app-preview.png", 
          width: 2000,
          height: 1000,
          alt: "Password Generator App Preview",
        },
      ],
      type: "website",
    }
};

export default function page() {
  return <PasswordGenerator />;
}
