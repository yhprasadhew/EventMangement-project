
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Form Data:", form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Contact Us
      </h1>

      <p className="text-center text-gray-500 mt-3">
        We’d love to hear from you. Send us a message!
      </p>

      {/* Form */}
      <div className="mt-10 bg-white shadow-lg rounded-xl p-8">

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}