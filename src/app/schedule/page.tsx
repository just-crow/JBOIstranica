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

                            </div>

                            <div className="bg-white rounded-2xl p-10 shadow-xl border-l-4 border-blue-500">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-4xl font-bold text-gray-900">Saturday, June 15, 2026</h2>
                                    <span className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold text-lg">Day 2</span>
                                </div>

                            </div>

                            <div className="bg-white rounded-2xl p-10 shadow-xl border-l-4 border-yellow-500">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-4xl font-bold text-gray-900">Sunday, June 16, 2026</h2>
                                    <span className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold text-lg">Day 3</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
