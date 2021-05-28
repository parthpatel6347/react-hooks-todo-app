import useToggleState from "./useToggleState";
import { useEffect } from "react";

function useDarkMode(key, defaultVal) {
  const [state, toggleState] = useToggleState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, toggleState];
}

export { useDarkMode };
