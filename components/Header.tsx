"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-0 md:px-8 border-b border-gray-200 dark:border-gray-700 relative">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Signature
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6 text-gray-600 dark:text-gray-300 text-sm font-semibold">
        <Link href="#">Extension</Link>
        <Link href="#">Exploits</Link>
        <Link href="#">Learn</Link>
        <Link href="#">FAQ</Link>

        {/* More Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsMoreOpen((prev) => !prev)}
            className="flex items-center cursor-pointer gap-1 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none"
          >
            More <ChevronDown className="w-4 h-4" />
          </button>

          {/* Dropdown */}
          <div
            className={`absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-md border border-gray-200 dark:border-gray-700 transition-all duration-200 ${
              isMoreOpen
                ? "opacity-100 scale-100 visible"
                : "opacity-0 scale-95 invisible"
            }`}
          >
            <Link
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Merchandise
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Donate
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Button */}
      <button
        className="md:hidden text-gray-600 dark:text-gray-300"
        onClick={() => setIsMobileOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 backdrop-blur-sm ${
          isMobileOpen
            ? "bg-white/30 dark:bg-black/30 opacity-100 visible"
            : "bg-transparent opacity-0 invisible"
        }`}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4  border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Menu
          </h2>
          <button onClick={() => setIsMobileOpen(false)}>
            <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        <nav className=" text-gray-700 dark:text-gray-300 font-medium">
          <div className="p-4 flex flex-col  gap-4">
            <Link href="#" onClick={() => setIsMobileOpen(false)}>
              Extension
            </Link>
            <Link href="#" onClick={() => setIsMobileOpen(false)}>
              Exploits
            </Link>
            <Link href="#" onClick={() => setIsMobileOpen(false)}>
              Learn
            </Link>
            <Link href="#" onClick={() => setIsMobileOpen(false)}>
              FAQ
            </Link>
          </div>
          <div className="border-t flex-col flex gap-4 border-gray-200 dark:border-gray-700 p-4 ">
            <p className="text-xs text-gray-500 mb-2">More</p>
            <Link href="#" onClick={() => setIsMobileOpen(false)}>
              Blog
            </Link>
            <Link href="#" onClick={() => setIsMobileOpen(false)}>
              About Us
            </Link>
            <Link href="#" onClick={() => setIsMobileOpen(false)}>
              Merchandise
            </Link>
            <Link href="#" onClick={() => setIsMobileOpen(false)}>
              Donate
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
