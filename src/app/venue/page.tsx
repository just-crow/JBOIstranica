import Navbar from '@/components/navbar'

export default function VenuePage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                <section className="relative bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 text-white py-32">
                    <div className="max-w-6xl mx-auto px-8">
                        <h1 className="text-6xl font-bold mb-4">Venue</h1>
                        <p className="text-2xl text-purple-100">Competition Location - Sarajevo, Bosnia and Herzegovina</p>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
                                <h2 className="text-4xl font-bold text-gray-900 mb-8">Faculty of Electrical Engineering Sarajevo</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-green-100 p-3 rounded-lg shrink-0">
                                            <span className="text-2xl">📍</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-1">Address</h3>
                                            <p className="text-gray-600">Faculty of Electrical Engineering</p>
                                            <p className="text-gray-600">Zmaja od Bosne bb</p>
                                            <p className="text-gray-600">71000 Sarajevo, Bosnia and Herzegovina</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                                            <span className="text-2xl">🚗</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-1">Getting There</h3>
                                            <p className="text-gray-600">
                                                Located in central Sarajevo, easily accessible by public transport.
                                                Tram lines 3 and 5 stop nearby at Marsal Tito station.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-yellow-100 p-3 rounded-lg shrink-0">
                                            <span className="text-2xl">🏨</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-1">Accommodation</h3>
                                            <p className="text-gray-600">
                                                Multiple hotels within walking distance. Official accommodation details will be
                                                provided to registered teams closer to the event date.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-red-100 p-3 rounded-lg shrink-0">
                                            <span className="text-2xl">💻</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-1">Facilities</h3>
                                            <p className="text-gray-600">
                                                Modern computer labs, high-speed internet, competition servers, and technical support
                                                available throughout the competition.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-200 rounded-2xl h-[600px] flex items-center justify-center text-gray-500 shadow-xl">
                                <div className="text-center p-8">
                                    <span className="text-7xl mb-4 block">🗺️</span>
                                    <p className="text-2xl font-medium text-gray-700">Map</p>
                                    <p className="text-lg mt-3 text-gray-600">Interactive map showing venue location</p>
                                    <p className="text-sm mt-4 text-gray-500">Faculty of Electrical Engineering, Sarajevo</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Competition Facilities</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-10 shadow-xl text-center">
                                    <div className="text-6xl font-bold mb-3">50+</div>
                                    <p className="text-2xl font-medium mb-2">Competition Computers</p>
                                    <p className="text-green-100">Modern workstations with Linux</p>
                                </div>
                                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-10 shadow-xl text-center">
                                    <div className="text-6xl font-bold mb-3">3</div>
                                    <p className="text-2xl font-medium mb-2">Computer Labs</p>
                                    <p className="text-blue-100">Dedicated competition spaces</p>
                                </div>
                                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-10 shadow-xl text-center">
                                    <div className="text-6xl font-bold mb-3">24/7</div>
                                    <p className="text-2xl font-medium mb-2">Technical Support</p>
                                    <p className="text-purple-100">On-site IT team</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
