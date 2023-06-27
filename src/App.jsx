import { useContext, useState, useEffect } from "react";
import Routing from "./routing/Routing";
import "./App.css";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Routing />
      </div>
    </>
  );
}

export default App;
