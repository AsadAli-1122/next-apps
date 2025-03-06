import Link from "next/link";

export default function Home() {
  return (
    <div className="py-6 px-4 max-w-6xl mx-auto flex flex-col space-y-4">
      <Link href="/multi-step-form" className="underline hover:text-indigo-600">Multi Step Form</Link>
      <Link href="/password-generator-app" className="underline hover:text-indigo-600">Password Generator App</Link>
      <Link href="/QR-code-component" className="underline hover:text-indigo-600">QR Code Component</Link>
      <Link href="/contact-form" className="underline hover:text-indigo-600">Contact Form</Link>
      <Link href="/product-preview-card" className="underline hover:text-indigo-600">Product Preview Card</Link>
      <Link href="/stats-preview-card" className="underline hover:text-indigo-600">Stats Preview Card</Link>
      <Link href="/article-preview-card" className="underline hover:text-indigo-600">Article Preview Card</Link>
    </div>
  );
}
