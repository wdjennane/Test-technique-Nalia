import React, { useState } from "react";

export const Message = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <>
      <a href="#" onClick={() => toggle()}>
        Want to buy a new car?
      </a>
      {show ? <p>Call +11 22 33 44 now!</p> : null}
    </>
  );
};
