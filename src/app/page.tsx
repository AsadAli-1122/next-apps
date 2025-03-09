import Link from "next/link";

export default function Home() {
  return (
    <div className="py-6 px-4 max-w-6xl mx-auto flex flex-col space-y-4">
      <Link href="/multi-step-form" className="underline hover:text-indigo-600 w-fit">Multi Step Form</Link>
      <Link href="/password-generator-app" className="underline hover:text-indigo-600 w-fit">Password Generator App</Link>
      <Link href="/QR-code-component" className="underline hover:text-indigo-600 w-fit">QR Code Component</Link>
      <Link href="/contact-form" className="underline hover:text-indigo-600 w-fit">Contact Form</Link>
      <Link href="/product-preview-card" className="underline hover:text-indigo-600 w-fit">Product Preview Card</Link>
      <Link href="/stats-preview-card" className="underline hover:text-indigo-600 w-fit">Stats Preview Card</Link>
      <Link href="/article-preview-card" className="underline hover:text-indigo-600 w-fit">Article Preview Card</Link>
      <Link href="/single-price-grid" className="underline hover:text-indigo-600 w-fit">Single Price Grid</Link>
      <Link href="/order-summary" className="underline hover:text-indigo-600 w-fit">Order Summary</Link>
      <Link href="/profile-card" className="underline hover:text-indigo-600 w-fit">Profile Card</Link>
      <Link href="/base-apparel-coming-soon" className="underline hover:text-indigo-600 w-fit">Base Apparel Coming Soon</Link>
    </div>
  );
}
