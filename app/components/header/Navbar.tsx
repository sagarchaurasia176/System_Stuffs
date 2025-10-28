"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // const NAV_ITEMS = [
  //   { name: "Home", path: "/" },
  //   { name: "Blogs", path: "/blogs" },
  //   { name: "About", path: "/about" },
  //   { name: "Contact", path: "/contact" },
  // ];

  return (
    <header className="w-full shadow-md text-center sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-blue-600 tracking-wide">
          DevOps<span className="text-gray-800">By Sagar</span>
        </Link>

        {/* Desktop Menu */}
        {/* <ul className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul> */}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
            <Link href="/" className="text-2xl font-bold text-blue-600 tracking-wide">
          DevOps<span className="text-gray-800">By Sagar</span>
        </Link>
          {/* <ul className="flex flex-col items-center space-y-4 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul> */}
        </div>
      )}
    </header>
  );
}
