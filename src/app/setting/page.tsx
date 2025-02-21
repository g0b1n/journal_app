"use client"

import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Settings from '@/components/Settings/settings'

function Setting() {

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
      <Settings />
    </div>
  )
}

export default Setting;
