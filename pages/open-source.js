import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";

function OpenSource( {openSource, nav} ){

    return(
        <>
            <NavBar navItems={nav} />
            <LayoutElements elements={openSource} />
        </>
    );
}

export default OpenSource;


export async function getStaticProps(){

    const openSourceRes = await axios.get(`${process.env.STRAPI_URL}/api/open-source/?populate=deep`);
    const navRes = await axios.get(`${process.env.STRAPI_URL}/api/navigation-items/?populate=deep`);
  
    return {
      props: {
        openSource: openSourceRes.data,
        nav: navRes.data,        
      },       
    };
  }