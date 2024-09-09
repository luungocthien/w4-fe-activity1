import { useState } from "react";
import "./UseState.css";

// const ToggleHandler = (currentTheme, nextTheme) => {
//   if (currentTheme === "light") {
//     nextTheme("dark");
//   } else nextTheme("light");
// };

//Better pra ctice regarding current theme and next theme?
const ToggleHandler = (currentTheme, nextTheme) => {
  if (currentTheme === "light") {
    nextTheme("dark");
  }
  if (currentTheme === "dark") {
    nextTheme("light");
  }
};

const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => ToggleHandler(theme, setTheme)}>
        Toggle Theme
      </button>
      <h2>{count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
