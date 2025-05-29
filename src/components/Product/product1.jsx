import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "../../components/styles/product.module.css";

export default function Iphone16() {
  const { addToCart } = useContext(CartContext);

  const product = {
    name: "Iphone 16",
    price: 299.99,
    image: "/assets/iphone_16_black.png",
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
              <li>6.7" OLED display</li>
              <li>A18 Bionic chip</li>
              <li>512 GB storage</li>
              <li>48MP dual camera</li>
              <li>iOS 18</li>
              <li>Face ID and 5G</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles["video-wrapper"]}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/GDlkCkcIqTs?si=TWLXJLEoLHupeTqm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer" allowFullScreen>
        </iframe>
      </div>
    </section>
  );
};