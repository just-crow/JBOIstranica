import Navbar from '@/components/navbar'

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                <section className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 text-white py-32">
                    <div className="max-w-6xl mx-auto px-8">
                        <h1 className="text-6xl font-bold mb-4">Contact</h1>
                        <p className="text-2xl text-gray-200">Get In Touch With The Organizing Committee</p>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-green-100 p-4 rounded-lg shrink-0">
                                                <span className="text-3xl">📧</span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-xl mb-2">Email</h3>
                                                <p className="text-gray-700 mb-1">General inquiries:</p>
                                                <a href="mailto:info@jboi2026.ba" className="text-green-600 hover:text-green-700 font-medium">info@jboi2026.ba</a>
                                                <p className="text-gray-700 mb-1 mt-3">Team registration:</p>
                                                <a href="mailto:registration@jboi2026.ba" className="text-green-600 hover:text-green-700 font-medium">registration@jboi2026.ba</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-blue-100 p-4 rounded-lg shrink-0">
                                                <span className="text-3xl">📱</span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-xl mb-2">Phone</h3>
                                                <p className="text-gray-700 mb-1">Office:</p>
                                                <a href="tel:+38733123456" className="text-blue-600 hover:text-blue-700 font-medium">+387 33 123 456</a>
                                                <p className="text-gray-700 mb-1 mt-3">Mobile:</p>
                                                <a href="tel:+38761234567" className="text-blue-600 hover:text-blue-700 font-medium">+387 61 234 567</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-purple-100 p-4 rounded-lg shrink-0">
                                                <span className="text-3xl">🏢</span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-xl mb-2">Office Address</h3>
                                                <p className="text-gray-700">Faculty of Electrical Engineering</p>
                                                <p className="text-gray-700">Zmaja od Bosne bb</p>
                                                <p className="text-gray-700">71000 Sarajevo</p>
                                                <p className="text-gray-700">Bosnia and Herzegovina</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-yellow-100 p-4 rounded-lg shrink-0">
                                                <span className="text-3xl">🌐</span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-xl mb-2">Social Media</h3>
                                                <div className="flex flex-wrap gap-3 mt-3">
                                                    <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                                                        Facebook
                                                    </a>
                                                    <a href="#" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                                                        Instagram
                                                    </a>
                                                    <a href="#" className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                                                        Twitter
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-200">
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                                <form className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="Message subject"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                                        <textarea
                                            id="message"
                                            rows={6}
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                                            placeholder="Your message"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
