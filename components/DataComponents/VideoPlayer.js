import React from "react";
import dynamic from "next/dynamic";


function VideoPlayer( {element} ){

    const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

    function renderVideo(){
        return element.videos.data.map((video) => {
            return <ReactPlayer className="videoPlayer" video={video} key={video.id} controls url={process.env.STRAPI_URL + video.attributes.url} />
        });
    }
    
    return(
        <>
            <div className="videoPlayerLayout">
                <h1 className="about-title">{element.caption}</h1>
                {renderVideo()}
            </div>
        </>        
    );

}

export default VideoPlayer;