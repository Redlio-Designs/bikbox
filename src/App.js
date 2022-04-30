import React from "react";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import $ from 'jquery';


import Home from "./pages/Home";
import PerfomanceAudit from "./pages/PerfomanceAudit";
import Skan from "./pages/Skan";


function App() {
  return (
    <>
      <Home />
      {/* <PerfomanceAudit /> */}
      {/* <Skan/> */}
    </>
  );
}

export default App;
