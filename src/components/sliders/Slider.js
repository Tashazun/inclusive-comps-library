import React from "react";

import "./Slider.scss";

const Slider = () => {
return (
  <div>
    <label>Slider</label>
    <input
      type="range"
      min="1"
      max="4"
      value="1"
      step="1"
      aria-label="Slider Count"
      aria-valuetext="value: 1" />
  </div>
  )
}

export default Slider