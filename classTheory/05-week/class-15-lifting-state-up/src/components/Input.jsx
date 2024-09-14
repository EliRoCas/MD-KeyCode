import { useState } from "react";
import PropTypes from "prop-types";

const Input = ({ typeInput, typeData, id, autoComplete, setState }) => {
  const [nameClass, setNameClass] = useState("");
  const [value, setValue] = useState("");

  const validationText = (text) => {
    const regex = /^[A-Za-z]+$/; // How we can add accents inside the regex?
    return regex.test(text);
  };

  const validationId = (plate) => {
    const regex = /^[A-Za-z]{3}\d{3}$/;
    return regex.test(plate);
  };

  const handlerInput = (e) => {
    const inputData = e.target.value;

    switch (typeData) {
      case "name":
        if (validationText(inputData)) {
          setValue(inputData);
          setNameClass("valid");
        } else {
          setNameClass("invalid");
        }
        break;
      case "lastname":
        if (validationText(inputData)) {
          setValue(inputData);
          setNameClass("valid");
        } else {
          setNameClass("invalid");
        }
        break;
      case "plate":
        if (validationId(inputData)) {
          setValue(inputData);
          setNameClass("valid");
        } else {
          setNameClass("invalid");
        }
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <label htmlFor={id}></label>
      <input
        className={nameClass}
        onChange={handlerInput}
        type={typeInput}
        name={id}
        autoComplete={autoComplete}
        required
      />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  typeInput: PropTypes.string.isRequired,
  typeData: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  setState: PropTypes.func.isRequired,
};
export default Input;
