import Navbar from '@/components/navbar'

export default function RulesPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white py-32">
                    <div className="max-w-6xl mx-auto px-8">
                        <h1 className="text-6xl font-bold mb-4">Contest Rules</h1>
                        <p className="text-2xl text-red-100">Competition Regulations and Guidelines</p>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-8">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">Competition Regulations</h2>

                            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-xl p-8 mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contest Format</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    The Junior Balkan Olympiad in Informatics 2026 consists of two competition days, each lasting 5 hours.
                                    Contestants solve algorithmic problems using programming languages C++, Java, or Python.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Eligibility Requirements</h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-500 text-xl mt-1">✓</span>
                                            <span>Contestants must be students born in 2010 or later</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-500 text-xl mt-1">✓</span>
                                            <span>Not enrolled in any university or higher education institution</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-500 text-xl mt-1">✓</span>
                                            <span>Registered through their national informatics olympiad organization</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-500 text-xl mt-1">✓</span>
                                            <span>Maximum of 4 contestants per country</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Competition Days</h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500 text-xl mt-1">●</span>
                                            <span>Two competition days: Saturday, June 15 and Sunday, June 16, 2026</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500 text-xl mt-1">●</span>
                                            <span>Each day: 5 hours of competition time (09:00 - 14:00)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500 text-xl mt-1">●</span>
                                            <span>3 algorithmic problems per competition day</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500 text-xl mt-1">●</span>
                                            <span>Individual competition - no collaboration permitted</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Programming Environment</h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start gap-3">
                                            <span className="text-purple-500 text-xl mt-1">●</span>
                                            <span>Allowed programming languages: C++17, Java 11, Python 3</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-purple-500 text-xl mt-1">●</span>
                                            <span>Standard libraries and STL permitted</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-purple-500 text-xl mt-1">●</span>
                                            <span>Linux-based competition environment</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-purple-500 text-xl mt-1">●</span>
                                            <span>No internet access during competition</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Grading and Scoring</h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start gap-3">
                                            <span className="text-orange-500 text-xl mt-1">●</span>
                                            <span>Automated grading system with test cases</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-orange-500 text-xl mt-1">●</span>
                                            <span>Partial scoring available for partially correct solutions</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-orange-500 text-xl mt-1">●</span>
                                            <span>100 points maximum per problem</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-orange-500 text-xl mt-1">●</span>
                                            <span>Total maximum score: 600 points (6 problems)</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Medals and Awards</h3>
                                    <p className="text-gray-700 mb-4">
                                        Awards are distributed based on final scores:
                                    </p>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start gap-3">
                                            <span className="text-yellow-500 text-xl mt-1">🥇</span>
                                            <span><strong>Gold Medal:</strong> Top 1/12 of contestants</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-gray-400 text-xl mt-1">🥈</span>
                                            <span><strong>Silver Medal:</strong> Next 2/12 of contestants</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-600 text-xl mt-1">🥉</span>
                                            <span><strong>Bronze Medal:</strong> Next 3/12 of contestants</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 rounded-xl p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Notes</h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 text-xl mt-1">!</span>
                                            <span>All contestants must attend the practice session on June 14, 2026</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 text-xl mt-1">!</span>
                                            <span>Appeals must be submitted within 1 hour after results announcement</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 text-xl mt-1">!</span>
                                            <span>Contestants may only use documentation provided by the competition system</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-12 bg-gray-50 rounded-xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Information</h3>
                                <p className="text-gray-700">
                                    For complete competition regulations and technical specifications, please contact the organizing committee.
                                    All decisions made by the scientific committee are final.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
