"use client"

import React from 'react'
import { useRequiredAuth } from '@/hooks/useRequiredAuth'
import Entries from '@/components/Entries/entries'

function EntriesPage() {

  const { loading, session } = useRequiredAuth();
  
    if (loading) {
      return <div>Loading...</div>
    }
  
  return (
    <div>
      <Entries />
    </div>
  )
}

export default EntriesPage;
