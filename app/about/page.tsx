import React from "react";

export default function AboutPage() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 py-20">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 blur-2xl opacity-70"></div>

      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          About Our Event Platform
        </h1>

        <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
          A modern solution to plan, manage, and organize events effortlessly.
          Built for individuals, businesses, and professionals.
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose Us?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We simplify event planning with powerful tools that help you
            manage bookings, attendees, schedules, and payments all in one place.
            Whether you're hosting a small meetup or a large corporate event,
            our platform scales with your needs.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

            <div className="p-4 rounded-xl border bg-white shadow-sm hover:shadow-md transition">
              ⚡ Fast Setup
            </div>

            <div className="p-4 rounded-xl border bg-white shadow-sm hover:shadow-md transition">
              📅 Smart Scheduling
            </div>

            <div className="p-4 rounded-xl border bg-white shadow-sm hover:shadow-md transition">
              🔐 Secure Access
            </div>

            <div className="p-4 rounded-xl border bg-white shadow-sm hover:shadow-md transition">
              📊 Analytics Dashboard
            </div>

          </div>
        </div>

        {
          {/* Floating effect */}
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-200 rounded-2xl -z-10 blur-xl opacity-40"></div>
        </div>

      </div>
    </section>
  );
}