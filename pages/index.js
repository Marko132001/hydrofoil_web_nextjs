import HomeHeader from "../components/HomeHeader";
import HomeLatestPosts from "../components/HomeLatestPosts";
import LayoutElements from "../components/LayoutElements";
import axios from "axios";
import Image from "next/image";
import vector1 from "../images/vector1.png";
import vector2 from "../images/vector2.png";
import NavBar from "../components/NavBar";

const Vector1 = () => {
  return <Image
          className="vector" 
          src = {vector1}
          alt = "vector1"
          width="2000px"
          height="108px"
          />
}

const Vector2 = () => {
  return <Image
          className="vector"
          src = {vector2}
          alt = "vector2"
          width="2000px"
          height="150px"
          />
}



function Home( {posts, home, nav} ) {
  return (
    <>
      <NavBar navItems={nav} />
      <Vector1 /><Vector2 />
      <HomeHeader />
      <HomeLatestPosts posts={posts}/>
      <LayoutElements elements={home} />
    </>
  )
}


export default Home;


export async function getStaticProps(){

  const postRes = await axios.get(`${process.env.STRAPI_URL}/api/posts/?populate=*`);
  const homeRes = await axios.get(`${process.env.STRAPI_URL}/api/home-page/?populate=deep`);
  const navRes = await axios.get(`${process.env.STRAPI_URL}/api/navigation-items/?populate=deep`);

  return {
    props: {
      posts: postRes.data,
      home: homeRes.data,
      nav: navRes.data,        
    },       
  };
}