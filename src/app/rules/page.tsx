import Navbar from '@/components/navbar'

export default function RulesPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white py-32">
                    <div className="max-w-6xl mx-auto px-8">
                        <h1 className="text-6xl font-bold mb-4">Competition Rules</h1>
                        <p className="text-2xl text-red-100">Tournament Regulations and Guidelines</p>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-8">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">General Regulations</h2>

                            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-xl p-8 mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Competition Format</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    The Judo Bosnia Open International 2026 will be conducted in accordance with the International Judo Federation rules
                                    and regulations. All matches will follow the standard IJF competition format.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Eligibility</h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-500 text-xl mt-1">✓</span>
                                            <span>Athletes must be registered members of their national judo federation</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-500 text-xl mt-1">✓</span>
                                            <span>Participants must be born between 2008 and 2012 for junior categories</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-500 text-xl mt-1">✓</span>
                                            <span>Valid passport or national ID required for international competitors</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-500 text-xl mt-1">✓</span>
                                            <span>Medical clearance certificate mandatory for all participants</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Weigh-In Procedures</h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500 text-xl mt-1">●</span>
                                            <span>Official weigh-in will take place on Friday, June 14, 2026, from 14:00 to 16:00</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500 text-xl mt-1">●</span>
                                            <span>Athletes must weigh in wearing their judogi</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500 text-xl mt-1">●</span>
                                            <span>Athletes exceeding their weight category will be disqualified</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500 text-xl mt-1">●</span>
                                            <span>One re-weigh opportunity within the designated time period</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Match Duration</h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start gap-3">
                                            <span className="text-purple-500 text-xl mt-1">●</span>
                                            <span>Preliminary rounds: 3 minutes</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-purple-500 text-xl mt-1">●</span>
                                            <span>Semi-finals: 4 minutes</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-purple-500 text-xl mt-1">●</span>
                                            <span>Finals: 5 minutes</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-purple-500 text-xl mt-1">●</span>
                                            <span>Golden score will apply if match ends in a draw</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Judogi Requirements</h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start gap-3">
                                            <span className="text-orange-500 text-xl mt-1">●</span>
                                            <span>Judogi must conform to IJF standards and regulations</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-orange-500 text-xl mt-1">●</span>
                                            <span>Blue and white judogi required for competition</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-orange-500 text-xl mt-1">●</span>
                                            <span>National federation patches must be properly affixed</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-orange-500 text-xl mt-1">●</span>
                                            <span>Judogi control will be performed before each match</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Scoring System</h3>
                                    <p className="text-gray-700 mb-4">
                                        Competition follows the standard IJF scoring system:
                                    </p>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start gap-3">
                                            <span className="text-yellow-500 text-xl mt-1">⚡</span>
                                            <span><strong>Ippon:</strong> Full point - Immediate win</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-yellow-500 text-xl mt-1">⚡</span>
                                            <span><strong>Waza-ari:</strong> Half point - Two waza-ari equals ippon</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-yellow-500 text-xl mt-1">⚡</span>
                                            <span><strong>Penalties:</strong> Shido system applies</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 rounded-xl p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Notes</h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 text-xl mt-1">!</span>
                                            <span>All participants must attend the technical meeting on June 14, 2026</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 text-xl mt-1">!</span>
                                            <span>Protests must be submitted in writing within 10 minutes of the disputed decision</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 text-xl mt-1">!</span>
                                            <span>The organizing committee reserves the right to modify the draw to ensure fair competition</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-12 bg-gray-50 rounded-xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Information</h3>
                                <p className="text-gray-700">
                                    For complete competition regulations and detailed rules, please contact the organizing committee.
                                    All decisions made by the referee commission are final.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
