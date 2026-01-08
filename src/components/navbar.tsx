import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return(
        <>
        <div className="bg-gray-600 h-[10vh] flex flex-row justify-between items-center w-full px-[10%] fixed top-0 left-0 text-white z-100">
            <div className="w-12 h-12 bg-green-600"></div>
            <Link href="/">Go1</Link>
            <Link href="/">Go2</Link>
            <Link href="/">Go3</Link>
            <Link href="/">Go4</Link>
        </div>
        <div className="mt-[10vh]"></div>
        </>
    )
}