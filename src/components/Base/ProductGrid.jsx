import React from "react";
import styles from "../../components/styles/ProductGrid.module.css";

const products = [
  {
    name: "Iphone 16",
    price: 299.99,
    image: "/assets/iphone_16_black.png",
    shippingDate: "SEPTEMBER 1, 2025",
    link: "/products/Iphone_16"
  },
  {
    name: "Macbook Pro",
    price: 299.99,
    image: "/assets/macbook_pro_black.png",
    shippingDate: "SEPTEMBER 1, 2025",
    link: "/products/Macbook_pro"
  },
  {
    name: "Airpods Pro 2",
    price: 99.99,
    image: "/assets/airpods_pro_2.png",
    shippingDate: "SEPTEMBER 1, 2025",
    link: "/products/Airpods_pro_2"
  },
  {
    name: "Apple Watch s10",
    price: 99.99,
    image: "/assets/apple_watch_black.png",
    shippingDate: "SEPTEMBER 1, 2025",
    link: "/products/Apple_watch_series_10"
  }
];

const imageClasses = {
  "Iphone 16": styles.iphone,
  "Macbook Pro": styles.macbook,
  "Airpods Pro 2": styles.airpods,
  "Apple Watch s10": styles.watch
};

export default function ProductGrid() {
  return (
    <main className={styles.product}>
      {products.map((p, i) => (
        <div key={i}>
          <a href={p.link}>
            <img
              src={p.image}
              alt={p.name}
              className={`${styles.image} ${imageClasses[p.name]}`}
            />
          </a>
          <div className={styles.title}><p>{p.name}</p></div>
          <div className={styles.price}><p>${p.price}</p></div>
        </div>
      ))}
    </main>
  );
}
