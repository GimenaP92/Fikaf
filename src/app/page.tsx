'use client' 

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { CircularProgress, Typography } from '@mui/material'

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
      style={{
        backgroundColor: 'var(--background)',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        color: 'var(--foreground)', 
      }}
    >
      <Typography variant="h3" sx={{ color: 'var(--tertiary)', fontWeight: 'bold' }}>
        FIKAF
      </Typography>
      <Typography variant="subtitle1" sx={{ color: 'var(--tertiary)', letterSpacing: 1 }}>
        KINESIOLOGÍA Y ACTIVIDAD FÍSICA
      </Typography>
      <CircularProgress sx={{ color: 'var(--tertiary)', marginTop: '2rem' }} />
    </div>
  )
}
