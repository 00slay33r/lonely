import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "../../components/styles/product.module.css";

export default function Macbook() {
  const { addToCart } = useContext(CartContext);

  const product = {
    name: "Macbook Pro",
    price: 299.99,
    image: "/assets/macbook_pro_black1.png",
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
          <p>Iphone 16 black</p>
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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/gcAl1LoX7TQ?si=s2w5m15MkqnOcusM"
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="no-referrer" allowFullScreen>
        </iframe>
      </div>
    </section>
  );
};