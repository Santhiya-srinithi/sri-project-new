export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 bg-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                Contact Us
            </h2>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

                <div>
                    <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                        Get in Touch
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Have questions about courses, internships, or training? Reach out to us.
                    </p>

                    <p className="text-gray-700 mb-2">📞 +91 7560056003</p>
                    <p className="text-gray-700">📧 info@altalya.com</p>
                </div>

                <form className="bg-white p-6 rounded-2xl shadow-lg grid gap-5">

                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">
                            Message
                        </label>
                        <textarea
                            rows={4}
                            placeholder="Enter your message"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
                    >
                        Send Message
                    </button>

                </form>
            </div>
        </section>
    );
}