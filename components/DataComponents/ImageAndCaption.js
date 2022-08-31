import React from 'react';
import Image from 'next/image';

function ImageAndCaption( {element} ) {

    return (
        <>
            <h1 className="about-title">{element.title}</h1>
            <div className="allElements">
                
                {element.imageComponent.map((item) => {

                    return(
                        <a href={item.link} key={item.id}>
                            <div className="imageAndCaption">
                                <div className="image">
                                    <Image src={process.env.IMAGES_STRAPI_URL + item.image.data.attributes.url} 
                                    width={(item.image.data.attributes.width == null) ? "392" : item.image.data.attributes.width} 
                                    height={(item.image.data.attributes.height == null) ? "30" : item.image.data.attributes.height} 
                                    alt="image"  
                                    />
                                </div>
                                <h3 className="name">{item.name}</h3>    
                                <p className="description">{item.description}</p>
                            </div>
                        </a>
                    );

                })}

            </div>
        </>
    );
}

export default ImageAndCaption