import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <>
            <div className="bg-navy/90 h-[72px] flex flex-row justify-between items-center w-full px-[8%] fixed top-0 left-0 text-white z-50 backdrop-blur-md border-b border-white/5">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative">
                        <Image src="/logo.svg" alt="JBOI Logo" width={44} height={44} className="transition-transform group-hover:scale-110" />
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className="font-bold text-lg tracking-wide">JBOI</span>
                        <span className="text-[10px] text-jboi-yellow font-semibold tracking-[0.2em] uppercase">Sarajevo 2026</span>
                    </div>
                </Link>
                <nav className="flex gap-1 font-medium text-sm">
                    <Link href="/" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200">Home</Link>
                    <Link href="/about" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200">About</Link>
                    <Link href="/schedule" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200">Schedule</Link>
                    <Link href="/participants" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200">Participants</Link>
                    <Link href="/rules" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200">Rules</Link>
                </nav>
            </div>
            <div className="mt-[72px]"></div>
        </>
    )
}