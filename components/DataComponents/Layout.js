import React from 'react';
import ImageSlider from './ImageSlider';
import VideoPlayer from './VideoPlayer';
import CountingAnimation from './CountingAnimation';
import HeroSection from './HeroSection';
import ParallelParagraphs from './ParallelParagraphs';
import TextAndImage from './TextAndImage';
import TitleAndText from './TitleAndText';
import ImageAndCaption from './ImageAndCaption';
import TextAndButton from './TextAndButton';
import WebForm from './WebForm';
import LogoSlider from './LogoSlider';
import SplitScreen from './SplitScreen';


function Layout( {element} ){
    
    
    if(element.__component == "components.video-player"){

        return(
            <>
                <VideoPlayer element={element} />
            </>        
        );

    }
    else if(element.__component == "components.image-slider"){

        return(
            <>
                <ImageSlider element={element} />
            </>
        );
    }
    else if((element.__component == "components.zig-zag") || (element.__component == "components.text-and-video")){

       return(
            <>
                <TextAndImage element={element} />
            </>
       );
    }
    else if(element.__component == "components.title-and-text"){

        return(
            <>
                <TitleAndText element={element} />
            </>
        );
    }
    else if(element.__component == "components.counting-animation"){

        return(
            <>
                <CountingAnimation element={element} />
            </>
        );
    }
    else if(element.__component == "components.hero-section-video" || element.__component == "components.hero-section-image"){

        return(
            <>
                <HeroSection element={element} />
            </>
        );
    }
    else if(element.__component == "components.parallel-paragraphs"){        

        return(
           <>
                <ParallelParagraphs element={element} />
           </>
        );

    }
    else if(element.__component == "components.title-and-images"){

        return(
            <>
                <ImageAndCaption element={element} />
            </>
        );
    }
    else if(element.__component == "components.text-and-button"){

        return(
            <>
                <TextAndButton element={element} />
            </>
        );

    }
    else if(element.__component == "components.web-form"){

        return(
            <>
                <WebForm element={element} />
            </>
        );
    }
    else if(element.__component == "components.logo-slider"){

        return(
            <>
                <LogoSlider element={element} />
            </>
        );
    }
    else if(element.__component == "components.split-screen-element"){
        
        return(
            <>
                <SplitScreen element={element} />
            </>
        );
    }


    return(
        <>

        </>
    );

    
}

export default Layout;