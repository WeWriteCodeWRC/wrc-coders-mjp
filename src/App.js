import React from "react";
import "../src/styles/main.css";
import Card from "./components/ContributorCard";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const apiEndPoint =
    "https://api.github.com/repos/rosekamallove/wrc-coders-mjp/contributors";

  return (
    <div className="App">
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
