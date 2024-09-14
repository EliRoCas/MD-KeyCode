import { useState, useContext } from "react";
import Input from "./Input";

import { FormContext } from "../pages/App";

const Form = () => {
  const { url } = useContext(FormContext);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [licencePlate, setLicencePlate] = useState("");

  const validationText = (text) => {
    const regex = /^[A-Za-z]+$/; // How we can add accents inside the regex?
    return regex.test(text);
  };

  const validationId = (plate) => {
    const regex = /^[A-Za-z]{3}\d{3}$/;
    return regex.test(plate);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (name === "" || name === null || validationText(name) === false) {
      alert("The name is invalid");
      return;
    }

    if (
      lastname === "" ||
      lastname === null ||
      validationText(lastname) === false
    ) {
      alert("The lastname is invalid");
      return;
    }

    if (
      licencePlate === "" ||
      licencePlate === null ||
      validationId(licencePlate) === false
    ) {
      alert("The licence plate is invalid");
      return;
    }
  };

  return (
    <form onSubmit={handlerSubmit}>
      <label htmlFor=""></label>
      <Input
        id="name"
        typeData="name"
        typeInput="text"
        autoComplete={name}
        setValue={setName}
      ></Input>
      <Input
        id="lastname"
        typeData="lastname"
        typeInput="text"
        autoComplete={lastname}
        setValue={setLastname}
      />
      <Input
        id="licencePlate"
        typeData="licencePlate"
        typeInput="text"
        setValue={setLicencePlate}
      />

      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
