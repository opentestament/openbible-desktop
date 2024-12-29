import { FaBook, FaSearch } from "react-icons/fa"

import Link from 'next/link';
import { Cinzel } from 'next/font/google'

const cinzel = Cinzel({ subsets: ['latin'] })

export default function Header() {

    return (

        <header className="bg-stone-800 text-stone-100">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/home" className="text-2xl font-bold flex items-center space-x-3 ">
                    <FaBook />
                    <span className={`hover:text-amber-300 transition-colors ${cinzel.className}`}>OPENBIBLE</span>
                </Link>

                <div className="flex items-center">
                    <input type="search" placeholder="Search Scriptures" className="mr-2 bg-stone-700 text-stone-100 border-stone-600 placeholder-stone-400 px-3 py-1 rounded-md" />
                    <button className="p-2 rounded-md border border-stone-600 text-stone-100 hover:bg-stone-700">
                        <FaSearch />
                    </button>
                </div>
            </div>
        </header>
    )

}