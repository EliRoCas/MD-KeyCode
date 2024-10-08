import { useState } from "react";
import PropTypes from "prop-types";

const InputContex = ({ id, text, setState, type, name }) => {
  const handleInputChange = (e) => {
    setState(e.target.value);
  };

  return (
    <label>
      {text}
      <input onChange={handleInputChange} type={type} name={name} />
    </label>
  );
};

InputContex.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputContex;
