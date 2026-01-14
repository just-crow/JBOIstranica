import Navbar from '@/components/navbar'

export default function SchedulePage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-32">
                    <div className="max-w-6xl mx-auto px-8">
                        <h1 className="text-6xl font-bold mb-4">Schedule</h1>
                        <p className="text-2xl text-blue-100">Competition Program - June 14-16, 2026</p>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-8">
                        <div className="space-y-8">
                            <div className="bg-white rounded-2xl p-10 shadow-xl border-l-4 border-green-500">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-4xl font-bold text-gray-900">Friday, June 14, 2026</h2>
                                    <span className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold text-lg">Day 1</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-6 py-4 border-b border-gray-100">
                                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold text-lg min-w-[120px]">09:00</span>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg">Team Leaders Meeting</h3>
                                            <p className="text-gray-600">Briefing and organization details</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6 py-4 border-b border-gray-100">
                                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold text-lg min-w-[120px]">14:00</span>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg">Registration and Arrival</h3>
                                            <p className="text-gray-600">Participant check-in and welcome</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6 py-4 border-b border-gray-100">
                                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold text-lg min-w-[120px]">16:00</span>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg">Practice Session</h3>
                                            <p className="text-gray-600">Contestants familiarize with competition environment</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6 py-4">
                                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold text-lg min-w-[120px]">19:00</span>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg">Opening Ceremony</h3>
                                            <p className="text-gray-600">Official competition opening and welcome address</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-10 shadow-xl border-l-4 border-blue-500">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-4xl font-bold text-gray-900">Saturday, June 15, 2026</h2>
                                    <span className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold text-lg">Day 2</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-6 py-4 border-b border-gray-100">
                                        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-bold text-lg min-w-[120px]">09:00</span>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg">Contest Day 1</h3>
                                            <p className="text-gray-600">First competition day - 5 hours of programming</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6 py-4 border-b border-gray-100">
                                        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-bold text-lg min-w-[120px]">14:00</span>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg">Lunch Break</h3>
                                            <p className="text-gray-600">Rest and refreshments</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6 py-4 border-b border-gray-100">
                                        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-bold text-lg min-w-[120px]">15:30</span>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg">Task Discussion</h3>
                                            <p className="text-gray-600">Team leaders review competition tasks</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6 py-4">
                                        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-bold text-lg min-w-[120px]">19:00</span>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg">Social Event</h3>
                                            <p className="text-gray-600">Cultural program and networking</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-10 shadow-xl border-l-4 border-yellow-500">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-4xl font-bold text-gray-900">Sunday, June 16, 2026</h2>
                                    <span className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold text-lg">Day 3</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-6 py-4 border-b border-gray-100">
                                        <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg font-bold text-lg min-w-[120px]">09:00</span>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg">Contest Day 2</h3>
                                            <p className="text-gray-600">Second competition day - 5 hours of programming</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6 py-4 border-b border-gray-100">
                                        <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg font-bold text-lg min-w-[120px]">14:00</span>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg">Results Processing</h3>
                                            <p className="text-gray-600">Grading and final scoring</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6 py-4">
                                        <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg font-bold text-lg min-w-[120px]">16:00</span>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg">Closing Ceremony</h3>
                                            <p className="text-gray-600">Award ceremony and competition conclusion</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
