import React from "react";
import ReactDOM from "react-dom/client";

import GetTextAll from "./components/GetTextAll";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.css";
import About from "./components/About.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <BrowserRouter>

    <Routes>
    <Route path="/" element={<Layout />}>

      <Route index element={<GetTextAll />}/>
    
      <Route path="/about" element={<About />}/>
      <Route path="/about/" element={<About />}/>

      <Route path="*" element={<GetTextAll/>} />

     
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
