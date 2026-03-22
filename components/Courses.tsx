"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Courses() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const courses = [
        {
            name: "Web Development",
            desc: "React, Next.js, Full Stack",
            details: [
                "HTML, CSS, JavaScript",
                "React & Next.js",
                "Backend with Node.js",
            ],
        },
        {
            name: "AI & ML",
            desc: "Python, ML models",
            details: [
                "Python Programming",
                "Machine Learning Algorithms",
                "Model Training",
            ],
        },
        {
            name: "Data Science",
            desc: "Analytics, Visualization",
            details: [
                "Data Analysis",
                "Pandas & NumPy",
                "Data Visualization",
            ],
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-12">Our Courses</h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {courses.map((c, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.08 }}
                            className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-lg"
                        >
                            <h3 className="text-xl font-semibold mb-2">{c.name}</h3>
                            <p className="text-sm opacity-80">{c.desc}</p>

                            {/* BUTTON */}
                            <button
                                onClick={() =>
                                    setActiveIndex(activeIndex === i ? null : i)
                                }
                                className="mt-4 px-4 py-2 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition"
                            >
                                {activeIndex === i ? "Hide Details" : "Learn More"}
                            </button>

                            {/* DETAILS */}
                            {activeIndex === i && (
                                <div className="mt-4 text-left text-sm bg-white/5 p-4 rounded-lg">
                                    <ul className="space-y-1">
                                        {c.details.map((item, idx) => (
                                            <li key={idx}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}