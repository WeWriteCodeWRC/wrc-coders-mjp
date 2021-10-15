import React, { useEffect } from "react";
import "../src/styles/main.css";
import Header from "./components/Header";

function App() {
  useEffect(() => {
    const fetchyFetch = async () => {
      let data = await fetch(
        "https://api.github.com/repos/rosekamallove/wrc-coders-mjp/contributors"
      );
      let realData = await data.json();
      console.log(realData);
    };
    fetchyFetch();
  });
  return (
    <div>
      <Header />
      Hello
    </div>
  );
}

export default App;
