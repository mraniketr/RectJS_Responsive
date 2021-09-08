import React, { useState } from "react";
import DOMPurify from "dompurify";
import DemoHtml from "./demoHtml";
// import demoHtml2 from "./demo.html";

export default function EXTmodule() {
  const [show, setShow] = useState(false);

  const myHTML = DemoHtml();
  const mySafeHTML = DOMPurify.sanitize(myHTML);

  return (
    <>
      <button
        className="btn btn-info"
        onClick={async (e) => {
          e.preventDefault();
          await setShow(true);
          window.loadmsg();
        }}
      >
        Load ext components
      </button>
      {show ? <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} /> : ""}
    </>
  );
}
