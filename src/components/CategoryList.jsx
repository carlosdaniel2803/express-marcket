import { FiList } from "react-icons/fi";
import { CATEGORIES, CATEGORY_META } from "../utils/categories.js";
import styles from "./CategoryList.module.css";

export function CategoryList({ selected, onSelect }) {
  return (
    <section>
      <h2 className={styles.heading}>
        <FiList className={styles.headingIcon} /> Categorías Populares
      </h2>
      <div className={styles.row}>
        {CATEGORIES.map((key) => {
          const { label, icon: Icon } = CATEGORY_META[key];
          return (
            <button
              key={key}
              className={`${styles.item} ${selected === key ? styles.active : ""}`}
              onClick={() => onSelect(key)}
            >
              <span className={styles.icon}><Icon /></span>
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
