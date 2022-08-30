import React from 'react';
import Image from 'next/image';

function SplitScreen( {element} ) {
  return (
    <>
    <div className="wrapper-splitScreen">

        {element.splitScreen.map((item) => {

          return(

            <div key={item.id} className={item.fullScreen ? 'left center' : 'left'}>
                <div className="image">
                <Image
                  priority
                  src = {process.env.STRAPI_URL + item.image.data.attributes.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="hero image example"
                />
                </div>
                <div className="caption">
                    <h1>{item.title}</h1>
                    <a className="button" href={item.url}>{item.link_caption}</a>
                </div>
            </div>

          );    

        })}    

    </div>

    </>
  )
}

export default SplitScreen