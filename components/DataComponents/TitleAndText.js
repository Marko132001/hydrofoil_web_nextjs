import React from 'react';
import MarkdownIt from "markdown-it";

function TitleAndText( {element} ) {

    const md = new MarkdownIt();
    const htmlContent = md.render(element.description);

    return(
        
        <div className="title-and-text">
            <div className="layout_title">
                <h3>{element.title}</h3>
            </div>
            <div className="text_statistic" dangerouslySetInnerHTML={{__html: htmlContent}}>

            </div>
        </div>
    );
}

export default TitleAndText