import { Metadata } from "next";
import Component from "./Component";

export const metadata: Metadata = {
  title: "Order Summary",
    icons: {
        icon: "/order-summary/images/favicon-32x32.png",
    },
  openGraph: {
    title: "Order Summary",
    url: "https://next-apps-rho.vercel.app/order-summary",
    images: [
      {
        url: "/order-summary/images/order-summary-preview.png", 
        width: 2000,
          height: 1000,
        alt: "Order Summary Preview",
      },
    ],
    type: "website",
  },
};

export default function page() {
  return <Component />;
}
