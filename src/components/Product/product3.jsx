import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "../../components/styles/product.module.css";

export default function Airpods() {
  const { addToCart } = useContext(CartContext);

  const product = {
    name: "Airpods Pro 2",
    price: 99.99,
    image: "/assets/airpods_pro_2.png",
  };

  return (
    <section className={styles["product-page"]}>
      <div className={styles["product-grid"]}>
        <div className={styles["product-image"]}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={styles["product-details"]}>
          <h1>{product.name}</h1>
          <p className={styles["price"]}>${product.price}</p>
          <button className={styles["add-to-cart"]} onClick={() => addToCart(product)}>Add to Cart</button>
          <p className={styles["shipping"]}>SHIPS BY: SEPTEMBER 1, 2025</p>
          <p>Airpods pro 2</p>
          <div className={styles["description"]}>
            <h3>Description:</h3>
            <ul>
              <li>16" Liquid Retina XDR display</li>
              <li>Apple M3 Pro chip (12-core CPU / 18-core GPU)</li>
              <li>512 GB SSD storage</li>
              <li>18 GB unified memory</li>
              <li>macOS Sonoma</li>
              <li>1080p FaceTime HD camera</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles["video-wrapper"]}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ql6mhhHCldY?si=500FnznAJUNAgfJB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer" allowFullScreen>
        </iframe>
      </div>
    </section>
  );
};