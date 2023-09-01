import React, { useState } from "react";
import "./App.css";
import DashBoardView from "./views/DashBoardView";
import Nav from "./Components/Nav";
function App() {
  

  return (
    <>
     <div className="App">
      <Nav/>
      <DashBoardView/>
     </div>
    
    </>
  );
}

export default App;
