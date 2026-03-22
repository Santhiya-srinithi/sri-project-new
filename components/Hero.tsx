"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-6xl font-extrabold mb-4">
                        Future-Ready <span className="text-yellow-300">Skills</span>
                    </h1>
                    <p className="mb-6 text-lg opacity-90">
                        Learn modern technologies with real-world projects.
                    </p>

                    <a href="#courses">
                        <button className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:scale-110 transition">
                            Explore Courses
                        </button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}