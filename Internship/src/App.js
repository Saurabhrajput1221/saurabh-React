import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import {NavDropdown,} from 'react-bootstrap'
import YoutubeEmbed from "./Component/Youtube";
import { FaWhatsapp } from "react-icons/fa";
import DropDown from "./Component/DropDown";

function App() {
  return (
    <>
      <div className="App">
        <h1>Youtube Title</h1>
        <YoutubeEmbed embedId="1" />
        <button type="button">
          <FaWhatsapp className="whatsapp" />
          Save Post in Whatsapp
        </button>
      </div>
      <DropDown />
    </>
  );
}

export default App;
