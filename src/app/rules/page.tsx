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
                            <h2 className="text-3xl font-bold text-navy">Lorem Ipsum Rules</h2>
                        </div>

                        <div className="space-y-4">
                            {[
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                                'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
                                'Nisi ut aliquip ex ea commodo consequat.',
                                'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
                            ].map((rule, i) => (
                                <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-[#f8f9fc] border border-gray-100 hover:border-jboi-blue/15 transition-all duration-200">
                                    <div className="w-8 h-8 rounded-lg bg-jboi-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-jboi-blue font-bold text-xs">{String(i + 1).padStart(2, '0')}</span>
                                    </div>
                                    <span className="text-gray-600 leading-relaxed">{rule}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
