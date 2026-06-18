import HeroCarousel from "../components/HeroCarousel";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
  return (
    <>
      <HeroCarousel />

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}

export default Home;