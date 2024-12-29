import { FaBookOpen } from "react-icons/fa"

import Header from "../components/Header"
import Footer from "../components/Footer"

import Link from "next/link"
import Image from "next/image"
import { Cinzel } from 'next/font/google'

const cinzel = Cinzel({ subsets: ['latin'] })

export default function HomePage() {
    return (
        <div className={`${ cinzel.className }`}>
            <Header />

            <div className="container mx-auto px-4 py-8">
                <section className="mb-12 text-center relative h-96">
                    <Image
                        src="/images/bible.jpg"
                        width={1200}
                        height={400}
                        alt="Open Bible"
                        className="rounded-lg shadow-lg mb-6 object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg">
                    <h1 className="text-4xl font-bold mb-4 text-white">Explore the Living Word</h1>
                    <p className="text-xl mb-6 italic text-white">&quot;Your word is a lamp for my feet, a light on my path.&quot; - Psalm 119:105</p>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-md">
                        <Link href="#">Start Your Reading</Link>
                    </button>
                    </div>
                </section>

                <section className="mb-12">
                    <div className="rounded-lg shadow-2xl bg-white p-6">
                        <div className="flex items-center text-amber-700 space-x-2">
                            <FaBookOpen /> 
                            <p>VERSE OF THE DAY</p>
                        </div>
                        <p>&quot;For God so loved the world that he gave his one and only Son, 
                            that whoever believes in him shall not perish but have eternal life.&quot; - JOHN 3:16</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl mb-4 text-amber-700">INSPIRING BIBLE STORIES</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        <div className="rounded-lg shadow-2xl bg-white p-6 h-108">

                            <Image
                                src="/images/ark.jpg"
                                width={1200}
                                height={400}
                                alt="Noah's Ark"
                                className="rounded-lg shadow-lg mb-6 object-cover w-full h-64"
                            />

                            <p className="text-amber-700 mb-8 font-semibold">NOAH&#39;S ARK</p>

                            <p className="mb-4">Importance of faith, obedience to God, and the promise of renewal after trials.</p>

                            <Link href="#" className="text-amber-700 hover:underline">READ THE STORY</Link>

                        </div>

                        <div className="rounded-lg shadow-2xl bg-white p-6 h-108">

                            <Image
                                src="/images/goliath.jpg"
                                width={1200}
                                height={400}
                                alt="David and Goliath"
                                className="rounded-lg shadow-lg mb-6 object-cover w-full h-64"
                            />

                            <p className="text-amber-700 mb-8 font-semibold">DAVID AND GOLIATH</p>

                            <p className="mb-4">The story of David and Goliath teaches that courage and faith in God can 
                                overcome even the greatest of challenges.</p>

                            <Link href="#" className="text-amber-700 hover:underline">READ THE STORY</Link>

                        </div>

                        <div className="rounded-lg shadow-2xl bg-white p-6 h-108">

                            <Image
                                src="/images/lost-son.jpg"
                                width={1200}
                                height={400}
                                alt="Prodigal Son"
                                className="rounded-lg shadow-lg mb-6 object-cover w-full h-64"
                            />

                            <p className="text-amber-700 mb-8 font-semibold">THE PRODIGAL SON</p>

                            <p className="mb-4">The story of the Prodigal Son teaches the power of forgiveness and God&#39;s unconditional 
                                love for those who return to Him.</p>

                            <Link href="#" className="text-amber-700 hover:underline">READ THE STORY</Link>
                        </div>
                    </div>

                </section>

            </div>

            <Footer />
            
        </div>
    )
}