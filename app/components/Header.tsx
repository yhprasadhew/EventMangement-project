import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className ="text-xl font-bold">Event Management </h1>

        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/Events">Events</Link>
            </li>

            <li>
              <Link href="/about">About</Link>
            </li>

            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}