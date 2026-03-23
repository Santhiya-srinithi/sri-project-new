"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
    const points = [
        {
            title: "Industry Expert Mentors",
            icon: "👨‍🏫",
        },
        {
            title: "Hands-on Project Training",
            icon: "🛠️",
        },
        {
            title: "Internship Opportunities",
            icon: "💼",
        },
        {
            title: "Placement Support",
            icon: "📈",
        },
    ];

    return (
        <section
            id="why"
            className="py-24 px-6 bg-gradient-to-b from-indigo-50 to-white"
        >
            <div className="max-w-7xl mx-auto text-center mb-14">
                <h2 className="text-4xl font-bold text-gray-800">
                    Why <span className="text-indigo-600">Choose Us</span>
                </h2>
                <p className="text-gray-600 mt-3">
                    We provide everything you need to succeed in your tech career
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {points.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="group bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-md border border-gray-200 hover:shadow-2xl hover:-translate-y-3 transition duration-300 text-center cursor-pointer"
                    >
                        <div className="text-5xl mb-4 group-hover:scale-110 transition">
                            {item.icon}
                        </div>

                        <h3 className="text-lg font-semibold text-gray-700 group-hover:text-indigo-600 transition">
                            {item.title}
                        </h3>

                        <div className="mt-4 h-1 w-10 bg-indigo-500 mx-auto rounded-full group-hover:w-16 transition-all"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}