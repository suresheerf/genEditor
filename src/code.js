import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-json";
import "prismjs/components/prism-sql";

export default function Code({ code, setCode, language }) {
  console.log("rendered");

  const codeRef = useRef(null);

  useEffect(() => {
    Prism.highlightAll();
  }, [language, code]);

  useEffect(() => {
    // Add a tabindex attribute to make the <code> tag focusable
    if (codeRef.current) {
      codeRef.current.setAttribute("tabindex", "0");
    }
  }, []);

  code = language === "json" ? JSON.stringify(JSON.parse(code), null, 2) : code;

  return (
    <div ref={codeRef}
    onKeyDown={(e) => {
      console.log(e);
      // Handle your keyboard events here
      setCode((pre) => {
        if (e?.key === "Backspace" && pre !== "") {
          return pre.slice(0,pre?.length - 1)
        }
        else if (e?.key === "Enter") {
          return pre += '\n'
        }
        
        return pre += e.key
      })
    }} className="Code">
      <pre>
        <code
          className={`language-${language}`}
        >
          {code}
        </code>
      </pre>
    </div>
  );
}
