import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import styles from "./Banner.module.css";

const DEFAULT_SLIDES = [
  {
    tag: "SÚPER OFERTAS DE VERANO",
    title: "Tecnología con hasta 40% OFF",
    text: "Aprovecha envíos express y cuotas sin interés en miles de productos seleccionados.",
    cta: "Explorar Ofertas",
  },
  {
    tag: "NUEVA COLECCIÓN",
    title: "Moda para toda la temporada",
    text: "Descubre las últimas tendencias con envío gratis en tu primera compra.",
    cta: "Ver Colección",
  },
  {
    tag: "SOLO POR HOY",
    title: "Joyería con descuentos únicos",
    text: "Piezas seleccionadas con precios especiales por tiempo limitado.",
    cta: "Ver Ofertas",
  },
];

export function Banner({ slides = DEFAULT_SLIDES, interval = 5000 }) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), interval);
    return () => clearInterval(id);
  }, [total, interval]);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);
  const slide = slides[index];

  return (
    <section className={styles.banner}>
      <button className={`${styles.arrow} ${styles.left}`} onClick={prev} aria-label="Anterior">
        <FiChevronLeft />
      </button>

      <div className={styles.content}>
        <span className={styles.tag}>{slide.tag}</span>
        <h2 className={styles.title}>{slide.title}</h2>
        <p className={styles.text}>{slide.text}</p>
        <button className={styles.cta}>
          {slide.cta} <FiArrowRight />
        </button>
      </div>

      <button className={`${styles.arrow} ${styles.right}`} onClick={next} aria-label="Siguiente">
        <FiChevronRight />
      </button>

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Ir a la diapositiva ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
