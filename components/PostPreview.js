import React from 'react';
import Image from 'next/image';

function PostPreview( {post} ) {
  return (
    <>
      
      <div className="postPreview">
        <div className="postImage">
          <Image src={post.attributes.image.data.attributes.formats.small.url} layout="fill"  alt="image"  />
        </div>
        <div className="postInfo">
          <div className="postDate">
            <span>{post.attributes.date}</span>
          </div>
          <h3 className="post-title">{post.attributes.title}</h3>    
          <p className="post-text">{post.attributes.description}</p>
          <a href={`/posts/${post.id}`} className="post-cta">Read more</a>
        </div>

      </div>
      
    </>
    
  )
}

export default PostPreview