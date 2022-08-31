import React from 'react';
import Image from 'next/image';
import dynamic from "next/dynamic";

function HeroSection( {element} ) {

  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

  if(element.__component == "components.hero-section-video"){

    return (
      <div className="heroWrapper">
          <div className="imageWrapper">
            <video autoPlay loop muted src={process.env.IMAGES_STRAPI_URL + element.video.data.attributes.url} />
          </div>
          <div className="heroContent">
            <h1>{element.title}</h1>
          </div>
      </div>
    )
  }

  return (

    <div className="heroWrapper">
      <div className="imageWrapper">
        <Image
          priority
          src = {process.env.IMAGES_STRAPI_URL + element.image.data.attributes.url}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero image example"
        />
      </div>

      <div className="heroContent">
        <h1>{element.title}</h1>
      </div>
    </div>
  )
  
}

export default HeroSection