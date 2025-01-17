"use client";

import React, {useState} from'react';
import Image from 'next/image';


// Post Components

interface PostProps {
  profilePic: string;
  userName: string;
  postTitle: string;
  contentArea: string;
}

export default function Post({
  profilePic,
  userName,
  postTitle,
  contentArea,
}: PostProps) {
  const [isExpended, setIsExpanded] = useState(false);
  const maxLength = 100; 

  const handleToggle = () => {
    setIsExpanded(!isExpended);
  };
  const displayContent = 
    contentArea.length > maxLength && !isExpended
    ? contentArea.slice(0, maxLength) + "..."
    : contentArea;
  return (
    <div className="flex justify-center py-8">
    
      <div className="max-w-lg w-full border rounded-lg p-4 shadow-md bg-white">
        
        <div className='flex items-center justify-between mb-4'>
        <div className="flex items-center">
          <Image
            src={profilePic }
            alt="Profile"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-bold">{userName}</p>
            <p className="text-sm text-gray-500"></p>
          </div>
        </div>
        <button className="text-gray-500">...</button>
      </div>

      {/* Post Title */}
      <h2 className="text-lg font-semibold mb-2">{postTitle}</h2>


      {/* Content */}
      <p className="text-gray-700 mb-4">
        {displayContent}
        {contentArea.length > maxLength && (
          <span 
            className='text-blue-500 cursor-pointer ml-2'
            onClick={handleToggle}
            >
              {isExpended ? "Read Less" : "Read More"}
            </span>
        )}
      </p>

      {/* Interaction Buttons */}
      <div className="flex items-center space-x-6">
        <button className="flex items-center text-gray-500">
          <span className="mr-1">123</span> ❤️
        </button>
        <button className="flex items-center text-gray-500">
          <span className="mr-1">123</span> 💬
        </button>
        <button className="text-gray-500">Share</button>
      </div>
      </div>
   
    </div>

  );
}
