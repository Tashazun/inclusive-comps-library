import React from "react";

import "./Input.scss";

export default function Input({ label, name }) {
  return (
    <div className="input">
      <label labelfor="input" className="input__label">{label}</label>
      <input
        type="text"
        id="input"
        className="input__textarea"
        name={name}
  />
    </div>
  )
}