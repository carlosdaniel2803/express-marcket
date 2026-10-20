import { useState } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { getProductMeta } from "../utils/productMeta.js";
import styles from "./ProductCard.module.css";

export function ProductCard({ product, onAddToCart }) {
  const [liked, setLiked] = useState(false);
  const { badge, discount } = getProductMeta(product.id);
  const oldPrice = (product.price / (1 - discount / 100)).toFixed(2);

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img className={styles.image} src={product.image} alt={product.title} />
        <div className={styles.tags}>
          <span className={styles.badge}>{badge}</span>
          <span className={styles.discount}>-{discount}%</span>
        </div>
        <button
          className={`${styles.like} ${liked ? styles.liked : ""}`}
          onClick={() => setLiked(!liked)}
          aria-label="Favorito"
        >
          <FiHeart />
        </button>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.prices}>
          <span className={styles.price}>${product.price}</span>
          <span className={styles.oldPrice}>${oldPrice}</span>
        </div>
        <button className={styles.button} onClick={() => onAddToCart?.(product)}>
          <FiShoppingCart /> Agregar al carrito
        </button>
      </div>
    </article>
  );
}
