import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TranslationApp from "./translator/Translator";
import TTS from "./components/TTS/TTS";
import STT from "./components/STT/STT";
import Header from './Header/Navbar';

import Phasebook from "./components/Phasebook/Phasebook";
import AddPhase from "./components/Phasebook/AddPhase";
import ViewPhase from "./components/Phasebook/ViewPhase";
import EditPhase from "./components/Phasebook/EditPhase";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<TranslationApp />} />
          <Route path="tts" element={<TTS />} />
          <Route path="stt" element={<STT />} />

          <Route path="/viewphasebook" element={<ViewPhase />} />
          <Route path="/phasebook" element={<Phasebook />} />
          <Route path="/addphase" element={<AddPhase />} />
          <Route path="/editphase/:id" element={<EditPhase />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
