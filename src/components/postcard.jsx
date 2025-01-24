// PostCard.jsx
import React from 'react';
import LikeButton from './likebutton';

function PostCard({ post, onLikeToggle }) {
  return (
    <div className="post-card" style={{ border: '1px solid white', padding: 10, margin: 10 ,borderRadius: 10 }}>
      <div style={{ display: "grid",   }}>
        <img
          src={post.profileImage}
          alt={post.username}
          style={{ width: '50px', height: '50px', borderRadius: '50%' }}
        />
        <strong>{post.username}</strong>
      </div>
      <div style={{ marginBottom: 10 }}>
        <p>{post.content}</p>
      </div>
      <LikeButton 
        initialLiked={post.isLiked} 
        onToggle={(newStatus) => onLikeToggle(post.id, newStatus)}
      />
    </div>
  );
}

export default PostCard;
