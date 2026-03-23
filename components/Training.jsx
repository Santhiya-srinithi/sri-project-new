"use client";
import { useState } from "react";

export default function Training() {
    const [active, setActive] = useState(null);

    const programs = [
        {
            id: "internships",
            title: "Internships",
            desc: "Work on real-time projects and gain industry experience.",
            more: "Gain hands-on experience by working on live projects guided by industry experts.",
            icon: "🎓",
        },
        {
            id: "workshops",
            title: "Workshops",
            desc: "Participate in hands-on sessions with expert mentors.",
            more: "Interactive sessions focused on practical skills, tools, and real-world problem solving.",
            icon: "🛠️",
        },
        {
            id: "certifications",
            title: "Certifications",
            desc: "Earn industry-recognized certificates to boost your career.",
            more: "Get certified after completing training programs to enhance your professional profile.",
            icon: "📜",
        },
    ];

    const toggle = (id) => {
        setActive(active === id ? null : id);
    };

    return (
        <section id="training" className="py-20 px-6 bg-white">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Training Programs
                </h2>
                <p className="text-gray-600 mt-3">
                    Practical learning designed for real-world success
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {programs.map((item) => (
                    <div
                        key={item.id}
                        className="group bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-3 hover:bg-indigo-50 transition duration-300"
                    >
                        <div className="text-4xl mb-4 group-hover:scale-110 transition">
                            {item.icon}
                        </div>

                        <h3 className="text-xl font-semibold mb-3 text-indigo-600 group-hover:text-purple-600 transition">
                            {item.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            {item.desc}
                        </p>

                        <button
                            onClick={() => toggle(item.id)}
                            className="mt-4 text-indigo-600 font-medium hover:underline"
                        >
                            {active === item.id ? "Show Less ↑" : "Learn More →"}
                        </button>

                        {active === item.id && (
                            <div className="mt-4 text-sm text-gray-700 border-t pt-3 animate-fadeIn">
                                {item.more}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}