import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <div className="buttons-containers">
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        <p>{counter}</p>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
