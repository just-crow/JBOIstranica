import Navbar from '@/components/navbar'

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-green-500 text-white py-32">
                    <div className="max-w-6xl mx-auto px-8">
                        <h1 className="text-6xl font-bold mb-4">About JBOI</h1>
                        <p className="text-2xl text-green-100">Judo Bosnia Open International Championship</p>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-8">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">The Judo Bosnia Open International</h2>
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                            <p>
                                The Judo Bosnia Open International is a premier international judo competition, bringing together talented athletes from across Europe and beyond. This championship serves as a significant milestone in the development of young judokas, providing them with invaluable competitive experience on an international stage.
                            </p>
                            <p>
                                The aim and primary purpose of this elite sporting event is to encourage the interest of young athletes in judo
                                and to stimulate competitive excellence in Bosnia and Herzegovina as well as internationally. JBOI seeks to acknowledge
                                the best young judo talents and provide them with a platform to showcase their skills.
                            </p>
                            <p>
                                With the Judo Bosnia Open International, the judo community of Bosnia and Herzegovina wants to engage public
                                attention with the importance of sports and martial arts for character development and physical excellence. The
                                event demonstrates the efforts that all institutions involved are investing to encourage and support the development
                                of the most successful young talents in judo.
                            </p>
                        </div>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 shadow-lg">
                                <div className="text-5xl mb-4">🥋</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Elite Competition</h3>
                                <p className="text-gray-600">
                                    High-level judo competition featuring the best young athletes from participating nations.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 shadow-lg">
                                <div className="text-5xl mb-4">🌍</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">International Event</h3>
                                <p className="text-gray-600">
                                    Athletes from multiple countries compete in this prestigious international championship.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-yellow-100 shadow-lg">
                                <div className="text-5xl mb-4">🏆</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Championship Excellence</h3>
                                <p className="text-gray-600">
                                    Medals and recognition await the top performers in each weight category.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
