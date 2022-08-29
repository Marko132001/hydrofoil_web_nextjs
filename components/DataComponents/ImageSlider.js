import React, {useState} from 'react';
import Image from 'next/image';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


function ImageSlider( {element} ){

    function renderImageSlider(){

        const [current, setCurrent] = useState(0);
        const length = element.images.data.length;
        
        const nextSlide = () => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        };

        const prevSlide = () => {
            setCurrent(current === 0 ? length - 1 : current - 1);
        };


        return (
            <div className="imageSlider-container">
            
            <div className="slider">
                <h2 className="caption">{(element.caption != null || element.caption != "") ? element.caption : ""}</h2>
                {element.images.data.map((image, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (  
                            <Image
                                    image={image}
                                    key={image.id}
                                    className="slider_image"
                                    src = {process.env.STRAPI_URL + image.attributes.url}
                                    alt = "image"
                                    width={(image.attributes.width == 1920) ? "1920" : "1000"}
                                    height={(image.attributes.height == 852) ? "852" : "600"}
                            />
                        )}
                    </div> 
                    
                );
                })}
            </div>

            <nav className="slider-nav">
                <ul>
                    <li className="arrow">
                        <button className="previous">
                            <span>
                                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
                            </span>
                        </button>
                    </li>
                    <li className="arrow">
                        <button className="next">
                            <span>
                                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
            <a href={(element.link == null) ? "" : element.link.url}>{(element.link == null) ? "" : element.link.caption}</a>
            </div>
        );
    }

    return(
        <>
            <div className="slider-container">
                {renderImageSlider()}
            </div>
        </>
    );

}

export default ImageSlider;