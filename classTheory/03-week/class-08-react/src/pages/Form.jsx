import React from "react";
import PropTypes from "prop-types";
import Input from "../components/atoms/Input";

const Form = () => {
  return (
    <form>
      <h1>Contact Us</h1>
      <article>
        <Input text="First Name" type="name" />
      </article>

      <label htmlFor="email">
        <span>Email Adress</span>
      </label>
    </form>
  );
};

Form.propTypes = {};

export default Form;
