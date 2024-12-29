import { Cinzel } from 'next/font/google'

const cinzel = Cinzel({ subsets: ['latin'] })

export default function Footer() {

    return (
        <footer className={`bg-stone-800 text-stone-100 mt-40 h-14 flex justify-center items-center ${cinzel.className}`}>
            <p>&#169;2025 OPEN TESTAMENT. ALL RIGHTS RESERVED.</p>
        </footer>
    )

}