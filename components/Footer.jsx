export default function Footer() {
    return (
        <footer className="bg-black text-white py-8 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center md:text-left">

                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold mb-2">Altalya</h2>
                    <p className="text-gray-400 text-sm">
                        AI-first innovation center for future-ready skills.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-gray-400">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-semibold mb-2">Contact</h3>
                    <p className="text-gray-400 text-sm">+91 7560056003</p>
                    <p className="text-gray-400 text-sm">info@altalya.com</p>
                </div>

            </div>

            <div className="text-center text-gray-500 text-sm mt-6">
                © 2026 Altalya. All rights reserved.
            </div>
        </footer>
    );
}