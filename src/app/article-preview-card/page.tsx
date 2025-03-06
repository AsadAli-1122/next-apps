import { Metadata } from "next";
import Component from "./Component";

export const metadata: Metadata = {
  title: "Article Preview Card",
    icons: {
        icon: "/article-preview-card/images/favicon-32x32.png",
    },
  openGraph: {
    title: "Article Preview Card",
    url: "https://next-apps-rho.vercel.app/article-preview-card",
    images: [
      {
        url: "/article-preview-card/images/article-preview-card-preview.png", 
        width: 2000,
          height: 1000,
        alt: "Article Preview Card Preview",
      },
    ],
    type: "website",
  },
};

export default function page() {
  return <Component />;
}
