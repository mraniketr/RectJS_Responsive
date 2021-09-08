import React, { useEffect, useState } from "react";

export default function DemoHtml() {
  const [html, sethtml] = useState("");

  fetch("http://localhost:8080/htmldata", {
    method: "GET",
    headers: {
      "Content-Type": "text/html",
    },
  })
    // .then((response) => response.json())
    .then((res) => res.text())
    .then((x) => sethtml(x));
  return html;
}
