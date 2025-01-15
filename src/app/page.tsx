"use client"

import React from 'react';
import Post from '@/components/Posts/posts';

const HomePage = () => {
  return (
    <div>
      {/* we will render all the posts on timeline or at main page like this  */}
      <Post />
    </div>
  );
}

export default HomePage;
