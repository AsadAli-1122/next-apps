import { Metadata } from "next";
import Component from "./Component";

export const metadata: Metadata = {
  title: "Product preview card",
    icons: {
        icon: "/product-preview-card/images/favicon-32x32.png",
    },
  openGraph: {
    title: "Product preview card",
    url: "https://next-apps-rho.vercel.app/product-preview-card",
    images: [
      {
        url: "/product-preview-card/images/product-preview-card-preview.png", 
        width: 2000,
          height: 1000,
        alt: "Product Preview Card Preview",
      },
    ],
    type: "website",
  },
};

export default function page() {
  return <Component />;
}
