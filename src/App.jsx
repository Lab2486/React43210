import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
  return (
    <>
      <div>
        <Navbar />

        <ItemListContainer />

        <ItemCount stock={5}></ItemCount>
      </div>
    </>
  );
}

export default App;
