'use client'

import { useEffect } from 'react'


export const metadata = { 
  title: 'Erro',
  description: 'Ocorreu um erro. Tentar novamente.' 
}

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center gap-4'>
      <h2 className='text-primary-foreground text-3xl'>Ocorreu um erro!</h2>
      <button className='p-5 rounded-md text-lg font-normal bg-primary-foreground text-tertiary-foreground hover:scale-105 hover:transition-all hover:duration-200 hover:opacity-95'
        onClick={() => reset()}
      >
        Tentar novamente
      </button>
    </div>
  )
}
