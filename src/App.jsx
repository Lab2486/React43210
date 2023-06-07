import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="product/:id" element={<ItemDetailContainer />} />
          <Route path="/type/:typeid" element={<ItemListContainer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
