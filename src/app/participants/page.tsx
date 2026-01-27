import Navbar from '@/components/navbar'

export default function ParticipantsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                <section className="relative bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-500 text-white py-32">
                    <div className="max-w-6xl mx-auto px-8">
                        <h1 className="text-6xl font-bold mb-4">Participants</h1>
                        <p className="text-2xl text-indigo-100">Lorem Ipsum</p>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lorem Ipsum</h2>
                            <p className="text-xl text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                <div className="flex items-center gap-4 mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900">Lorem Ipsum</h3>
                                </div>
                                <p className="text-gray-600">Lorem ipsum dolor</p>
                                <div className="mt-4 text-sm text-gray-500">Lorem ipsum</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
