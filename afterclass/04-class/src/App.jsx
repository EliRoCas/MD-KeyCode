import { useState, createContext } from "react";
import Input from "./components/Input";

import InputContext from "./context/InputContext";

const App = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const listInput = [
    { id: 1, text: "Name", setState: setName, type: "text", name: "name" },
    { id: 2, text: "Email", setState: setEmail, type: "email", name: "email" },
    {
      id: 3,
      text: "Password",
      setState: setPassword,
      type: "password",
      name: "password",
    },
    {
      id: 4,
      text: "Confirm Password",
      setState: setConfirmPassword,
      type: "confirmPassword",
      name: "confirmPassword",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      confirmPassword,
    };
    console.log("User has been register" + JSON.stringify(user));
    // console.log("User has been register" + user); --> this form using all with props but not using the listInput
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {listInput.map((input) => (
          <Input
            key={input.id}
            text={input.text}
            setState={input.setState}
            type={input.type}
            name={input.name}
          />
        ))}

        {/* This way is using props as component 
        <Input text="Name" setState={setName} type="text" name="name" />
        <Input text="Email" setState={setEmail} type="email" name="email" />
        <Input
          text="Password"
          setState={setPassword}
          type="password"
          name="password"
        />
        <Input
          text="Confirm Password"
          setState={setConfirmPassword}
          type="confirmPassword"
          name="confirmPassword"
        />
        <button type="submit">Submit</button> */}

        {/* This is the "manual form" without using another component
         <label>
          Name
          <input onChange={handleChange} type="text" name="email" />
        </label>
        <label>
          Email
          <input onChange={handleChange} type="text" name="email" />
        </label>
        <label>
          Password
          <input onChange={handleChange} type="text" name="password" />
        </label>
        <label>
          ConfirmPassword
          <input onChange={handleChange} type="text" name="confirm-password" />
        </label> */}
      </form>
    </>
  );
};

export default App;

// REWIEW ABOUT HOW TO USE USE USESTATE HOOK
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   let count2 = 0;
//   const handleButtonClick = () => {
//     count2 += 1;
//     console.log(count2);

//     setCount((count) => count + 1);
//   };

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={handleButtonClick}>count is {count}</button>
//         <h3> count 2 is {count2}</h3>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;
