import React from "react";

function FormField(props) {
  const { label, name, type, value, onChange } = props;
  return (
    <div className="d-flex justify-content-between">
      <label htmlFor={label}>{label}: </label>
      <input
        type={type || "text"}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default FormField
