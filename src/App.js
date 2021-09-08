import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Slider from "./Components/Slider";
import FormTemplate from "./Components/FormTemplate";
import Sidebar from "./Components/Sidebar";
import EXTmodule from "./Components/EXTmodule";

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
    if (width > 600) {
      setDevice(true);
    } else {
      setDevice(false);
    }
  };

  return (
    <div className="App" style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column", flex: 2 }}>
        <Slider device={device} title="This is a dynamic text" />
        <EXTmodule />
      </div>
      <Sidebar device={device} />
      {/* <div style={{ margin: "500px" }}></div> */}

      {/* <FormTemplate device={device} /> */}
    </div>
  );
}

export default App;
