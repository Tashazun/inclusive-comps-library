import React from "react";

import "./Button.scss";

export default function Button({ text, style, disabled }) {
  if (disabled === "true") {
    return <button className={`btn btn-${style}`} disabled >{text}</button>;
  }
  return <button className={`btn btn-${style}`} >{text}</button>;

}