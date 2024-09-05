import { useEffect, useState } from "react";

const UseEffect = () => {
  const [variable, setVariable] = useState("Start Value");

  const URL = "https://jsonplaceholder.typicode.com/users";

  const callApi = async (url) => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callApi(URL);

    console.log("The component has been mounted");
  }, [variable]);

  return (
    <div>
      <button
        onClick={() => {
          setVariable("Value Change");
        }}
      >
        {" "}
        UseState change value
      </button>
    </div>
  );
};

export default UseEffect;
