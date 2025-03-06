"use client"

import React from 'react'
import { useRequiredAuth } from '@/hooks/useRequiredAuth'
import ProfilePage from '@/components/Profile/profilePage'

function Profile() {

  const { loading, session } = useRequiredAuth();
  
    if (loading) {
      return <div>Loading...</div>
    }
  
  return (
    <div>
        <ProfilePage />
    </div>
  )
}

export default Profile
