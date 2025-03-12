"use client"

import React, { useState, useEffect } from 'react';
import { useRequiredAuth } from '@/hooks/useRequiredAuth';
import Post from '@/components/Posts/posts';

interface PostType {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  profilePic: string;
  user?: {
    username: string;
  };
}

const HomePage = () => {
  const profilePic = "/images/AchyutPic.jpg"
  const { loading, session } = useRequiredAuth();

  const [ posts, setPosts ] = useState<PostType[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/post");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        // expecting data.posts to be an array of posts
        setPosts(data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPosts();
  }, []);
  
    if (loading) {
      return <div>Loading...</div>
    }
  
  return (
    <div>
      {posts.length === 0 && <div>No posts available. </div>}
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={profilePic}
          userName={post.user?.username || "UserName"}
          postTitle={post.title}
          timestamp={new Date(post.createdAt).toLocaleString()}
          contentArea={post.content}
          id={post.id}
        />
      ))}
    </div>
  );
};

export default HomePage;

