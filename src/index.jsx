import React from "react";
import { render } from "react-dom";
import Routes from "/routes";

function App() {
  return <Routes />;
}

render(<App />, document.getElementById("root"));
