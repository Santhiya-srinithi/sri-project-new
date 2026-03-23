"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="home"
            className="pt-24 min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6"
        >
            <div className="text-center max-w-3xl">

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                >
                    Build Your Future with AI Innovation
                </motion.h1>

                <p className="text-lg md:text-xl mb-8 text-gray-100">
                    Altalya empowers students with AI, Robotics & IoT skills for real-world success.
                </p>

                <div className="flex justify-center gap-4 flex-wrap">
                    <a
                        href="#courses"
                        className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
                    >
                        Explore Courses
                    </a>

                    <a
                        href="#contact"
                        className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-indigo-600 transition"
                    >
                        Contact Us
                    </a>
                </div>

            </div>
        </section>
    );
}