import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Slider from "./Components/Slider";
import FormTemplate from "./Components/FormTemplate";
import Sidebar from "./Components/Sidebar";

function App() {
  const [width, setWindowWidth] = useState(0);
  const [device, setDevice] = useState(false);
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;

    setWindowWidth(width);
    if (width > 500) {
      setDevice(true);
    } else {
      setDevice(false);
    }
  };

  return (
    <div className="App">
      <Slider device={device} title="Special title treatment" />
      <Sidebar device={device} />
      {/* <div style={{ margin: "500px" }}></div> */}
      {/* <FormTemplate device={device} /> */}
    </div>
  );
}

export default App;
