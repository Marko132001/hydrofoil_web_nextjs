import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";

function DeltaOne( {deltaOne, nav} ){

    return(
        <>
            <NavBar navItems={nav} />
            <LayoutElements elements={deltaOne} />
        </>
    );
}

export default DeltaOne;


export async function getStaticProps(){

    const deltaOneRes = await axios.get(`${process.env.STRAPI_URL}/api/delta-one/?populate=deep`);
    const navRes = await axios.get(`${process.env.STRAPI_URL}/api/navigation-items/?populate=deep`);
  
    return {
      props: {
        deltaOne: deltaOneRes.data,
        nav: navRes.data,        
      },       
    };
  }