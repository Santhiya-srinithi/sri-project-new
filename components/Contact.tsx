export default function Contact() {
    return (
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

                <form className="max-w-md mx-auto space-y-4">
                    <input className="w-full p-3 rounded-lg text-black" placeholder="Name" />
                    <input className="w-full p-3 rounded-lg text-black" placeholder="Email" />
                    <textarea className="w-full p-3 rounded-lg text-black" placeholder="Message" />
                    <button className="bg-black px-6 py-3 rounded-lg hover:opacity-80">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}