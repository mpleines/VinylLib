import { useState, useEffect } from 'react';

// uses localStorage to store some state persistently
// using react´s useState
const usePersistentState = (key, defaultValue) => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) || defaultValue
  );
  // update the localStorage if state of key changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  // return new state object and state setter function
  return [state, setState];
}

export default usePersistentState;