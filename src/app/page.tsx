import Link from "next/link";

export default function Home() {
  return (
    <div className="py-6 px-4 max-w-6xl mx-auto">
      <Link href="/password-generator-app" className="underline hover:text-indigo-600">Password Generator App</Link>
    </div>
  );
}
