// src/components/Editor.js
import React, { useState } from "react";
import { SketchPicker } from "react-color";

function Editor() {
  const [color, setColor] = useState("#FF0000");

  return (
    <div>
      <h2>Vehicle Branding Editor</h2>
      <SketchPicker color={color} onChangeComplete={(newColor) => setColor(newColor.hex)} />
      <div
        style={{
          width: "300px",
          height: "150px",
          backgroundColor: color,
          marginTop: "20px",
        }}
      >
        <p>Canvas Area</p>
      </div>
    </div>
  );
}

export default Editor;
