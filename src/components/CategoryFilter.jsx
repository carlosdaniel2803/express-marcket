import { CATEGORIES, CATEGORY_META } from "../utils/categories.js";
import styles from "./CategoryFilter.module.css";

export function CategoryFilter({ selected, onSelect }) {
  return (
    <div className={styles.chips}>
      {CATEGORIES.map((key) => (
        <button
          key={key}
          className={`${styles.chip} ${selected === key ? styles.active : ""}`}
          onClick={() => onSelect(key)}
        >
          {CATEGORY_META[key].label}
        </button>
      ))}
    </div>
  );
}
