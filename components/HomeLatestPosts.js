import React, { useEffect, useState } from 'react'
import Timeline from './DataComponents/Timeline';


function HomeLatestPosts( {posts} ) {
    const [latestPosts, setLatestPosts] = useState([]);

    useEffect(() => {
        setLatestPosts(posts.data.slice(0, 5));
    }, [posts.data]);

    function renderPostPreviews(){
        return( 
        <div className="timeline-container">
            {latestPosts.reverse().map((post) => {
                
                return <Timeline post={post} key={post.id}/>
                
            })};
        </div>
        );
    }

    return (
        <>
            
            {renderPostPreviews()}
        </>
    )
}

export default HomeLatestPosts