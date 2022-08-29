import "../styles/index.scss";
import React from "react";
import Footer from "../components/Footer";


function MyApp({ Component, pageProps }) {


  return (
    <>
      
        <Component {...pageProps} />
      <Footer />
    </>
    );
}



export default MyApp;