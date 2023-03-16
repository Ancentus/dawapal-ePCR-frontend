import React from "react";

const FormButton = (props) => {
  const { text, onClick } = props;
  return <button className="btn btn-primary mx-2" text={text} onClick={onClick}>{text}</button>;
};

export default FormButton;
