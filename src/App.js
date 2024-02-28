import React, { Component } from "react";
import { Bar } from "./Components/Bar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublishPage } from "./Components/pages/PublishPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" Component={Bar}/>
      <Route path="/Publisher" Component={PublishPage}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
