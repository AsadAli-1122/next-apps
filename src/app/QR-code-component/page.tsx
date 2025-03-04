import { Metadata } from "next";
import QRCard from "./QRCodeComponent";

export const metadata: Metadata = {
  title: "QR Code Component",
    icons: {
        icon: "/QRCode/images/favicon-32x32.png",
    }
};

export default function page() {
  return <QRCard />;
}
