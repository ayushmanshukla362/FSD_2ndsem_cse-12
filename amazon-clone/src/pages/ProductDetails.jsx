import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="details">
      <img
        src={product.image}
        alt={product.title}
      />

      <div>
        <h1>{product.title}</h1>

        <h2>₹{product.price}</h2>

        <button
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>

        <a
          href={product.amazonLink}
          target="_blank"
          rel="noreferrer"
        >
          Buy on Amazon
        </a>
      </div>
    </div>
  );
}

export default ProductDetails;