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
    }
};

export default function page() {
  return <PasswordGenerator />;
}
