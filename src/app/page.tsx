import Link from "next/link";

export default function Home() {
  return (
    <div className="py-6 px-4 max-w-6xl mx-auto flex flex-col space-y-4">
      <Link href="/password-generator-app" className="underline hover:text-indigo-600">Password Generator App</Link>
      <Link href="/QR-code-component" className="underline hover:text-indigo-600">QR Code Component</Link>
    </div>
  );
}
