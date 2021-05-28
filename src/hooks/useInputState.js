import { useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (value) => {
  const [state, setState] = useState(value);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const reset = () => {
    setState("");
  };
  return [state, handleChange, reset];
};
