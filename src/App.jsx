import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <ItemListContainer />
        <ItemDetailContainer />
      </div>
    </>
  );
}

export default App;
