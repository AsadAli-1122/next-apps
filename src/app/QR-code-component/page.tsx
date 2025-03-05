import { Metadata } from "next";
import QRCard from "./QRCodeComponent";

export const metadata: Metadata = {
  title: "QR Code Component",
    icons: {
        icon: "/QRCode/images/favicon-32x32.png",
    },
    openGraph: {
      title: "QR Code Component",
      description: "Generate strong, secure, and random passwords with customizable options including uppercase, lowercase, numbers, and symbols.",
      url: "https://next-apps-rho.vercel.app/QR-code-component",
      images: [
        {
          url: "/QRCode/images/QR-code-preview.png", 
          width: 2000,
          height: 1000,
          alt: "QR Code Component Preview",
        },
      ],
      type: "website",
    }
};

export default function page() {
  return <QRCard />;
}
