import { Metadata } from "next";
import Component from "./Component";

export const metadata: Metadata = {
  title: "Profile Card",
    icons: {
        icon: "/profile-card/images/favicon-32x32.png",
    },
  openGraph: {
    title: "Profile Card",
    url: "https://next-apps-rho.vercel.app/profile-card",
    images: [
      {
        url: "/profile-card/images/profile-card-preview.png", 
        width: 2000,
          height: 1000,
        alt: "Profile Card Preview",
      },
    ],
    type: "website",
  },
};

const user = {
  name: "Victor Crest",
  age: 26,
  location: "London",
  avatar: "/profile-card/images/image-victor.jpg",
  background: "/profile-card/images/bg-pattern-card.svg",
  stats: {
    followers: 80000,
    likes: 803000,
    photos: 1400,
  },
};

export default function page() {
  return <Component {...user} />;
}
