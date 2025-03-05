import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description: "Fill out the contact form and we'll get back to you as soon as possible.",
    icons: {
        icon: "/contactUs/images/favicon-32x32.png",
    },

  openGraph: {
    title: "Contact Us - Get in Touch",
    description: "Fill out the contact form and we'll get back to you as soon as possible.",
    url: "https://next-apps-rho.vercel.app/contact-form",
    images: [
      {
        url: "/contactUs/images/contact-form-preview.jpg", 
        width: 910,
        height: 822,
        alt: "Contact Us Preview",
      },
    ],
    type: "website",
  },
};

export default function page() {
  return <ContactForm />;
}
