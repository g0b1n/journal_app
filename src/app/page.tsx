"use client"

import React, { useEffect} from 'react';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Post from '@/components/Posts/posts';


const HomePage = () => {
  const profilePic = "/images/AchyutPic.jpg"

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
     
    <Post profilePic={profilePic}
      userName="Test User"
      postTitle="Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      timestamp={new Date().toISOString()}
      contentArea="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." id={0}    />

    </div>
  );
};

export default HomePage;

