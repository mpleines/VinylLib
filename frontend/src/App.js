import React from "react";
import { Navigation } from "./components/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Main />
      </Router>
    </div>
  );
}

export default App;
