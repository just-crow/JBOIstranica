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

                            <ul className="space-y-4 text-gray-700 list-disc pl-6 leading-relaxed">
                                <li>The Junior Balkan Olympiad in Informatics 2026 consists of two competition days, each lasting 5 hours.</li>
                                <li>Contestants must be students born in 2010 or later and not enrolled in any university.</li>
                                <li>Each country is represented by a maximum of 4 contestants and 2 team leaders.</li>
                                <li>Contestants solve algorithmic problems using C++17, Java 11, or Python 3.</li>
                                <li>There are 3 algorithmic problems per competition day (6 total).</li>
                                <li>The competition is individual; no collaboration is permitted.</li>
                                <li>No internet access is allowed during the competition.</li>
                                <li>Solutions are graded by an automated system with a maximum score of 600 points.</li>
                                <li>Medals are awarded to the top performers (Gold: 1/12, Silver: 2/12, Bronze: 3/12).</li>
                                <li>All contestants must attend the practice session and follow the scientific committee's decisions.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
