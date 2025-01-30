"use client"

import React, { useState} from'react';
import Image from 'next/image';
import { formatDistanceToNow } from "date-fns";
import { Ellipsis, ExternalLink, MessageCircle } from 'lucide-react';


// Post Components

 export interface PostProps {
  id: number;
  profilePic: string;
  userName: string;
  postTitle: string;
  contentArea: string;
  timestamp: Date | string;
}

export default function Post({
  profilePic,
  userName,
  postTitle,
  contentArea,
  timestamp,
}: PostProps) {
  const [isExpended, setIsExpanded] = useState(false);
  const maxLength = 200; 
  const [isActive, setIsActive ] = useState(false);

  const toggleIconFill = () => {
    setIsActive(!isActive);
  }

  const handleToggle = () => {
    setIsExpanded(!isExpended);
  };
  const displayContent = 
    contentArea.length > maxLength && !isExpended
    ? contentArea.slice(0, maxLength) + "..."
    : contentArea;

  return (
    <div className="flex justify-center py-2">
    
      <div className="max-w-lg w-full border border-gray-200 rounded-lg p-4 bg-gray-100">
        
        <div className='flex items-center justify-between mb-4'>
        <div className="flex items-center">
          <div className='relative w-10 h-10 rounded-full overflow-hidden mr-2 border-2 border-blue-500'>
            <Image
              src={profilePic }
              alt="Profile"
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div>
            <p className="font-bold">{userName}</p>
            <p className='text-xs text-gray-500'>{formatDistanceToNow(new Date(timestamp), { addSuffix: true })}</p>
          </div>
        </div>
        <button className="text-gray-500 bg-gray-200 rounded-full p-1  hover:text-gray-100 hover:bg-blue-500 hover:scale-1.5"><Ellipsis /></button>
      </div>

      {/* Post Title */}
      <h2 className="text-lg font-semibold mb-2">{postTitle}</h2>

      {/* Content */}
      <p className="text-gray-700 mb-4">
        {displayContent}
        {contentArea.length > maxLength && (
          <span 
            className='text-blue-500 cursor-pointer hover:text-blue-700 ml-1'
            onClick={handleToggle}
            >
              {isExpended ? "read less" : "read more"}
            </span>
        )}
      </p>

      {/* Interaction Buttons */}
      <div className="flex justify-between">
        <button className="flex items-center text-gray-500 hover:text-blue-500">
          <span className="mr-1">
            <svg onClick={toggleIconFill} fill={isActive ? 'blue' : 'none'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? '0' : '2'} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </span>123
        </button>
        <button className="flex items-center text-gray-500 hover:text-blue-500">
          <span className="mr-1">
            <MessageCircle />
          </span>123
        </button>
        <button className="flex items-center text-gray-500 hover:text-blue-500">
          <span><ExternalLink /></span>Share
        </button>
      </div>
      </div>
    </div>

  );
}
