import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p>₹{product.price}</p>

      <button
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>

      <Link to={`/product/${product.id}`}>
        View Details
      </Link>

      <a
        href={product.amazonLink}
        target="_blank"
        rel="noreferrer"
      >
        Buy On Amazon
      </a>
    </div>
  );
}

export default ProductCard;