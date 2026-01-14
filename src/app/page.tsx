import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main className="min-h-screen">

        <section id="home" className="relative bg-[url(/sebilj.jpeg)] bg-no-repeat bg-cover bg-center w-full h-screen">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-black/70"></div>
          <div className="relative z-10 h-full flex flex-col justify-center items-start px-[8%]">
            <div className="bg-gradient-to-br from-white/10 to-black/30 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-2xl max-w-4xl">
              <h1 className="text-7xl font-bold text-white mb-4">
                Welcome to <span className="text-green-400 bg-clip-text">JBOI</span> 2026
              </h1>
              <p className="text-2xl text-gray-200 mb-6">Judo Bosnia Open International Championship</p>
              <p className="text-xl text-gray-300 mb-8">June 14-16, 2026 | Sarajevo, Bosnia and Herzegovina</p>
              <div className="flex gap-4">
                <a href="#registration" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                  Register Now
                </a>
                <a href="#about" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-white/30">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">About JBOI 2026</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl text-white">🥋</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Elite Competition</h3>
                <p className="text-gray-600 leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl text-white">🌍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">International Event</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl text-white">🏆</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Championship Glory</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="schedule" className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Tournament Schedule</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-gray-900">Day 1 - Friday, June 14</h3>
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold">Opening Day</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-bold min-w-[100px]">09:00</span>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipiscing</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-bold min-w-[100px]">11:00</span>
                    <p className="text-gray-700">Sed do eiusmod tempor incididunt ut labore</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-bold min-w-[100px]">14:00</span>
                    <p className="text-gray-700">Ut enim ad minim veniam quis nostrud</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-bold min-w-[100px]">18:00</span>
                    <p className="text-gray-700">Duis aute irure dolor in reprehenderit</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-gray-900">Day 2 - Saturday, June 15</h3>
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold">Competition Day</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg font-bold min-w-[100px]">08:00</span>
                    <p className="text-gray-700">Excepteur sint occaecat cupidatat non proident</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg font-bold min-w-[100px]">10:30</span>
                    <p className="text-gray-700">Sunt in culpa qui officia deserunt mollit anim</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg font-bold min-w-[100px]">13:00</span>
                    <p className="text-gray-700">Neque porro quisquam est qui dolorem ipsum</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg font-bold min-w-[100px]">16:00</span>
                    <p className="text-gray-700">Quis autem vel eum iure reprehenderit</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-l-4 border-yellow-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-gray-900">Day 3 - Sunday, June 16</h3>
                  <span className="bg-yellow-500 text-white px-4 py-2 rounded-full font-semibold">Finals Day</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-lg font-bold min-w-[100px]">09:00</span>
                    <p className="text-gray-700">Temporibus autem quibusdam et aut officiis</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-lg font-bold min-w-[100px]">12:00</span>
                    <p className="text-gray-700">Nam libero tempore cum soluta nobis est</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-lg font-bold min-w-[100px]">15:00</span>
                    <p className="text-gray-700">Et harum quidem rerum facilis est et expedita</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-lg font-bold min-w-[100px]">18:00</span>
                    <p className="text-gray-700">Itaque earum rerum hic tenetur a sapiente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="registration" className="py-24 bg-gradient-to-br from-green-50 via-white to-blue-50">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Registration Information</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Individual Registration</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Early Bird Registration</span>
                    <span className="text-2xl font-bold text-green-600">€45</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Standard Registration</span>
                    <span className="text-2xl font-bold text-gray-900">€60</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700 font-medium">Late Registration</span>
                    <span className="text-2xl font-bold text-red-600">€80</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-1">✓</span>
                    <span className="text-gray-700">Lorem ipsum dolor sit amet consectetur</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-1">✓</span>
                    <span className="text-gray-700">Sed do eiusmod tempor incididunt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-1">✓</span>
                    <span className="text-gray-700">Ut labore et dolore magna aliqua</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                  Register Individual
                </button>
              </div>

              <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Team Registration</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Small Team (3-5 athletes)</span>
                    <span className="text-2xl font-bold text-green-600">€120</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Medium Team (6-10 athletes)</span>
                    <span className="text-2xl font-bold text-gray-900">€220</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700 font-medium">Large Team (11+ athletes)</span>
                    <span className="text-2xl font-bold text-blue-600">€380</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-1">✓</span>
                    <span className="text-gray-700">Quis nostrud exercitation ullamco laboris</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-1">✓</span>
                    <span className="text-gray-700">Duis aute irure dolor in reprehenderit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-1">✓</span>
                    <span className="text-gray-700">Excepteur sint occaecat cupidatat</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                  Register Team
                </button>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border-l-4 border-yellow-500 rounded-xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Important Registration Dates</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Early Bird Deadline</p>
                  <p className="text-xl font-bold text-gray-900">March 31, 2026</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Standard Registration Closes</p>
                  <p className="text-xl font-bold text-gray-900">May 15, 2026</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Final Registration Deadline</p>
                  <p className="text-xl font-bold text-gray-900">June 7, 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="venue" className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Venue & Location</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Olympic Sports Center Sarajevo</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <span className="text-2xl">🚗</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Getting There</h4>
                      <p className="text-gray-600">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 p-3 rounded-lg">
                      <span className="text-2xl">🏨</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Nearby Hotels</h4>
                      <p className="text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <span className="text-2xl">ℹ️</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Facilities</h4>
                      <p className="text-gray-600">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 rounded-2xl h-[500px] flex items-center justify-center text-gray-500 shadow-xl">
                <div className="text-center">
                  <span className="text-6xl mb-4 block">🗺️</span>
                  <p className="text-xl font-medium">Map Placeholder</p>
                  <p className="text-sm mt-2">Interactive map would be embedded here</p>
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-8 shadow-xl">
                <div className="text-5xl font-bold mb-2">3</div>
                <p className="text-xl font-medium">Competition Mats</p>
                <p className="text-green-100 mt-2">Lorem ipsum dolor sit amet consectetur</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-8 shadow-xl">
                <div className="text-5xl font-bold mb-2">2000+</div>
                <p className="text-xl font-medium">Seating Capacity</p>
                <p className="text-blue-100 mt-2">Sed do eiusmod tempor incididunt</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-8 shadow-xl">
                <div className="text-5xl font-bold mb-2">24/7</div>
                <p className="text-xl font-medium">Medical Support</p>
                <p className="text-purple-100 mt-2">Ut labore et dolore magna aliqua</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Sponsors</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.
              </p>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Platinum Sponsors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-12 shadow-xl border-2 border-gray-200 flex items-center justify-center hover:shadow-2xl transition-shadow">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏢</div>
                    <p className="text-2xl font-bold text-gray-900">Sponsor Logo 1</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-12 shadow-xl border-2 border-gray-200 flex items-center justify-center hover:shadow-2xl transition-shadow">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏢</div>
                    <p className="text-2xl font-bold text-gray-900">Sponsor Logo 2</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Gold Sponsors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🏪</div>
                    <p className="text-sm font-bold text-gray-900">Sponsor 3</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🏪</div>
                    <p className="text-sm font-bold text-gray-900">Sponsor 4</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🏪</div>
                    <p className="text-sm font-bold text-gray-900">Sponsor 5</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🏪</div>
                    <p className="text-sm font-bold text-gray-900">Sponsor 6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">Get In Touch</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-300">
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500/20 p-4 rounded-lg">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email</h4>
                      <p className="text-gray-300">info@jboi2026.ba</p>
                      <p className="text-gray-300">registration@jboi2026.ba</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-500/20 p-4 rounded-lg">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Phone</h4>
                      <p className="text-gray-300">+387 33 123 456</p>
                      <p className="text-gray-300">+387 33 123 457</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-500/20 p-4 rounded-lg">
                      <span className="text-2xl">🌐</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Social Media</h4>
                      <div className="flex gap-4 mt-2">
                        <a href="#" className="bg-green-500/20 hover:bg-green-500/40 px-4 py-2 rounded-lg transition-colors">Facebook</a>
                        <a href="#" className="bg-green-500/20 hover:bg-green-500/40 px-4 py-2 rounded-lg transition-colors">Instagram</a>
                        <a href="#" className="bg-green-500/20 hover:bg-green-500/40 px-4 py-2 rounded-lg transition-colors">Twitter</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-3xl font-bold mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea rows={5} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors resize-none" placeholder="Your message"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-black text-gray-400 py-12">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="text-white font-bold text-lg mb-4">JBOI 2026</h4>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#home" className="hover:text-green-400 transition-colors">Home</a></li>
                  <li><a href="#about" className="hover:text-green-400 transition-colors">About</a></li>
                  <li><a href="#schedule" className="hover:text-green-400 transition-colors">Schedule</a></li>
                  <li><a href="#registration" className="hover:text-green-400 transition-colors">Registration</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-4">Information</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#venue" className="hover:text-green-400 transition-colors">Venue</a></li>
                  <li><a href="#" className="hover:text-green-400 transition-colors">Rules & Regulations</a></li>
                  <li><a href="#" className="hover:text-green-400 transition-colors">FAQ</a></li>
                  <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-green-400 transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm">
              <p>&copy; 2026 JBOI - Judo Bosnia Open International. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}
