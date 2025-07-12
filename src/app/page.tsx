'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/options')
    }, 1000)

    return () => clearTimeout(timeout)
  }, [router])

  return (
    <div
      className="bg-[var(--background)] h-screen flex flex-col justify-center items-center gap-4 text-[var(--foreground)]"
    >
      <h1 className="text-4xl font-bold text-[var(--tertiary)]">FIKAF</h1>
      <h2 className="text-lg tracking-widest text-[var(--tertiary)]">
        KINESIOLOGÍA Y ACTIVIDAD FÍSICA
      </h2>
      <svg
        className="animate-spin mt-8 text-[var(--tertiary)] w-10 h-10"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
    </div>
  )
}
