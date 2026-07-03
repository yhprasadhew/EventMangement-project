import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto p-10">
      <h1 className="text-5xl font-bold">
        Welcome to Event Management
      </h1>

      <p className="mt-4 text-gray-600">
        Plan, organize and manage your events easily.
      </p>

      <Link href="/events">
        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Explore Events
        </button>
      </Link>
    </section>
  );
}