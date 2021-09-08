import React, { useState } from "react";

export default function Sidebar(props) {
  return (
    <div
      style={{
        minWidth: "20vw",
        minHeight: "100vh",
        backgroundColor: "#D3D3D3",
        display: props.device ? "block" : "none",
        padding: "2rem",
      }}
    >
      <h1 class="text-justify">SIDEBAR</h1>
      <p class="text-justify">Hidden on mobile</p>
    </div>
  );
}
