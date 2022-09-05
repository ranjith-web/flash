import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header/index.jsx';
import Articles from './components/Articles/index.jsx';

ReactDOM.render(
  <main style={{display: "block"}}>
    <Header />
    <Articles />
  </main>,
  document.getElementById("flash-app")
);
