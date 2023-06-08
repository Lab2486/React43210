import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContext } from "./context/cartcontext";
import { useState } from "react";
function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="product/:id" element={<ItemDetailContainer />} />
            <Route path="/type/:type" element={<ItemListContainer />}></Route>
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}

export default App;
