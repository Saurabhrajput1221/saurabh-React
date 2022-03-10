import React from "react";
import "./App.css";
import YoutubeEmbed from "./Component/Youtube";
import { FaWhatsapp } from "react-icons/fa";
import DropDown from "./Component/DropDown";
// import {FontAwesomeIcon, Card} from 'react-bootstrap'
// import{Switch , Route, Link, BrowserRouter}  from "react-router-dom"

function App() {
  return (
    <div className="App">
      <h1>Youtube Title</h1>
      <YoutubeEmbed embedId="1" />
      {/* {<FontAwesomeIcon icon='fab fa-whatsapp'/>} */}
      <button type="button">
        <FaWhatsapp className="whatsapp" />
        Save Post in Whatsapp
      </button>
      <DropDown />
    </div>
  );
}

export default App;
