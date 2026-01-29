import Navbar from '@/components/navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">

        <section id="home" className="relative bg-[url(/sebilj.jpeg)] bg-no-repeat bg-cover bg-center w-full h-screen">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-black/80"></div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center px-8 text-center">
            <div className="max-w-5xl">
              <div className="mb-8">
                <div className="inline-block bg-gradient-to-br from-blue-600 from-0% via-white via-40% to-yellow-400 to-100% p-6 rounded-3xl mb-8">
                  <span className="text-[#36454F] text-7xl font-bold">JBOI</span>
                </div>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
                Junior Balkan Olympiad in Informatics 2026
              </h1>
              <p className="text-3xl text-gray-200 mb-4">September 21-27, 2026</p>
              <p className="text-2xl text-gray-300 mb-12">Sarajevo, Bosnia and Herzegovina</p>
              <div className="flex gap-6 justify-center">
                <Link href="/schedule" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-xl font-semibold text-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                  View Schedule
                </Link>
                <Link href="/about" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-semibold text-xl transition-all border-2 border-white/40">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              <Link href="/schedule" className="group">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all border border-blue-100 text-center h-full flex flex-col items-center justify-center group-hover:scale-105 transform duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Schedule</h3>
                  <p className="text-gray-600">Lorem Ipsum</p>
                </div>
              </Link>

              <Link href="/participants" className="group">
                <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all border border-green-100 text-center h-full flex flex-col items-center justify-center group-hover:scale-105 transform duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Participants</h3>
                  <p className="text-gray-600">Lorem Ipsum</p>
                </div>
              </Link>

              <Link href="/rules" className="group">
                <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all border border-red-100 text-center h-full flex flex-col items-center justify-center group-hover:scale-105 transform duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Rules</h3>
                  <p className="text-gray-600">Lorem Ipsum</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">About JBOI</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link href="/about" className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl">
              Read More
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
