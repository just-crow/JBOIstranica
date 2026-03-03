"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

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

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-1 font-medium text-sm">
                    <Link href="/" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200">Home</Link>
                    <Link href="/about" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200">About</Link>
                    <Link href="/schedule" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200">Schedule</Link>
                    <Link href="/participants" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200">Participants</Link>
                    <Link href="/rules" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200">Rules</Link>
                </nav>

                {/* Mobile Menu Toggle button */}
                <button
                    className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <div
                className={`fixed top-[72px] left-0 w-full bg-navy z-40 md:hidden shadow-lg text-white overflow-hidden transition-all duration-300 ease-in-out flex flex-col ${isOpen ? 'max-h-[400px] border-b border-white/5 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
            >
                <nav className="flex flex-col p-4 gap-2 font-medium text-sm">
                    <Link href="/" onClick={() => setIsOpen(false)} className="px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200">Home</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200">About</Link>
                    <Link href="/schedule" onClick={() => setIsOpen(false)} className="px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200">Schedule</Link>
                    <Link href="/participants" onClick={() => setIsOpen(false)} className="px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200">Participants</Link>
                    <Link href="/rules" onClick={() => setIsOpen(false)} className="px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200">Rules</Link>
                </nav>
            </div>

            <div className="mt-[72px]"></div>
        </>
    )
}