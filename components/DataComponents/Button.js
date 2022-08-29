import React from 'react';

function Button( {element} ) {

  return (
    <div className="button-container">
        <a href={element.button.link} className="button button-5">{element.button.text}</a>
    </div>
  );
}

export default Button