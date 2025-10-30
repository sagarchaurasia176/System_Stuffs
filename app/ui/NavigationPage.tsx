"use client";

import { useEffect, useState } from "react";
import { testimonials } from "../datas/testiomonials";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function NavigationPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Close mobile menu on page reload/mount
  useEffect(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "glass-effect shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="text-base flex justify-between">
            <Link href="/" className=" hover-scale text-lg">
              <span className="text-2xl md:text-3xl font-bold text-white slide-up">
                DevOps<span className="text-blue-400 underline">By</span>Sagar
              </span>
            </Link>
 
            <div className="hidden md:flex items-center space-x-8">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg cursor-pointer font-semibold hover:opacity-90 transition-all hover-scale">
                Subscribe
              </button>
            </div> 
            <button
              className="md:hidden text-white hover-scale"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden glass-effect border-t border-white/10 slide-up">
             <div className="container mx-auto px-6 py-4 space-y-4">
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all hover-scale">
                Subscribe
              </button>
            </div> 
          </div>
        )}
      </nav>
    </>
  );
}
