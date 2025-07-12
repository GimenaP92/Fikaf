'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { FaHandHoldingHeart } from 'react-icons/fa'

export default function Navbar() {
  const router = useRouter()

  return (
    <nav
      onClick={() => router.push('/options')}
      className="
        cursor-pointer
        bg-[rgba(57,59,57,0.85)]  /* un gris ligeramente translúcido, más claro que #393b39 */
        text-[var(--foreground)]
        px-6 py-3 flex items-center
        shadow-[0_2px_6px_rgba(0,0,0,0.3)] /* sombra inferior sutil */
        backdrop-blur-sm  /* opcional: desenfoque para efecto cristal */
        border-b border-[rgba(255,255,255,0.1)] /* borde inferior casi imperceptible */
      "
    >
      <div className="flex items-center gap-3 font-bold text-xl text-[var(--foreground)]">
        <img
          src="/logo.png"
          alt="FIKAF Logo"
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="text-center">FIKAF</span>
      </div>
    </nav>
  )
}
