import React from "react";

import "./Button.scss";

export default function Button({ text }) {
  return <button className="btn">{text}</button>;
}