import React from 'react';
import Image from 'next/image';

function AllPostsPreview( {post} ) {
  return (
    <>
      
      <div className="allPostsPreview">
        <a href={`/posts/${post.id}`}>
            <div className="allPostsImage">
                <Image src={process.env.STRAPI_URL + post.attributes.image.data.attributes.url} width="400" height="267" alt="image"  />
            </div>
            <div>
                <span>{post.attributes.date}</span>
            </div>
            <h3 className="allPosts-title">{post.attributes.title}</h3>    
            <p className="allPosts-text">{post.attributes.description}</p>
        </a>
      </div>
      
    </>
    
  )
}

export default AllPostsPreview