import { FiShoppingCart } from "react-icons/fi";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay } from "react-icons/fa";
import styles from "./Footer.module.css";

const SECTIONS = [
  {
    title: "Acerca de",
    links: ["Express Market Info", "Inversionistas", "Términos y condiciones", "Privacidad y Seguridad"],
  },
  {
    title: "Servicios",
    links: ["Vender productos", "Envíos Express", "Pagos Express", "Garantía Protegida"],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <div className={styles.logo}>
            <FiShoppingCart className={styles.logoIcon} />
            <span>EXPRESS</span> - <span className={styles.logoLight}>MARCKET</span>
          </div>
          <p className={styles.description}>
            La plataforma líder de comercio electrónico diseñada para brindarte la
            mejor experiencia de compra rápida, segura y con envíos a todo el país.
          </p>
        </div>

        {SECTIONS.map(({ title, links }) => (
          <div key={title}>
            <h3 className={styles.heading}>{title}</h3>
            <ul className={styles.list}>
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className={styles.link}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className={styles.heading}>Métodos de Pago</h3>
          <div className={styles.payments}>
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
            <FaCcApplePay />
          </div>
          <p className={styles.support}>
            Atención al Cliente:
            <strong>0800-EXPRESS-TIENDA</strong>
          </p>
        </div>
      </div>

      <div className={styles.copy}>
        © 2026 Express Marcket Inc. Todos los derechos reservados.
      </div>
    </footer>
  );
}
