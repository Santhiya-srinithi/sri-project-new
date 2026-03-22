import { CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
    const points = ["Expert Mentors", "Hands-on Projects", "Career Support"];

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-12">Why Choose Us</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {points.map((p, i) => (
                        <div key={i} className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
                            <CheckCircle className="mx-auto text-indigo-600 mb-3" size={32} />
                            <p className="text-lg">{p}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}