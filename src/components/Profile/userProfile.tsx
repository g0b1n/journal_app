"use client"
import React, { useState } from 'react'
import Post, { PostProps } from '../Posts/posts'
import Image from 'next/image';

interface UserProfileProps {
    profilePic: string;
    username: string;
    followers: number;
    following: number;
    likes: number;
    publicPosts: PostProps[];
    privatePosts: PostProps[];
}

function UserProfile(props:UserProfileProps) {
    const {
        profilePic,
        username,
        followers,
        following,
        likes,
        publicPosts,
        privatePosts,
    } = props;
    const [ activeTab, setActiveTab] = useState("posts")
    const displayedPost = activeTab === "posts" ? publicPosts : privatePosts;
  return (
    <div className='max-w-3xl mx-auto p-4'>
        <div className='flex items-center mb-6'>
            {profilePic ? (
            <div className='relative w-20 h-20 rounded-full overflow-hidden mr-2 border-2 border-blue-500'>
                        <Image
                          src={profilePic }
                          alt="Profile"
                          layout='fill'
                          objectFit='cover'
                        />
                      </div>
            ) : (
                <div className='w-20 h-20 rounded-full bg-gray-300 mr-4' />
            )}
            
            <div> 
                <h1 className='text-2xl font-bold'>{username || "Loading username..."}</h1>
                <div className='text-gray-600 flex space-x-4'>
                    {followers !== undefined && <p>{followers} Followers</p>}
                    {following !== undefined && <p>{following} Following</p>}
                    {likes !== undefined && <p>{likes} Likes</p>}
                </div>
            </div>
        </div>
        
        <div className='flex border-b mb-4'>
            <button 
                className={`p-2 ${
                    activeTab === "posts" ? "border-b-2 border-blue-500 text-blue-500" : "" }`}
                    onClick={() => setActiveTab("posts")}
                    >
                        Posts
            </button>
            <button 
                    className={`p-2 ${
                        activeTab === "private" ? "border-b-2 border-blue-500 text-blue-500" : ""
                         }`}
                        onClick={() => setActiveTab("private")}
                    >
                          Private
            </button>
         </div>

         {/*Posts */}
         <div>
            {displayedPost?.length > 0 ? (
                displayedPost.map((post: PostProps) => (
                <Post 
                        key={post.id}
                        profilePic={post.profilePic}
                        userName={post.userName}
                        postTitle={post.postTitle}
                        contentArea={post.contentArea}
                        timestamp={post.timestamp} id={0}              
                      />
            )) 
        ) : (
            <p className='text-gray-500'>No Post available</p>
        )}
         </div>
    </div>
  );
}

export default UserProfile
