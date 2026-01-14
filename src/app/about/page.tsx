import Navbar from '@/components/navbar'

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-green-500 text-white py-32">
                    <div className="max-w-6xl mx-auto px-8">
                        <h1 className="text-6xl font-bold mb-4">About JBOI</h1>
                        <p className="text-2xl text-green-100">Junior Balkan Olympiad in Informatics</p>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-8">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">The Junior Balkan Olympiad in Informatics</h2>
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                            <p>
                                The Junior Balkan Olympiad in Informatics is a significant event, a stepping-stone, in the development
                                of the elite of the IT industry in the Balkan region. This prestigious competition brings together the
                                brightest young minds in computer science and algorithmic problem solving.
                            </p>
                            <p>
                                The aim and primary purpose of this elite educational event is to encourage the interest of young students
                                in IT and to stimulate competitive software development in the Balkans as a whole, as well as acknowledge
                                the best young IT talents. With JBOI, the IT community of the region wants to engage public attention with
                                the importance of science and technology for a sustainable future of the IT industry.
                            </p>
                            <p>
                                The competition demonstrates the efforts that all institutions involved are investing to encourage and
                                support the development of the most successful young talents in the field of informatics and computer science.
                                Participants compete in solving algorithmic problems using their programming skills and creative thinking.
                            </p>
                        </div>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 shadow-lg">
                                <div className="text-5xl mb-4">💻</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Algorithmic Challenges</h3>
                                <p className="text-gray-600">
                                    Complex programming problems testing algorithmic thinking and creative problem-solving skills.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 shadow-lg">
                                <div className="text-5xl mb-4">🌍</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Regional Competition</h3>
                                <p className="text-gray-600">
                                    Students from Balkan countries compete in this prestigious informatics olympiad.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-yellow-100 shadow-lg">
                                <div className="text-5xl mb-4">🏆</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Excellence Recognition</h3>
                                <p className="text-gray-600">
                                    Medals and recognition await the top performers in algorithmic problem solving.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
