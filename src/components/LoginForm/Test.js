import React from "react";
import "./Test.css";
import { useState } from "react";

export default function Test() {
  const [name, setName] = useState("");
  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };
  const isValid = name !== "";
  const [touched, setTouched] = useState(false);
  return (
    <div>
      <input
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
        onBlur={() => setTouched(true)}
        className={
          touched ? (isValid ? "form-control" : "error-control") : null
        }
      />
    </div>
  );
}


