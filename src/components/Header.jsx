import {
  FiSearch,
  FiMapPin,
  FiShoppingCart,
  FiGrid,
  FiZap,
  FiTruck,
} from "react-icons/fi";
import styles from "./Header.module.css";

const NAV = [
  { label: "Categorías", icon: FiGrid },
  { label: "Ofertas del Día", icon: FiZap, highlight: true },
  { label: "Envío Gratis", icon: FiTruck },
  { label: "Historial" },
  { label: "Vender" },
  { label: "Ayuda" },
];

export function Header({ cartCount = 0 }) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <a href="/" className={styles.logo}>
            <FiShoppingCart className={styles.logoIcon} />
            <span>EXPRESS -</span>
            <span className={styles.logoLight}>MARCKET</span>
          </a>

          <div className={styles.search}>
            <input
              type="search"
              placeholder="Buscar productos, marcas y más..."
            />
            <button className={styles.searchBtn} aria-label="Buscar">
              <FiSearch />
            </button>
          </div>

          <div className={styles.location}>
            <FiMapPin className={styles.pin} />
            <div>
              <small>Enviar a</small>
              <strong>Ciudad de México, CP 01000</strong>
            </div>
          </div>

          <button className={styles.cart}>
            <FiShoppingCart />
            <span>Carrito</span>
            <span className={styles.cartCount}>{cartCount}</span>
          </button>
        </div>

        <nav className={styles.nav}>
          {NAV.map(({ label, icon: Icon, highlight }) => (
            <a
              key={label}
              href="#"
              className={`${styles.navLink} ${highlight ? styles.navHighlight : ""}`}
            >
              {Icon && <Icon />} {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
