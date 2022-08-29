import axios from "axios";
import React from "react";
import MarkdownIt from "markdown-it";
import NavBar from "../../components/NavBar";

function PostPage({post, nav}) {

  const md = new MarkdownIt();
  const htmlContent = md.render(post.data.attributes.content);

  return (
  <>
    <NavBar navItems={nav} />
    <article className="articleText">
      <header>
        <h1 className="postPage-title">{post.data.attributes.title}</h1>
      </header>
      <section className="postPage-content" dangerouslySetInnerHTML={{__html: htmlContent}}></section>
    </article>
  </>
  );
}

export default PostPage;

export async function getStaticProps({params}){
  const postRes = await axios.get(`${process.env.STRAPI_URL}/api/posts/${params.id}`);
  const navRes = await axios.get(`${process.env.STRAPI_URL}/api/navigation-items/?populate=deep`);

  return {
    props: {
      post: postRes.data,
      nav: navRes.data,
    }
  }
}

export async function getStaticPaths(){
const postsRes = await axios.get(`${process.env.STRAPI_URL}/api/posts`);

const paths = postsRes.data.data.map((post) => {
  return {params: {id: post.id.toString()}}
});

  return{
    paths,
    fallback: false,
  };
}