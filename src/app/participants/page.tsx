import Navbar from '@/components/navbar'

export default function ParticipantsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                <section className="relative bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-500 text-white py-32">
                    <div className="max-w-6xl mx-auto px-8">
                        <h1 className="text-6xl font-bold mb-4">Participants</h1>
                        <p className="text-2xl text-indigo-100">Competing Teams and Athletes</p>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">International Participation</h2>
                            <p className="text-xl text-gray-600">
                                Athletes from multiple countries will compete in JBOI 2026
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-500 rounded-xl p-8 mb-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Registration Status</h3>
                            <p className="text-lg text-gray-700">
                                Participant list will be published here as teams register for the tournament.
                                Registration opens on March 1, 2026.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="text-4xl">🇧🇦</div>
                                    <h3 className="text-2xl font-bold text-gray-900">Bosnia and Herzegovina</h3>
                                </div>
                                <p className="text-gray-600">Host nation team</p>
                                <div className="mt-4 text-sm text-gray-500">TBA athletes</div>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="text-4xl">🇭🇷</div>
                                    <h3 className="text-2xl font-bold text-gray-900">Croatia</h3>
                                </div>
                                <p className="text-gray-600">Participating nation</p>
                                <div className="mt-4 text-sm text-gray-500">TBA athletes</div>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="text-4xl">🇷🇸</div>
                                    <h3 className="text-2xl font-bold text-gray-900">Serbia</h3>
                                </div>
                                <p className="text-gray-600">Participating nation</p>
                                <div className="mt-4 text-sm text-gray-500">TBA athletes</div>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="text-4xl">🇲🇪</div>
                                    <h3 className="text-2xl font-bold text-gray-900">Montenegro</h3>
                                </div>
                                <p className="text-gray-600">Participating nation</p>
                                <div className="mt-4 text-sm text-gray-500">TBA athletes</div>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="text-4xl">🇸🇮</div>
                                    <h3 className="text-2xl font-bold text-gray-900">Slovenia</h3>
                                </div>
                                <p className="text-gray-600">Participating nation</p>
                                <div className="mt-4 text-sm text-gray-500">TBA athletes</div>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="text-4xl">🇲🇰</div>
                                    <h3 className="text-2xl font-bold text-gray-900">North Macedonia</h3>
                                </div>
                                <p className="text-gray-600">Participating nation</p>
                                <div className="mt-4 text-sm text-gray-500">TBA athletes</div>
                            </div>
                        </div>

                        <div className="mt-16 bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Weight Categories</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-2xl font-bold text-blue-600 mb-4">Male Categories</h4>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-center gap-2"><span className="text-green-500">●</span> -55 kg</li>
                                        <li className="flex items-center gap-2"><span className="text-green-500">●</span> -60 kg</li>
                                        <li className="flex items-center gap-2"><span className="text-green-500">●</span> -66 kg</li>
                                        <li className="flex items-center gap-2"><span className="text-green-500">●</span> -73 kg</li>
                                        <li className="flex items-center gap-2"><span className="text-green-500">●</span> -81 kg</li>
                                        <li className="flex items-center gap-2"><span className="text-green-500">●</span> -90 kg</li>
                                        <li className="flex items-center gap-2"><span className="text-green-500">●</span> +90 kg</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-pink-600 mb-4">Female Categories</h4>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-center gap-2"><span className="text-pink-500">●</span> -48 kg</li>
                                        <li className="flex items-center gap-2"><span className="text-pink-500">●</span> -52 kg</li>
                                        <li className="flex items-center gap-2"><span className="text-pink-500">●</span> -57 kg</li>
                                        <li className="flex items-center gap-2"><span className="text-pink-500">●</span> -63 kg</li>
                                        <li className="flex items-center gap-2"><span className="text-pink-500">●</span> -70 kg</li>
                                        <li className="flex items-center gap-2"><span className="text-pink-500">●</span> -78 kg</li>
                                        <li className="flex items-center gap-2"><span className="text-pink-500">●</span> +78 kg</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
