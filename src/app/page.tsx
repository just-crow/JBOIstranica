import Navbar from '@/components/navbar'
import PixelBorder from '@/components/PixelBorder'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">

        {/* Hero */}
        <section id="home" className="relative bg-[url(/JBOI_Sarajevo_skyline.jpg)] bg-no-repeat bg-cover bg-center w-full h-screen">
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/75 to-navy/95"></div>
          <div className="absolute inset-0 geo-grid opacity-40"></div>

          {/* Decorative blobs */}
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-jboi-blue/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-32 left-[8%] w-56 h-56 bg-jboi-yellow/10 rounded-full blur-[80px]"></div>

          <div className="relative z-10 h-full flex flex-col justify-center items-center px-8 text-center">
            <div className="max-w-5xl">
              <div className="mb-10 animate-float">
                <Image src="/logo.svg" alt="JBOI Logo" width={180} height={180} className="mx-auto drop-shadow-2xl" />
              </div>

              <div className="mb-4">
                <PixelBorder>
                  <span className="text-jboi-yellow text-sm font-semibold tracking-[0.25em] uppercase px-6 py-2.5 inline-block">
                    September 21–27, 2026
                  </span>
                </PixelBorder>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Junior Balkan Olympiad<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-jboi-blue-light to-jboi-yellow">in Informatics</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300/90 mb-12 max-w-2xl mx-auto">
                Sarajevo, Bosnia and Herzegovina
              </p>

              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/schedule" className="group relative bg-jboi-blue hover:bg-jboi-blue-light text-white px-8 py-3.5 rounded-xl font-pixel text-base transition-all duration-300 shadow-lg shadow-jboi-blue/25 hover:shadow-xl hover:shadow-jboi-blue/30 hover:-translate-y-0.5 leading-relaxed">
                  View Schedule
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
                <Link href="/about" className="bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-3.5 rounded-xl font-pixel text-base transition-all duration-300 border border-white/15 hover:border-white/30 leading-relaxed">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f8f9fc] to-transparent"></div>
        </section>

        {/* Quick links */}
        <section className="py-24 bg-[#f8f9fc] relative">
          <div className="absolute inset-0 geo-grid opacity-30"></div>
          <div className="max-w-6xl mx-auto px-8 relative">
            <div className="text-center mb-16">
              <span className="text-jboi-blue text-sm font-semibold tracking-[0.2em] uppercase">Explore</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Quick Links</h2>
              <div className="w-16 h-1 bg-jboi-yellow mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/schedule" className="group">
                <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-jboi-blue/20 transition-all duration-300 hover:shadow-xl hover:shadow-jboi-blue/5 hover:-translate-y-1 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-jboi-blue/5 rounded-bl-[60px] transition-all group-hover:bg-jboi-blue/10"></div>
                  <span className="text-5xl font-bold text-jboi-blue/10 group-hover:text-jboi-blue/20 transition-colors">01</span>
                  <h3 className="text-xl font-bold text-navy mt-2 mb-2">Schedule</h3>
                  <p className="text-sm text-gray-500">Competition timeline and event program</p>
                  <div className="mt-4 text-jboi-blue text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View details &rarr;
                  </div>
                </div>
              </Link>

              <Link href="/participants" className="group">
                <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-jboi-yellow/30 transition-all duration-300 hover:shadow-xl hover:shadow-jboi-yellow/5 hover:-translate-y-1 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-jboi-yellow/8 rounded-bl-[60px] transition-all group-hover:bg-jboi-yellow/15"></div>
                  <span className="text-5xl font-bold text-jboi-yellow/20 group-hover:text-jboi-yellow/35 transition-colors">02</span>
                  <h3 className="text-xl font-bold text-navy mt-2 mb-2">Participants</h3>
                  <p className="text-sm text-gray-500">Competing teams and delegations</p>
                  <div className="mt-4 text-jboi-blue text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View details &rarr;
                  </div>
                </div>
              </Link>

              <Link href="/rules" className="group">
                <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-navy/10 transition-all duration-300 hover:shadow-xl hover:shadow-navy/5 hover:-translate-y-1 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-navy/5 rounded-bl-[60px] transition-all group-hover:bg-navy/8"></div>
                  <span className="text-5xl font-bold text-navy/10 group-hover:text-navy/20 transition-colors">03</span>
                  <h3 className="text-xl font-bold text-navy mt-2 mb-2">Rules</h3>
                  <p className="text-sm text-gray-500">Competition rules and regulations</p>
                  <div className="mt-4 text-jboi-blue text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View details &rarr;
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* About preview */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute -right-32 -top-32 w-96 h-96 bg-jboi-blue/3 rounded-full blur-[80px]"></div>
          <div className="absolute -left-20 bottom-0 w-64 h-64 bg-jboi-yellow/5 rounded-full blur-[60px]"></div>

          <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
            <span className="text-jboi-blue text-sm font-semibold tracking-[0.2em] uppercase">About</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-6">
              What is <span className="yellow-underline">JBOI</span>?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-navy/15">
              Read More
              <span>&rarr;</span>
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
