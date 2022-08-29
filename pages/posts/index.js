import axios from "axios";
import AllPosts from '../../components/AllPosts';
import React from "react";
import NavBar from "../../components/NavBar";


function Posts({ posts, nav }){
    return(
        <>
            <NavBar navItems={nav} />
            <AllPosts posts={posts} />
        </>
    );
}


export default Posts;


export async function getStaticProps(){

  const postRes = await axios.get(`${process.env.STRAPI_URL}/api/posts/?populate=*`);
  const navRes = await axios.get(`${process.env.STRAPI_URL}/api/navigation-items/?populate=deep`);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: postRes.data,
      nav: navRes.data,        //postsRes.data -> array of posts
    },       
  };
}