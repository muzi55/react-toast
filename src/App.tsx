import React, { useState } from "react";
import "./App.css";
import ToastContainer from "./components/ToastContainer";
import { addToast } from "./components/toastManager";

function App() {
  const [state, setState] = useState(0);
  const notify = () => {
    addToast({
      position: "top-left",
      duration: 1200,
      state: "success",
      multiple: true,
      message: `Wow so easy! ${state}`,
    });
    setState((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <h1>Toast Popup</h1>
      <ToastContainer />
    </div>
  );
}

export default App;
