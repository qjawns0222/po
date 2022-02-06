import "./App.css";
import { useState } from "react";
import Modal from "./component/Modal";

function App() {
  const [visible, setVisible] = useState(false);
  const open = () => {
    setVisible(true);
  };
  const close = () => {
    setVisible(false);
  };
  return (
    <div>
      <button onClick={open}>open</button>
      {visible && (
        <Modal>
          <div
            style={{
              width: "100vw",
              height: "100vh",

              background: "rgba(0,0,0,0.5)",
            }}
            onClick={close}
          >
            hello
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
