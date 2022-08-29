import React from "react";
import AllPostsPreview from "./AllPostsPreview";

function AllPosts({ posts }){
    function renderPostPreviews(){
        return posts.data.map((post) => {
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