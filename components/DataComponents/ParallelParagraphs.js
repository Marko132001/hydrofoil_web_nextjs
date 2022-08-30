import React from "react";
import MarkdownIt from "markdown-it";

function ParallelParagraphs( {element} ) {
  

    return (
        <div className="paragraph-container">
            <div className="cards-wrapper">
            {element.paragraphs.map((element) => {

                const md = new MarkdownIt();
                const htmlContent = md.render(element.description);

                return(
                    
                        <div key={element.id} className="card">
                            <h3>{element.title}</h3>
                            <div className="paragraph-text" dangerouslySetInnerHTML={{__html: htmlContent}}>
                            
                            </div>
                        </div>                  
                );
            })}

            </div>
        </div>
    )
}

export default ParallelParagraphs