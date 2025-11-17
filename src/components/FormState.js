import React from "react";

const FormState = () => {
  const [data, setData] = React.useState({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  function onChangeValue(e) {
    setData({ ...data, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !data.full_name.trim() ||
      !data.email.trim() ||
      !data.password.trim() ||
      !data.password_confirmation.trim()
    )
      return;

    if (data.password !== data.password_confirmation) return;
    console.log(data);
    setData({})
  }
  return (
    <form onSubmit={handleSubmit} id="info-form">
      <input
        onChange={onChangeValue}
        value={data.full_name}
        type="text"
        id="full_name"
        placeholder="fullname"
      />
      <input
        onChange={onChangeValue}
        value={data.email}
        type="email"
        id="email"
        placeholder="email"
      />
      <input
        onChange={onChangeValue}
        value={data.password}
        type="password"
        id="password"
        placeholder="password"
      />
      <input
        onChange={onChangeValue}
        value={data.password_confirmation}
        type="password_confirmation"
        id="password_confirmation"
        placeholder="password_confirmation"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormState;
