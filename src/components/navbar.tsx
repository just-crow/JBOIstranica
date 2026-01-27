import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <>
            <div className="bg-gray-800/95 h-[10vh] flex flex-row justify-between items-center w-full px-[8%] fixed top-0 left-0 text-white z-50 backdrop-blur-sm shadow-lg">
                <Link href="/" className="flex items-center gap-3">
                    {/*<Image/> logo (LOGO UBACITI OVDJE)*/}
                    <span className="font-bold text-xl">JBOI 2026</span>
                </Link>
                <nav className="flex gap-8 font-medium">
                    <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-green-400 transition-colors">About</Link>
                    <Link href="/schedule" className="hover:text-green-400 transition-colors">Schedule</Link>
                    <Link href="/participants" className="hover:text-green-400 transition-colors">Participants</Link>
                    <Link href="/rules" className="hover:text-green-400 transition-colors">Rules</Link>
                </nav>
            </div>
            <div className="mt-[10vh]"></div>
        </>
    )
}