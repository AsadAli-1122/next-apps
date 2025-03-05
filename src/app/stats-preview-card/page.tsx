import { Metadata } from "next";
import Component from "./Component";

export const metadata: Metadata = {
  title: "Stats preview card",
    icons: {
        icon: "/stats-preview-card/images/favicon-32x32.png",
    },
  openGraph: {
    title: "Stats preview card",
    url: "https://next-apps-rho.vercel.app/stats-preview-card",
    images: [
      {
        url: "/stats-preview-card/images/stats-preview-card-preview.png", 
        width: 2000,
          height: 1000,
        alt: "Stats Preview Card Preview",
      },
    ],
    type: "website",
  },
};

export default function page() {
  return <Component />;
}
