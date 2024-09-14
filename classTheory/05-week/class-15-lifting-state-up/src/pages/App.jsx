import { createContext } from "react";
import Form from "../components/Form";

export const FormContext = createContext();
export const SocialContext = createContext();

function App() {
 
  return (
    <>
      <h1>Hook - Use Context & Lifting State Up</h1>
      <Form.Provider value={{}} />


    </>
  );
}

export default App;
