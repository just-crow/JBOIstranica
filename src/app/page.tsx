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
                <div className="inline-block bg-gradient-to-br from-green-500 to-green-700 p-6 rounded-3xl mb-8">
                  <span className="text-white text-7xl font-bold">JBOI</span>
                </div>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
                Judo Bosnia Open International 2026
              </h1>
              <p className="text-3xl text-gray-200 mb-4">June 14-16, 2026</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link href="/schedule" className="group">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all border border-blue-100 text-center h-full flex flex-col items-center justify-center group-hover:scale-105 transform duration-300">
                  <div className="text-6xl mb-6">📅</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Schedule</h3>
                  <p className="text-gray-600">View the tournament program</p>
                </div>
              </Link>

              <Link href="/participants" className="group">
                <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all border border-green-100 text-center h-full flex flex-col items-center justify-center group-hover:scale-105 transform duration-300">
                  <div className="text-6xl mb-6">👥</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Participants</h3>
                  <p className="text-gray-600">Competing teams and athletes</p>
                </div>
              </Link>

              <Link href="/rules" className="group">
                <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all border border-red-100 text-center h-full flex flex-col items-center justify-center group-hover:scale-105 transform duration-300">
                  <div className="text-6xl mb-6">📋</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Rules</h3>
                  <p className="text-gray-600">Competition regulations</p>
                </div>
              </Link>

              <Link href="/venue" className="group">
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all border border-purple-100 text-center h-full flex flex-col items-center justify-center group-hover:scale-105 transform duration-300">
                  <div className="text-6xl mb-6">📍</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Venue</h3>
                  <p className="text-gray-600">Location and facilities</p>
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
              The Judo Bosnia Open International is a premier international judo competition, bringing together talented athletes
              from across Europe and beyond. This championship serves as a significant milestone in the development of young judokas,
              providing them with invaluable competitive experience on an international stage.
            </p>
            <Link href="/about" className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl">
              Read More
            </Link>
          </div>
        </section>

        <footer className="bg-gray-900 text-gray-300 py-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="text-white font-bold text-xl mb-4">JBOI 2026</h3>
                <p className="text-gray-400 leading-relaxed">
                  Judo Bosnia Open International Championship - June 14-16, 2026, Sarajevo
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li><Link href="/about" className="hover:text-green-400 transition-colors">About</Link></li>
                  <li><Link href="/schedule" className="hover:text-green-400 transition-colors">Schedule</Link></li>
                  <li><Link href="/participants" className="hover:text-green-400 transition-colors">Participants</Link></li>
                  <li><Link href="/rules" className="hover:text-green-400 transition-colors">Rules</Link></li>
                  <li><Link href="/venue" className="hover:text-green-400 transition-colors">Venue</Link></li>
                  <li><Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-4">Contact</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>📧 info@jboi2026.ba</li>
                  <li>📱 +387 33 123 456</li>
                  <li>📍 Sarajevo, Bosnia and Herzegovina</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
              <p>&copy; 2026 JBOI - Judo Bosnia Open International. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}
