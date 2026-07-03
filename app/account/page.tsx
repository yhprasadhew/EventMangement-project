"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { authClient } from "../lib/auth/client";

export default function AccountPage() {
  const [user, setUser] = useState<{ email?: string; name?: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSession() {
      try {
        const session = await authClient.getSession();
        setUser(session?.data?.user ?? null);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    loadSession();
  }, []);

  return (
    <section className="max-w-3xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-4">Account</h1>
      {loading ? (
        <p>Loading account…</p>
      ) : user ? (
        <div className="space-y-4 rounded border border-gray-200 bg-white p-6 shadow-sm">
          <p>
            <span className="font-semibold">Name:</span> {user.name ?? "Unknown"}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {user.email ?? "Unknown"}
          </p>
          <p className="text-sm text-gray-600">
            This page shows your current Neon Auth session information.
          </p>
        </div>
      ) : (
        <div className="space-y-4 rounded border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-gray-700">You are not signed in.</p>
          <Link href="/auth/sign-in" className="inline-flex rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Sign In
          </Link>
        </div>
      )}
    </section>
  );
}
