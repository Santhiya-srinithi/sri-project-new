"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Arun",
            text: "The training helped me gain real industry experience and confidence.",
        },
        {
            name: "Priya",
            text: "Amazing mentors and hands-on learning approach!",
        },
        {
            name: "Rahul",
            text: "I secured an internship after completing this program.",
        },
    ];

    return (
        <section
            id="testimonials"
            className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50"
        >
            <div className="text-center mb-14">
                <h2 className="text-4xl font-bold text-gray-800">
                    What <span className="text-indigo-600">Students Say</span>
                </h2>
                <p className="text-gray-600 mt-3">
                    Real feedback from our learners
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="group bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-md border border-gray-200 hover:shadow-2xl hover:-translate-y-3 transition duration-300"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold">
                                {item.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">
                                    {item.name}
                                </h4>
                                <div className="text-yellow-400 text-sm">
                                    ⭐⭐⭐⭐⭐
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-4">
                            “{item.text}”
                        </p>

                        <div className="h-1 w-10 bg-indigo-500 rounded-full group-hover:w-16 transition-all"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}