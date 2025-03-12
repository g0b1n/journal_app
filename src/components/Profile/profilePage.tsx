import React from "react";
import UserProfile from "./userProfile";

function ProfilePage() {
    const profilePic = "/images/AchyutPic.jpg"
  const profileData = {
    profilePic,
    username: "Gobinda Gautam",
    followers: 200,
    following: 150,
    likes: 500,
    publicPosts: [
      {
        id: "1",
        profilePic,
        userName: "Gobinda Gautam",
        postTitle: "Public Post 1",
        contentArea: "This is a public post.",
        timestamp: new Date().toISOString(),
      },
    ],
    privatePosts: [
      {
        id: "2",
        profilePic,
        userName: "Gobinda Gautam",
        postTitle: "Private Post 1",
        contentArea: "This is a private post.",
        timestamp: new Date().toISOString(),
      },
    ],
  };

  return <UserProfile {...profileData} />;
}

export default ProfilePage;
