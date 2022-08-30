import React from 'react';
import Image from 'next/image';

function Timeline({post}) {
  return (

        <>
            <div className="timeline-item">
                <div className="timeline-item-content">
                    <span className="tag">
                        {post.attributes.title}
                    </span>
                    <div className="allPostsImage">
                        <Image src={process.env.STRAPI_URL + post.attributes.image.data.attributes.url} width="400" height="267" alt="image"  />
                    </div>
                    <time>{post.attributes.date}</time>
                    <p>{post.attributes.description}</p>
                    <a href={`/posts/${post.id}`}>
                        Read more
                    </a>
                    <span className="circle" />
                </div>
            </div>
        </>

    );

}

export default Timeline