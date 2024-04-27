import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <nav
      class="navbar fixed-top navbar-expand-lg bg-dark bg-body-tertiary"
      data-bs-theme="dark"
      style={{ height: 80 }}
    >
      <div class="container-fluid">
        <Link to={"/"}>
          <img src={logo} width="220" height="50" />
        </Link>
        {/* <a class="navbar-brand" href="/" style={{ color: "white" }}>SINHALA - ENGLISH TRANSLATOR</a> */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link"
                href="/extract-keywords"
                style={{ color: "#bdc1c6 " }}
              >
                Extract Keywords
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="tts" style={{ color: "#bdc1c6" }}>
                Text to Speech
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="stt" style={{ color: "#bdc1c6" }}>
                Speech to Text
              </a>
            </li>
            <li class="nav-item">
              <div class="dropdown">
                <a class="nav-link" style={{ color: "#bdc1c6" }}>
                  Find Synonyms & Antonyms
                </a>
                <div class="dropdown-content">
                  <a href="/synonym">Synonyms</a>
                  <a href="/antonym">Antonyms</a>
                </div>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/addphase" style={{ color: "#bdc1c6" }}>
                Notepad
              </a>
            </li>
          </ul>
        </div>
        <Stack spacing={2} direction="row">
          <Button variant="text" style={{ color: "#2E7D32", outline: "none" }}>
            <Link to={"/login"} style={{ color: "white"}}>Login</Link>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#2E7D32",
              color: "white",
              outline: "none",
            }}
          >
            <Link to={"/signup"} style={{ color: "white"}}>SignUp</Link>
          </Button>
        </Stack>
      </div>
    </nav>
  );
};

export default Navbar;
