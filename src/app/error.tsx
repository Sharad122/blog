'use client';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';
 
export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {

  useEffect(() => { console.error(error) }, [error])
 
  return (
    <div className="text-center space-y-6 text-xl tracking-wide font-light">
      {error.message ? <h2>{error.message}</h2> : <h2>Something went wrong!</h2> }
      <Button variant="outline" onClick={() => reset()}><ReloadIcon/> Retry</Button>
    </div>
  )

};