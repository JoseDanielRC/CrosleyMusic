import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { Button } from "reactstrap";

import "./App.scss";

const App = () => {
  return (
    <div className="outerWrap">
      <div className="App">
        <Nav />
        <Main />
      </div>
      <div className="musicControls">
        Crosley Music Copyright ©2020
        <br />
        Jasser Ramos - Elias Giron <br /> Daniel Rodriguez -Luis Enriquez
      </div>
    </div>
  );
};

export default App;
