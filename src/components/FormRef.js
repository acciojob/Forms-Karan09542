import React from "react";

const FormRef = () => {
  const formRef = React.useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(formRef.current);
    const data = Object.fromEntries(form);
    if (
      !data.full_name.trim() ||
      !data.email.trim() ||
      !data.password.trim() ||
      !data.password_confirmation.trim()
    )
      return;

    if (data.password !== data.password_confirmation) return;
    console.log(data);
    formRef.current.reset();
  }
  return (
    <form onSubmit={handleSubmit} id="info-form" ref={formRef}>
      <input
        type="text"
        id="full_name"
        name="full_name"
        placeholder="fullname"
      />
      <input type="email" id="email" name="email" placeholder="email" />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="password"
      />
      <input
        type="password_confirmation"
        id="password_confirmation"
        name="password_confirmation"
        placeholder="password_confirmation"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormRef;
