import React from "react";

const CustomInput = ({ label, value, setValue, type = "text" }) => {
  return (
    <div style={{ marginBottom: 30 }}>
      <label>{label}</label>
      <input
        style={{ width: "100%" }}
        value={value}
        type={type}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </div>
  );
};

export default CustomInput;
