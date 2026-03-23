"use client";
import { useState } from "react";

export default function Courses() {
    const [active, setActive] = useState(null);

    const courses = [
        {
            id: "ai-ml",
            title: "Artificial Intelligence & Machine Learning",
            desc: "Learn core AI concepts, machine learning algorithms, deep learning, and real-world applications using Python.",
            more: "Covers ML algorithms, neural networks, NLP, computer vision, and real-time AI projects using Python.",
            icon: "🤖",
        },
        {
            id: "robotics",
            title: "Robotics",
            desc: "Design and build intelligent robots with sensors, microcontrollers, and automation techniques.",
            more: "Includes Arduino, sensors, motors, automation systems, and real-world robotics applications.",
            icon: "🦾",
        },
        {
            id: "iot",
            title: "Internet of Things (IoT)",
            desc: "Connect devices and build smart systems using IoT platforms, sensors, and cloud integration.",
            more: "Learn IoT architecture, cloud connectivity, sensors, and smart system development.",
            icon: "🌐",
        },
        {
            id: "fullstack",
            title: "Full Stack Development",
            desc: "Develop modern web applications using React, Node.js, databases, and deployment tools.",
            more: "Covers frontend, backend, APIs, authentication, and deployment with real projects.",
            icon: "💻",
        },
    ];

    const toggle = (id) => {
        setActive(active === id ? null : id);
    };

    return (
        <section id="courses" className="py-20 px-6 bg-white">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Our Courses
                </h2>
                <p className="text-gray-600 mt-3">
                    Industry-focused programs designed for real-world skills
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="group bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300"
                    >
                        <div className="text-4xl mb-4">{course.icon}</div>

                        <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                            {course.title}
                        </h3>

                        <p className="text-gray-600 text-sm">
                            {course.desc}
                        </p>

                        <button
                            onClick={() => toggle(course.id)}
                            className="mt-4 text-indigo-600 font-medium hover:underline"
                        >
                            {active === course.id ? "Show Less ↑" : "Learn More →"}
                        </button>

                        {active === course.id && (
                            <div className="mt-4 text-sm text-gray-700 border-t pt-3 animate-fadeIn">
                                {course.more}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}