import { Metadata } from "next";
import Component from "./Component";

export const metadata: Metadata = {
  title: "Single Price Grid",
    icons: {
        icon: "/single-price-grid/images/favicon-32x32.png",
    },
  openGraph: {
    title: "Single Price Grid",
    url: "https://next-apps-rho.vercel.app/single-price-grid",
    images: [
      {
        url: "/single-price-grid/images/single-price-grid-preview.png", 
        width: 2000,
          height: 1000,
        alt: "Single Price Grid Preview",
      },
    ],
    type: "website",
  },
};

export default function page() {
  return <Component />;
}
