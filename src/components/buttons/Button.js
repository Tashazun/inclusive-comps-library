import React from "react";

import "./Button.scss";

export default function Button({ text, style }) {
  return <button className={`btn btn-${style}`}>{text}</button>;
}