import { ProductCard } from "./ProductCard.jsx";
import { CategoryFilter } from "./CategoryFilter.jsx";
import styles from "./ProductList.module.css";

export function ProductList({
  products,
  loading,
  error,
  category,
  onCategoryChange,
  onAddToCart,
}) {
  const visible =
    category === "all" ? products : products.filter((p) => p.category === category);

  return (
    <section>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Productos Destacados</h2>
          <p className={styles.subtitle}>
            Los artículos más buscados con los mejores precios
          </p>
        </div>
        <CategoryFilter selected={category} onSelect={onCategoryChange} />
      </div>

      {loading && <p className={styles.status}>Cargando productos...</p>}
      {error && <p className={styles.status}>Error: {error}</p>}

      {!loading && !error && (
        <div className={styles.grid}>
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      )}
    </section>
  );
}
