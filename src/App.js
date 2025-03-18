import React from "react";
import Layout from "./components/Layout"; // Import your portfolio layout
import "./assets/css/style.css";
import "./assets/css/mediaqueries.css";

function App() {
  return (
    <div className="App">
      <Layout />  {/* This will render your portfolio */}
    </div>
  );
}

export default App;
