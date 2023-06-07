import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <div className="navbarTop">
          <Link className="loginBtn" to="/login">
            Login
          </Link>
          <Link className="brand" to="/">
            Plus Ultra
          </Link>
          <CartWidget />
        </div>
        <div className="navbarOptionsContainer">
          <ul className="navbarOptions">
            <Link className="navLinks" to="/type/Pants">
              Pants
            </Link>
            <Link className="navLinks" to="/type/Hoodie">
              Hoodies
            </Link>
            <Link className="navLinks" to="/type/Jacket">
              Jackets
            </Link>
            <Link className="navLinks" to="/type/Shoes">
              Shoes
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;
