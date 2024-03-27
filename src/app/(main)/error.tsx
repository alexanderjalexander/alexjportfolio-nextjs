'use client' 
 
import { Header1Mono, Header3 } from '@/components/headers'
import { Button } from '@nextui-org/button'
import { useEffect } from 'react'
 
export default function Error({error, reset,}: 
{ error: Error, reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="block" >
      <Header1Mono className="pt-32">Something went wrong!</Header1Mono>
      <p className="text-center">Oops. We&apos;re not sure what happened there... :\</p>
      
      <div>
        <Header3 className='text-red-700' align='start'>
          {error.message}
        </Header3>
        <p color='danger'>
          {error.stack}
        </p>
      </div>

      <div>
        <Button className="display-block align-center"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
      </div>
    </div>
  )
}