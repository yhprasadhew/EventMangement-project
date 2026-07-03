"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { authClient } from "../lib/auth/client";

export default function Header() {
  const [user, setUser] = useState<{ email?: string; name?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // 🔐 Load current user
  useEffect(() => {
    async function loadUser() {
      try {
        const session = await authClient.getSession();
        setUser(session?.data?.user ?? null);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  // 🚪 Close dropdown on click outside
  useEffect(() => {
    if (!dropdownOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".user-profile-dropdown")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [dropdownOpen]);

  // 🚪 Logout function
  async function handleLogout() {
    try {
      await authClient.signOut();
      setUser(null);
    } catch (err) {
      console.log("Logout error:", err);
    }
  }

  return (
    <header className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <h1 className="text-xl font-bold">
          Event Management
        </h1>

        {/* Navigation */}
        <nav className="flex items-center gap-6">

          <ul className="flex gap-6">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/events">Events</Link>
            </li>

            <li>
              <Link href="/about">About</Link>
            </li>

            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          {/* 👤 USER SECTION */}
          <div className="ml-6 user-profile-dropdown relative">
            {loading ? (
              <span className="text-sm opacity-85">Loading...</span>
            ) : user ? (
              <div className="relative">
                {/* Logged User Logo / Avatar */}
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-blue-900 font-semibold border border-white hover:bg-gray-100 transition-colors focus:outline-none cursor-pointer"
                >
                  {user.name ? user.name[0].toUpperCase() : (user.email ? user.email[0].toUpperCase() : "U")}
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-xl border border-gray-100 py-2 text-gray-800 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Signed In As</p>
                      <p className="text-sm font-bold truncate text-gray-900">{user.name ?? "User"}</p>
                      <p className="text-xs text-gray-500 truncate mt-0.5">{user.email}</p>
                    </div>

                    <Link
                      href="/account"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600 transition-colors font-medium"
                    >
                      Account Settings
                    </Link>

                    <div className="border-t border-gray-100 my-1"></div>

                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        handleLogout();
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors font-medium cursor-pointer"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/auth/sign-in"
                className="bg-white text-blue-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors shadow-sm"
              >
                Sign In
              </Link>
            )}
          </div>

        </nav>
      </div>
    </header>
  );
}