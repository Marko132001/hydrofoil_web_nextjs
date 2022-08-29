import React from "react";
import Layout from "./DataComponents/Layout";

function LayoutElements({ elements }){
    function renderLayoutElements(){
        return elements.data.attributes.layout.map((element) => {
            return <Layout element={element} key={element.id} />
        });
    }

    return (
        <>
            <div className="elements-layout">    
                {renderLayoutElements()}
            </div>
        </>
    );
}

export default LayoutElements;