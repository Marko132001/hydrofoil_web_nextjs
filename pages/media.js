import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";

function Media( {media, nav} ){

    return(
        <>
            <NavBar navItems={nav} />
            <LayoutElements elements={media} />
        </>
    );
}

export default Media;


export async function getStaticProps(){

    const mediaRes = await axios.get(`${process.env.STRAPI_URL}/api/media/?populate=deep`);
    const navRes = await axios.get(`${process.env.STRAPI_URL}/api/navigation-items/?populate=deep`);
  
    return {
      props: {
        media: mediaRes.data,
        nav: navRes.data,        
      },       
    };
  }