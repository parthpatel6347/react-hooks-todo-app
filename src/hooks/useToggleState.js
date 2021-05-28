import { useState } from "react";

function useToggleState(val) {
  const [state, setState] = useState(val);

  const toggleState = () => {
    setState(!state);
  };
  return [state, toggleState];
}

export default useToggleState;
