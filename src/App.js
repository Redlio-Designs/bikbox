import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import $ from 'jquery';

import "./style.css"
import Home from "./pages/Home";
import PerfomanceAudit from "./pages/PerfomanceAudit";
import Skan from "./pages/Skan";
import EnterpriseLanding from "./pages/EnterpriseLanding";
import CreativeTesting from "./pages/CreativeTesting";



function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <PerfomanceAudit /> */}
      <EnterpriseLanding />
      {/* <CreativeTesting /> */}
    </>
  );
}

export default App;
