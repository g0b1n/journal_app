"use client"

import React from 'react';
import Post from '@/components/Posts/posts';

import Post from '@/components/homepage/post';

const HomePage = () => {
  const profilePic = "/images/AchyutPic.jpg"
  const currentDate = new Date().toLocaleDateString();
  return (

   <Post profilePic={profilePic}
      userName="Test User"
      postTitle="Test Title"
      timestamp={new Date().toISOString()}
      contentArea="Govinda dahal is the boss of this project and Hem Gautam is the big boss same like Salman Khan with that big stomach and I won 55$ today"
  );
};

export default HomePage;

