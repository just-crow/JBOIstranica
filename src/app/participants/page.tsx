import Navbar from '@/components/navbar'

export default function ParticipantsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#f8f9fc]">
                <section className="page-header text-white py-28">
                    <div className="max-w-6xl mx-auto px-8 relative z-10">
                        <span className="inline-block bg-jboi-yellow/15 text-jboi-yellow text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-jboi-yellow/25 mb-6">Teams</span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">Participants</h1>
                        <p className="text-xl text-blue-200/80">Competing teams and delegations</p>
                    </div>
                </section>

                <section className="py-20 relative">
                    <div className="absolute inset-0 geo-grid opacity-20"></div>
                    <div className="max-w-6xl mx-auto px-8 relative">
                        <div className="text-center mb-14">
                            <h2 className="text-3xl font-bold text-navy mb-3">Lorem Ipsum</h2>
                            <p className="text-gray-500 max-w-xl mx-auto">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <div className="w-12 h-1 bg-jboi-yellow mx-auto mt-5 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-jboi-blue/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-jboi-blue/10 flex items-center justify-center">
                                        <span className="text-jboi-blue font-bold text-sm">🇧🇦</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-navy">Lorem Ipsum</h3>
                                </div>
                                <p className="text-gray-500 text-sm">Lorem ipsum dolor</p>
                                <div className="mt-3 text-xs text-gray-400 font-medium">Lorem ipsum</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
