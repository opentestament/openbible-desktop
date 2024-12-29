
'use client'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
  
    const listener = (event: MessageEvent) => {
      if (event.data.type === 'deep-link') {
        console.log('Received deep link:', event.data.url)
      }
    }
    window.addEventListener('message', listener)
    return () => window.removeEventListener('message', listener)
  }, [])

  const handleLogin = () => {

    window.open('http://localhost:3000/login', '_blank')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <button
        onClick={handleLogin}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login
      </button>
    </main>
  )
}