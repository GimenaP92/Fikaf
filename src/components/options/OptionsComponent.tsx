'use client'

import Link from 'next/link'
import { Button, Typography, Box } from '@mui/material'
import WhatsAppButton from '../wsp/WspButton'

const routeMap = {
  'Kinesiología': '/options/physiotherapy',
  'Osteopatía': '/options/osteopathy',
  'Gimnasio': '/options/gym',
  '¿Quiénes somos?': '/options/about-us',
  'Contacto': '/options/contact',
} as const


type RouteKey = keyof typeof routeMap

const buttonLabels: RouteKey[] = [
  'Kinesiología',
  'Osteopatía',
  'Gimnasio',
  '¿Quiénes somos?',
  'Contacto',
]

export default function OptionsComponent() {
  return (
    <Box
      sx={{
        backgroundColor: 'var(--background)',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        padding: 2,
        color: 'var(--foreground)',
      }}
    >
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: 'var(--foreground)',
          maxWidth: 300,
          lineHeight: 1.5,
        }}
      >
        Tu bienestar, nuestro compromiso.{' '}
        <span style={{ color: 'var(--tertiary)', fontWeight: 'bold' }}>Kinesiología</span> y{' '}
        <span style={{ color: 'var(--tertiary)', fontWeight: 'bold' }}>actividad física</span> para todas
        las edades.
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '80%', maxWidth: 250 }}>
        {buttonLabels.map((label, index) => (
          <Link key={index} href={routeMap[label]}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: 'var(--background)',
                color: 'var(--foreground)',
                borderRadius: '200px',
                textTransform: 'none',
                fontWeight: 'bold',
                height: 48,
                boxShadow: '0 0 4px 0px var(--tertiary)',
                ':hover': {
                  backgroundColor: 'var(--tertiaryHover)',
                  cursor: 'pointer',
                },
              }}
            >
              {label}
            </Button>
          </Link>
        ))}
      </Box>

      <div style={{ position: 'fixed', bottom: 120, right: 20, zIndex: 1000 }}>
        <WhatsAppButton />
      </div>
    </Box>
  )
}
