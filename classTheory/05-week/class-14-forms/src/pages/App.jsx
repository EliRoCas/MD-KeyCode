import { useState } from "react";

function App() {
  const [odontologist, setOdontologist] = useState({
    nombre: null,
    apellido: null,
    matrícula: null,
  });

  const [name, setName] = useState("");
  const [nameClass, setNameClass] = useState("");

  const [lastname, setLastname] = useState("");
  const [lastnameClass, setLastnameClass] = useState("");

  const [licencePlate, setLicencePlate] = useState("");
  const [licencePlateClass, setLicencePlateClass] = useState("");

  const validationText = (text) => {
    const regex = /^[A-Za-z]+$/; // How we can add accents inside the regex?
    return regex.test(text);
  };

  const validationLicencePlate = (plate) => {
    const regex = /^[A-Za-z]{3}\d{3}$/;
    return regex.test(plate);
  };

  // Functions to validate the inputs
  const handleName = (event) => {
    const name = event.target.value;
    if (validationText(name)) {
      // If we would have used the regex /^[A-Za-z]+$/; we would have to use the following line: if (/^[A-Za-z]+$/.test(name)) {
      console.log("The name valid");
      setName(name);
      setNameClass("valid");
    } else {
      console.log("The name is invalid");
      setNameClass("invalid");
    }
  };
  const handleLastname = (event) => {
    const lastname = event.target.value;
    if (validationText(lastname)) {
      console.log("The lastname valid");
      setLastname(lastname);
      setLastnameClass("valid");
    } else {
      console.log("The lastname is invalid");
      setLastnameClass("invalid");
    }
  };
  const handleLicencePlate = (event) => {
    const licencePlate = event.target.value;
    if (validationLicencePlate(licencePlate)) {
      console.log("The licence plate valid");
      setLicencePlate(licencePlate);
      setLicencePlateClass("valid");
    } else {
      console.log("The licence plate is invalid");
      setLicencePlateClass("invalid");
    }
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
      validationLicencePlate(licencePlate) === false
    ) {
      alert("The licence plate is invalid");
      return;
    }

    // Here is pretty importan to respect the structure of the object, if we don't respect it, we will have an error.
    //So we have to set the object with the same structure as the backend.
    setOdontologist({
      nombre: name,
      apellido: lastname,
      matricula: licencePlate,
    });
  };

  // async function sendForm() {
  //   try {
  //     const response = await fetch("http://localhost:3001/odontologist", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(odontologist),
  //     });

  //     if (response.ok) {
  //       alert("The form was sent successfully");
  //     } else {
  //       alert("An error occurred while sending the form");
  //     }
  //   } catch (error) {
  //     console.error("An error occurred while sending the form", error);
  //   }
  // }

  const fetchData = async (URL) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(odontologist),
    };
    const response = fetch(URL, options);
    const res = (await response).json();

    console.log(res);
  };

  fetchData("http://localhost:3001/odontologist");

  return (
    <>
      <h1>Formularios</h1>
      <form onSubmit={handlerSubmit}>
        <input
          // className={nameClass ? "valid" : "invalid"} // This is the same as the next line, but with a ternary operator instead of a variable in the handleName function
          className={nameClass}
          onChange={handleName}
          type="text"
          name="name"
          autoComplete="firstname"
          placeholder="Write your first name"
          required
        />
        <input
          className={lastnameClass}
          onChange={handleLastname}
          type="text"
          name="lastname"
          autoComplete="lastname"
          placeholder="Write your lastname"
          required
        />
        <input
          className={licencePlateClass}
          onChange={handleLicencePlate}
          type="text"
          name="licencePlate"
          autoComplete="licencePlate"
          placeholder="Write your licence plate"
          required
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default App;
