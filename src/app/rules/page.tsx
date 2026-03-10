import Navbar from '@/components/navbar'

export default function RulesPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#f8f9fc]">
                <section className="page-header text-white py-28">
                    <div className="max-w-6xl mx-auto px-8 relative z-10">
                        <span className="inline-block bg-jboi-yellow/15 text-jboi-yellow text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-jboi-yellow/25 mb-6">Regulations</span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">Rules</h1>
                        <p className="text-xl text-blue-200/80">Competition rules and regulations</p>
                    </div>
                </section>

                <section className="py-20 bg-white relative">
                    <div className="max-w-4xl mx-auto px-8">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-10 h-1 bg-jboi-blue rounded-full"></div>
                            <h2 className="text-3xl font-bold text-navy">Competition Rules (Summary)</h2>
                        </div>

                        <div className="space-y-4">
                            {[
                                'Each regular participating country may enter a team of up to four secondary school contestants and two team leaders.',
                                'The contest consists of two competition days; each day is a 4-hour round with algorithmic programming tasks.',
                                'Official task statements are provided in English, with local-language translations coordinated by team leaders.',
                                'Only the provided computers, software, and approved tools may be used during competition rounds.',
                                'Solutions are submitted through the official grading system; scoring is based on test groups and subtasks.',
                                'Time, memory, and source-size limits are enforced for each task as stated in the problem statements.',
                                'During rounds, communication with other contestants and use of unauthorized devices/materials is strictly forbidden.',
                                'In case of technical or grading concerns, clarifications and appeals must follow the official process and deadlines.',
                                'Final rankings and medals are determined by the official scoring and JBOI medal allocation rules.',
                            ].map((rule, i) => (
                                <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-[#f8f9fc] border border-gray-100 hover:border-jboi-blue/15 transition-all duration-200">
                                    <div className="w-8 h-8 rounded-lg bg-jboi-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-jboi-blue font-bold text-xs">{String(i + 1).padStart(2, '0')}</span>
                                    </div>
                                    <span className="text-gray-600 leading-relaxed">{rule}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-sm text-gray-500 mt-8">
                            For complete and authoritative regulations, please refer to the official JBOI rulebook provided by the organizers.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
