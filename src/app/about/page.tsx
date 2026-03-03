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
                            <h2 className="text-3xl font-bold text-navy">Lorem Ipsum</h2>
                        </div>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
