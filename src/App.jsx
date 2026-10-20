import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header.jsx";
import { Banner } from "./components/Banner.jsx";
import { CategoryList } from "./components/CategoryList.jsx";
import { ProductList } from "./components/ProductList.jsx";
import { Footer } from "./components/Footer.jsx";
import { useProducts } from "./hooks/useProducts.js";

export function App() {
  const [category, setCategory] = useState("all");
  const [cartCount, setCartCount] = useState(0);
  const { products, loading, error } = useProducts();

  return (
    <div className={styles.app}>
      <Header cartCount={cartCount} />
      <main className={styles.main}>
        <Banner />
        <CategoryList selected={category} onSelect={setCategory} />
        <ProductList
          products={products}
          loading={loading}
          error={error}
          category={category}
          onCategoryChange={setCategory}
          onAddToCart={() => setCartCount((c) => c + 1)}
        />
      </main>
      <Footer />
    </div>
  );
}
