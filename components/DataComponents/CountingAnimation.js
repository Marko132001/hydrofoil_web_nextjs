import React, { useEffect } from "react";
import Image from 'next/image';

function CountingAnimation( {element} ){

        useEffect(() => {

            const counters = document.querySelectorAll('.counter');

            counters.forEach((counter) => {

                counter.innerText = '0';
        
                const updateCounter = () => {
                    const target = counter.getAttribute('data-target');
                    const c = +counter.innerText;
        
                    const increment = target / 200;
        
                    if(c < target){
                        counter.innerText = `${Math.ceil(c + increment)}`;
                        setTimeout(updateCounter, 50);
                    }
                };
    
                updateCounter();
            });

          }, []);  


    return(
        <div className="counter-layout">
            {element.CountElement.map((item) => {
                
                return(
                    <div key={item.id} className="counter-container">
                        <i className="image-logo">
                        <Image
                                    src = {process.env.IMAGES_STRAPI_URL + item.logo.data.attributes.url}
                                    alt = "image"
                                    width="100"
                                    height="100"
                            />
                        </i>
                        <div className="counter" data-target={ `${item.numbers}` }></div>
                        <span>{item.description}</span>
                	</div>
                );

            })}

        </div>

    );


}

export default CountingAnimation;