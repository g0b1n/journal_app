"use client"

import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Entries from '@/components/Entries/entries'

function EntriesPage() {

  const { data: session, status } = useSession();
  const router = useRouter();
  
  // redirect to login page if not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push("/auth/signin")
    }
  }, [status, router])
  
  if (status === 'loading') {
    return <div>Loading...</div>
  }
  
  return (
    <div>
      <Entries />
    </div>
  )
}

export default EntriesPage;
