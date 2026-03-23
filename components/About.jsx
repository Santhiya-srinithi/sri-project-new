"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold mb-6 text-gray-800">
                        About <span className="text-indigo-600">Altalya</span>
                    </h2>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                        Altalya is an AI-first innovation center dedicated to empowering students
                        with cutting-edge technologies like Artificial Intelligence, Robotics,
                        and IoT.
                    </p>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        We provide hands-on training, internships, and real-world project experience
                        to prepare students for industry demands and future careers.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm">
                            AI & ML
                        </span>
                        <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm">
                            Robotics
                        </span>
                        <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm">
                            IoT
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="bg-white/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300">

                        <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
                            🚀 Our Mission
                        </h3>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            To bridge the gap between academic learning and industry
                            requirements through innovation, mentorship, and practical exposure.
                        </p>

                        <div className="flex items-center gap-3 mt-4">
                            <div className="w-10 h-10 flex items-center justify-center bg-indigo-100 rounded-full">
                                💡
                            </div>
                            <p className="text-gray-600 text-sm">
                                Focused on real-world innovation & career growth
                            </p>
                        </div>

                    </div>

                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-300 rounded-full blur-3xl opacity-30"></div>
                </motion.div>

            </div>
        </section>
    );
}