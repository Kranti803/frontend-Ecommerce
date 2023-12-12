import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layouts/Header";

function App() {
  return (
   <Router>
   <Header/>
    <Routes>
      <Route path="/" element={''}/>
    </Routes>
   </Router>
  );
}

export default App;
