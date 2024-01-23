import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-sql'

export default function Code({ code, language }) {
  console.log("rendered")
  useEffect(() => {
    Prism.highlightAll();
  }, [language]);
  code = language === 'json'? JSON.stringify(JSON.parse(code),null,2):code;
  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
