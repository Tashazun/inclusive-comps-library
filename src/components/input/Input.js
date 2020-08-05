import React from "react";

import "./Input.scss";

export default function Input({ label, name }) {
  return (
    <div>
      <label labelFor="input">{label}</label>
      <input
        type="text"
        id="input"
        className="input"
        name={name}
  />
    </div>
  )
}