// La API no trae etiquetas ni descuentos: se generan según el id (estable).
const BADGES = ["MÁS VENDIDO", "OFERTA DEL DÍA", "ENVÍO GRATIS", "OFERTA"];
const DISCOUNTS = [20, 25, 10, 38];

export function getProductMeta(id) {
  const i = id % BADGES.length;
  return { badge: BADGES[i], discount: DISCOUNTS[i] };
}
