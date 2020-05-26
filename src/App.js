import React from "react";
import { PrimaryButton, SecondaryButton } from "./components/Buttons";

function App() {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <PrimaryButton>Sign Up</PrimaryButton>
      <SecondaryButton>Log In</SecondaryButton>
    </div>
  );
}

export default App;
