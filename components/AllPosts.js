import React, { useEffect, useState } from 'react';
import AllPostsPreview from "./AllPostsPreview";

function AllPosts({ posts }){

    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        setAllPosts(posts.data);
    }, [posts.data]);

    function renderPostPreviews(){
        return allPosts.reverse().map((post) => {
            return <AllPostsPreview post={post} key={post.id} />
        });
    }

    return (
        <>
            <div className="allPosts">     
                {renderPostPreviews()}
            </div>
        </>
    );
}

export default AllPosts;