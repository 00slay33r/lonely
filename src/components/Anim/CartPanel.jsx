import React from "react";
import { useCart } from "../../context/CartContext";
import styles from "../../components/styles/Cart.module.css";
export default function CartPanel({ open, onClose }) {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`cart-panel${open ? " open" : ""}`}>
      <div className="head">
        <div className="cart-header">YOUR CART</div>
        <i className="fa-solid fa-xmark" onClick={onClose}></i>
      </div>
      <div className="cart">
        {cart.length === 0 ? <div>Cart is empty</div> : cart.map((item, idx) => (
          <div className="cart-item" key={idx}>
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="details">
              <div className="title">{item.name}</div>
              <div className="shipping">SHIPS BY: {item.shippingDate}</div>
            </div>
            <div className="quantity">
              <button onClick={() => updateQuantity(idx, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(idx, 1)}>+</button>
            </div>
            <div className="price">${(item.price * item.quantity).toFixed(2)}</div>
            <i className="fa-solid fa-xmark remove" onClick={() => removeFromCart(idx)}></i>
          </div>
        ))}
      </div>
      <div className="line"></div>
      <div className="foot">
        <div id="subtotal-label">Subtotal:</div>
        <div id="subtotal-amount">${subtotal.toFixed(2)}</div>
      </div>
      <p>Shipping and taxes calculated at checkout</p>
      <button type="submit">Checkout</button>
    </div>
  );
}