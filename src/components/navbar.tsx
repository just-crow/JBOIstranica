import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <div className="bg-gray-800/95 h-[10vh] flex flex-row justify-between items-center w-full px-[8%] fixed top-0 left-0 text-white z-50 backdrop-blur-sm shadow-lg">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center font-bold text-xl">JB</div>
                    <span className="font-bold text-xl">JBOI 2026</span>
                </div>
                <nav className="flex gap-8 font-medium">
                    <Link href="#home" className="hover:text-green-400 transition-colors">Home</Link>
                    <Link href="#about" className="hover:text-green-400 transition-colors">About</Link>
                    <Link href="#schedule" className="hover:text-green-400 transition-colors">Schedule</Link>
                    <Link href="#registration" className="hover:text-green-400 transition-colors">Registration</Link>
                    <Link href="#venue" className="hover:text-green-400 transition-colors">Venue</Link>
                    <Link href="#contact" className="hover:text-green-400 transition-colors">Contact</Link>
                </nav>
            </div>
            <div className="mt-[10vh]"></div>
        </>
    )
}