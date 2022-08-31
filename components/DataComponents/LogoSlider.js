import React from 'react';
import Image from 'next/image';

function LogoSlider( {element} ) {
  return (
    <div className="logo-slider">
        <h2>{element.title}</h2>
        <p>{element.subtitle}</p>
        <div className="slider-container">
            <div className="slider-content-wrapper fast">
            {element.images.data.map((image) => {

                return(
                    <div key={image.id} className="logo-slide">
                        <Image
                                src = {process.env.IMAGES_STRAPI_URL + image.attributes.url}
                                alt = "image"
                                layout="responsive"
                                width="250"
                                height="100"
                        />
                    </div>
                );
            })}
            </div>
        </div>
        <a href={element.link.url}>{element.link.caption}</a>
    </div>
  )
}

export default LogoSlider