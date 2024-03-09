import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/pages/firstPage/home";
import { Poster } from "./Components/pages/secondPage/poster";
import { PosterItem } from "./Components/pages/thirdPage/posteritem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/poster" Component={Poster} />
        <Route path="/poster/77" Component={PosterItem} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
