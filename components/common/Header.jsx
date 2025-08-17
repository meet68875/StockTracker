// components/common/Header.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    { label: "Home", href: "/", iconClass: "pi-home" },
    { label: "Favorites", href: "/favorites", iconClass: "pi-heart" },
  ];

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center relative">
      {/* Logo */}
      <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-800">
        StockTrackr 📈
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={`flex items-center space-x-2 text-base font-medium transition-colors duration-200 ${
                pathname === item.href
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              <i className={`pi ${item.iconClass}`} />
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className={`pi ${menuOpen ? "pi-times" : "pi-bars"} text-2xl`} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start p-4 space-y-3 md:hidden z-50">
          {items.map((item) => (
            <li key={item.label} className="w-full">
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)} // close menu when clicked
                className={`flex items-center space-x-2 text-base font-medium w-full transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                <i className={`pi ${item.iconClass}`} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
