import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  const count = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Amazon
      </Link>

      <input
        className="search"
        placeholder="Search products..."
      />

      <Link to="/cart">
        Cart ({count})
      </Link>
    </nav>
  );
}

export default Navbar;