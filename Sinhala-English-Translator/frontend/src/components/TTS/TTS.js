import React, { useState, useRef } from "react";
import "./TTS.css"; // Importing the CSS file
import logo from "./logo.png";

function TTS() {
  const [inputText, setInputText] = useState("");
  const synthesisRef = useRef(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSpeak = () => {
    if ("speechSynthesis" in window) {
      synthesisRef.current = new SpeechSynthesisUtterance(inputText);
      synthesisRef.current.voice = window.speechSynthesis
        .getVoices()
        .find((voice) => voice.name === "Google UK English Male");
      window.speechSynthesis.speak(synthesisRef.current);
    } else {
      alert("Speech synthesis is not supported in this browser.");
    }
  };

  const handleStop = () => {
    if (synthesisRef.current && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  };

  const handleDownload = () => {
    if ("speechSynthesis" in window) {
      const audioBlob = new Blob([inputText], { type: "audio/wav" });
      const url = URL.createObjectURL(audioBlob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "speech.wav");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("Speech synthesis is not supported in this browser.");
    }
  };

  return (
    <div>
      <div className="heading-1">
       <h1 className="top-heading">
              Text &nbsp;
          <span style={{ color: "#368728", borderBottom: "2px solid #368728" }}>
            To Speech
          </span>
        </h1>
      <br></br>
      <textarea
        placeholder="Type here..."
        className="input-textarea" // Adding class name to textarea
        value={inputText}
        onChange={handleInputChange}
        rows={5}
        cols={50}
      />
      <br></br>
      <button className="btn" onClick={handleSpeak}>
        Speak
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button className="stop-btn" onClick={handleStop}>
        Stop
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn" onClick={handleDownload}>
        Download
      </button>
      </div>
    </div>
  );
}

export default TTS;
