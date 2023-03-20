import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Account = () => {
  const [currentForm, setCurrentForm] = useState("Login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="Account">
      {currentForm === "Login" ? (
        <Login onformSwitch={toggleForm} />
      ) : (
        <Register onformSwitch={toggleForm} />
      )}
    </div>
  );
};

export default Account;
