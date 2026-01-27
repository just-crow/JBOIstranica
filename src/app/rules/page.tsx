import Navbar from '@/components/navbar'

export default function RulesPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white py-32">
                    <div className="max-w-6xl mx-auto px-8">
                        <h1 className="text-6xl font-bold mb-4">Rules</h1>
                        <p className="text-2xl text-red-100">Lorem Ipsum</p>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-8">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">Lorem Ipsum Rules</h2>

                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span>• Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span>• Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span>• Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span>• Nisi ut aliquip ex ea commodo consequat.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span>• Duis aute irure dolor in reprehenderit in voluptate velit esse.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
