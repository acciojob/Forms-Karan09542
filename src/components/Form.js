import React from "react";

const Form = () => {
  return (
    <form id="info-form">
      <input type="text" id="full_name" placeholder="fullname" />
      <input type="email" id="email" placeholder="email" />
      <input type="password" id="password" placeholder="password" />
      <input
        type="password_confirmation"
        id="password_confirmation"
        placeholder="password_confirmation"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
