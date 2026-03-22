"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
    const reviews = ["Amazing!", "Best course!", "Loved it!"];

    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-12">Testimonials</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((r, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-white p-6 rounded-2xl shadow-xl"
                        >
                            <p>"{r}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}