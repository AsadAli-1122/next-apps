import { Metadata } from "next";
import Component from "./Component";

export const metadata: Metadata = {
  title: "Base Apparel Coming Soon",
    icons: {
        icon: "/base-apparel-coming-soon/images/favicon-32x32.png",
    },
  // openGraph: {
  //   title: "Base Apparel Coming Soon",
  //   url: "https://next-apps-rho.vercel.app/base-apparel-coming-soon",
  //   images: [
  //     {
  //       url: "/base-apparel-coming-soon/images/base-apparel-coming-soon-preview.png", 
  //       width: 2000,
  //         height: 1000,
  //       alt: "Base Apparel Coming Soon Preview",
  //     },
  //   ],
  //   type: "website",
  // },
};

export default function page() {
  return <Component />;
}
