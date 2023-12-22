'use client' 
 
import { Header1Mono } from '@/components/headers'
import { Button } from '@nextui-org/button'
import { Code } from '@nextui-org/code'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <Header1Mono text="Something went wrong!" />
      <p className="text-center">Oops. We&apos;re not sure what happened there... :\</p>
      <Code color='danger'>
        {error.message}
      </Code>
      <Button className="align-center"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  )
}