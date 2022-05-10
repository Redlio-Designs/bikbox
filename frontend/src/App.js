import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import $ from 'jquery';


import { Routes, Route } from "react-router-dom";
import "./style.css"
import Home from "./pages/Home";
import PerfomanceAudit from "./pages/PerfomanceAudit";
import Skan from "./pages/Skan";
import EnterprigitseLanding from "./pages/EnterpriseLanding";
import CreativeTesting from "./pages/CreativeTesting";
import Blog from "./pages/Blog";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="performanceAudit" element={<PerfomanceAudit />} />
        <Route path="skan" element={<Skan />} />
        <Route path="enterpriseLanding" element={<EnterprigitseLanding />} />
        <Route path="creativeTesting" element={<CreativeTesting />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
