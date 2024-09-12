import { useState } from "react";

const Form = () => {
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.identifier);
    setData1(e.target.identifier.value);
    e.target.identifier.value = "";
  };

  const handleChange = (event) => {
    let data = event.target.value;
    setData2(data);

    console.log("onChange event has been activated");
  };

  return (
    <article>
      <form onSubmit={handleSubmit}>
        {/* <input
          name="identifier"
          type="text"
          placeholder="Write something about you"
        /> */}
        <input
          onChange={handleChange}
          name="identifier2"
          type="text"
          placeholder="Write something about you"
        />
        {/* <input
          name="data3"
          type="text"
          placeholder="Write something about you"
        /> */}
        <button type="submit">Send</button>
      </form>

      <section>
        <h2>Form Data</h2>
        <p style={{ fontSize: "20px" }}>
          Data 1: <span>{data1}</span>{" "}
        </p>
      </section>
      <section>
        <h2>Input Data</h2>
        <p style={{ fontSize: "20px" }}>
          Input: <span>{data2}</span>{" "}
        </p>
      </section>
    </article>
  );
};

export default Form;
