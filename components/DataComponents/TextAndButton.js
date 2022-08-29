import React from 'react';
import Button from './Button';

function TextAndButton( {element} ) {
  return (
    <div className="text-button">
        <h3>{element.text}</h3>
        <Button element={element} />
    </div>
  )
}

export default TextAndButton