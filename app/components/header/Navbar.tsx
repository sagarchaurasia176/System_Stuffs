"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full shadow-md text-center sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-blue-600 tracking-wide">
          DevOps<span className="text-gray-800">By Sagar</span>
        </Link>

       
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
        
        </div>
      )}
    </header>
  );
}
