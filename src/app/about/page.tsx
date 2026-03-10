import Navbar from '@/components/navbar'

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#f8f9fc]">
                <section className="page-header text-white py-28">
                    <div className="max-w-6xl mx-auto px-8 relative z-10">
                        <span className="inline-block bg-jboi-yellow/15 text-jboi-yellow text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-jboi-yellow/25 mb-6">About</span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">About JBOI</h1>
                        <p className="text-xl text-blue-200/80">Junior Balkan Olympiad in Informatics</p>
                    </div>
                </section>

                <section className="py-20 bg-white relative">
                    <div className="max-w-4xl mx-auto px-8">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-1 bg-jboi-blue rounded-full"></div>
                            <h2 className="text-3xl font-bold text-navy">What is JBOI?</h2>
                        </div>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
                            <p>
                                Junior Balkan Olympiad in Informatics (JBOI) is a programming competition for secondary school students from countries in and around the Balkan region.
                                Contestants solve demanding algorithmic and problem-solving tasks under competition conditions.
                            </p>
                            <p>
                                National teams are formed through each country&apos;s olympiad process. Delegations typically include up to four contestants and team leaders,
                                creating a competitive but collaborative environment where students exchange experience, learn from one another, and build international friendships.
                            </p>
                            <p>
                                JBOI also serves as preparation for higher-level informatics competitions. For the 2026 edition, Sarajevo hosts participants for a full week
                                of contests, official events, and cultural activities.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
