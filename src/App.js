import React, { useState, useRef } from 'react';
import "./App.css";

function CodeBox() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const outputRef = useRef(null);

  const handleHtmlChange = (event) => {
    setHtml(event.target.value);
    updateOutput();

  };

  const handleCssChange = (event) => {
    setCss(event.target.value);
    updateOutput();

  };

  const handleJsChange = (event) => {
    setJs(event.target.value);
    updateOutput();

  };

  const updateOutput = () => {
    const output = outputRef.current.contentDocument;
    output.open();
    output.writeln(`
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>${html}</body>
        <script>${js}</script>
      </html>
    `);
    output.close();
  };


  return (
    <div className='code-box'>
      <div className="left window">
        <div className='btn'><button className='material-symbols-outlined' onClick={updateOutput}>Run play_arrow</button></div>
        <div className='textarea-container'>

          <textarea
            value={html}
            onChange={handleHtmlChange}
            placeholder='Type your HTML code here...'
          />

          <textarea
            value={css}
            onChange={handleCssChange}
            placeholder='Type your CSS code here...'
          />


          <textarea
            value={js}
            onChange={handleJsChange}
            placeholder='Type your JavaScript code here...'
          />
        </div></div>
      <div className='right window'>
        <iframe
          title='Output'
          ref={outputRef}
          className='output-iframe'
        /></div>
    </div>
  );
}

export default CodeBox;
