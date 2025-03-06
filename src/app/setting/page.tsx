"use client"

import React from 'react'
import { useRequiredAuth } from '@/hooks/useRequiredAuth'
import Settings from '@/components/Settings/settings'

function Setting() {

  const { loading, session } = useRequiredAuth();

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Settings />
    </div>
  )
}

export default Setting;
