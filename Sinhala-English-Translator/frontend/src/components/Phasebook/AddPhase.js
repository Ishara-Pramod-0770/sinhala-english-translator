import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Phasebook.css";
import Header from "../../Header/Navbar";
class AddPhase extends Component {
  state = {
    description: "",
    note: "",
  };

  showAlert = (message, type) => {
    const alertBox = document.createElement("div");
    alertBox.classList.add("custom-alert1", `custom-alert1-${type}`);
    alertBox.textContent = message;

    document.body.appendChild(alertBox);

    setTimeout(() => {
      alertBox.remove();
    }, 3000);
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { description, note } = this.state;

    if (description.trim() === "") {
      this.showAlert("Please enter a note heading", "error");
      return;
    }

    const data = {
      description,
      note,
    };

    axios
      .post("http://localhost:8070/post/save", data)
      .then((res) => {
        if (res.data.success) {
          this.showAlert("Note saved successfully", "success");
          this.setState({
            description: "",
            note: "",
          });
        }
      })
      .catch((error) => {
        console.error("Please enter a note", error);
        this.showAlert("Please enter a note", "error");
      });
  };

  render() {
    return (
      <div className="notepad-container">
        <Header />
        <Link to="/" className="back-btn">
          View Notes
        </Link>

        <h1 className="notepad-title">
          Phase
          <span style={{ color: "#368728", borderBottom: "2px solid #368728" }}>
            book
          </span>
        </h1>
        <form className="notepad-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Note Heading</label>
            
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Enter Your Note Heading"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </div>

          <label style={{ color: "#fff",  }}>
            Note Message
          </label>
          <div className="custom-textarea">
            <textarea
              name="note"
              placeholder="Enter Your Note Message  "
              value={this.state.note}
              onChange={this.handleInputChange}
              style={{ color: "black", fontSize: "16px" }}
            />
          </div>
          <br></br>
          <div className="text-center">
            &nbsp;&nbsp;
            <button className="btn btn-success" type="submit">
              <i className="far fa-check-square"></i>
              Save Note
            </button>
            <br></br>
          </div>
        </form>
      </div>
    );
  }
}

export default AddPhase;
