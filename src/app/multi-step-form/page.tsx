import { Metadata } from "next";
import Component from "./Component";

export const metadata: Metadata = {
  title: "Multi Step Form",
    icons: {
        icon: "/multi-step-form/images/favicon-32x32.png",
    },
  openGraph: {
    title: "Multi Step Form",
    url: "https://next-apps-rho.vercel.app/multi-step-form",
    images: [
      {
        url: "/multi-step-form/images/multi-step-form-preview.png", 
        width: 2000,
          height: 1000,
        alt: "Multi Step Form Preview",
      },
    ],
    type: "website",
  },
};

export default function page() {
  return <div className="bg-sky-100">
<Component />
  </div>;
}
