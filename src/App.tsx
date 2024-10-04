import "./App.css";
import Toast from "./components/Toast";

function App() {
  return (
    <>
      <h1>Toast Popup</h1>

      <Toast position="top-left" duration={1200} state="success" multiple={true}>
        asd
      </Toast>
      <Toast position="top-left" duration={1200} state="error" multiple={true}>
        asd
      </Toast>
    </>
  );
}

export default App;
