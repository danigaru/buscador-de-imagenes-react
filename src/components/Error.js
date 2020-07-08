import React from "react";

const Error = ({ message }) => {
  return (
    <p className="my-3 p-4 text-center text-black alert alert-danger font-weight-bold  text-uppercase">
      {message}
    </p>
  );
};

export default Error;
