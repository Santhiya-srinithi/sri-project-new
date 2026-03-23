"use client";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-xl font-bold text-indigo-600">Altalya</h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
                    <a href="#home" className="hover:text-indigo-600">Home</a>
                    <a href="#about" className="hover:text-indigo-600">About</a>
                    <a href="#contact" className="hover:text-indigo-600">Contact</a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <div className="md:hidden bg-white px-6 pb-4 space-y-3">
                    <a href="#home" className="block">Home</a>
                    <a href="#about" className="block">About</a>
                    <a href="#contact" className="block">Contact</a>
                </div>
            )}
        </nav>
    );
}