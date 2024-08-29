import React, { Children } from "react";
import PropTypes from "prop-types"

function Image ({ clildren, texts, numbers, booleans, arrays, objects }) {
  return (
      <figcaption className="childrenComponent">
      {clildren}
      <span>{texts}</span>
      </figcaption>
  ); 
}

Image.prototypes = {
    children: PropTypes.element, 
    text: PropTypes.string, 
    number: PropTypes.number,
    booleans: PropTypes.bool,
    arrays: PropTypes.array,
    object: PropTypes.object,
}
export default Image;
