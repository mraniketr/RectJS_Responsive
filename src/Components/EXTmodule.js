import React, { useState } from "react";
import DOMPurify from "dompurify";
import demoHtml from "./demoHtml";
// import demoHtml2 from "./demo.html";

export default function EXTmodule() {
  const myHTML = demoHtml();
  const mySafeHTML = DOMPurify.sanitize(myHTML);
  const [show, setShow] = useState(false);
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
