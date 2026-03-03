import Navbar from '@/components/navbar'

export default function SchedulePage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#f8f9fc]">
                <section className="page-header text-white py-28">
                    <div className="max-w-6xl mx-auto px-8 relative z-10">
                        <span className="inline-block bg-jboi-yellow/15 text-jboi-yellow text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-jboi-yellow/25 mb-6">Program</span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">Schedule</h1>
                        <p className="text-xl text-blue-200/80">Competition Program &mdash; September 21&ndash;27, 2026</p>
                    </div>
                </section>

                <section className="py-20 relative">
                    <div className="absolute inset-0 geo-grid opacity-20"></div>
                    <div className="max-w-6xl mx-auto px-8 relative">
                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 hover:border-jboi-blue/20 transition-all duration-300 hover:shadow-lg group">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 rounded-xl bg-jboi-blue/10 flex items-center justify-center">
                                            <span className="text-jboi-blue font-bold text-lg">01</span>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl md:text-3xl font-bold text-navy">Friday, September 22</h2>
                                            <p className="text-sm text-gray-500 mt-1">Arrival & Registration</p>
                                        </div>
                                    </div>
                                    <span className="bg-jboi-blue text-white px-5 py-1.5 rounded-full font-semibold text-sm">Day 1</span>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 hover:border-jboi-yellow/30 transition-all duration-300 hover:shadow-lg group">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 rounded-xl bg-jboi-yellow/15 flex items-center justify-center">
                                            <span className="text-jboi-yellow font-bold text-lg">02</span>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl md:text-3xl font-bold text-navy">Saturday, September 23</h2>
                                            <p className="text-sm text-gray-500 mt-1">Competition Day 1</p>
                                        </div>
                                    </div>
                                    <span className="bg-jboi-yellow text-navy px-5 py-1.5 rounded-full font-semibold text-sm">Day 2</span>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 hover:border-navy/10 transition-all duration-300 hover:shadow-lg group">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 rounded-xl bg-navy/8 flex items-center justify-center">
                                            <span className="text-navy font-bold text-lg">03</span>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl md:text-3xl font-bold text-navy">Sunday, September 24</h2>
                                            <p className="text-sm text-gray-500 mt-1">Competition Day 2</p>
                                        </div>
                                    </div>
                                    <span className="bg-navy text-white px-5 py-1.5 rounded-full font-semibold text-sm">Day 3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
