import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
//cambiar li por Link
function Navbar() {
  return (
    <>
      <header>
        <div className="navbarTop">
          <button>Login</button>
          <h1>Marca</h1>
          <CartWidget />
        </div>
        <div className="navbarOptionsContainer">
          <ul className="navbarOptions">
            <li>Pants</li>
            <li>Hodies</li>
            <li>Jackets</li>
            <li>Shoes</li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;
