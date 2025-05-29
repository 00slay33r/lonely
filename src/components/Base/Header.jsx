import React, { useState } from "react";
import SidePanel from "../Anim/SidePanel";
import CartPanel from "../Anim/CartPanel";
import Overlay from "../Anim/overlay";
import { useCart } from "../../context/CartContext";

export default function Header() {
  const [sideOpen, setSideOpen] = useState(false);
  const { cartOpen, setCartOpen } = useCart();

  function handleOverlayClick() {
    if (sideOpen) setSideOpen(false);
    if (cartOpen) setCartOpen(false);
  }

  return (
    <header>
      <SidePanel open={sideOpen} onClose={() => setSideOpen(false)} />
      <nav>
        <button onClick={() => setSideOpen(true)}><i className="fa-solid fa-bars"></i></button>
        <a href="/"><img className="logo" src="/assets/logo.png" alt="Logo" /></a>
        <div className="nav1">
          <li><a href="/profile"><i className="fa-solid fa-user"></i></a></li>
        <button onClick={() => setCartOpen(true)}><i className="fa-solid fa-cart-shopping"></i></button>
        </div>
        
      </nav>
      <CartPanel open={cartOpen} onClose={() => setCartOpen(false)} />
      <Overlay show={sideOpen || cartOpen} onClick={handleOverlayClick} />
    </header>
  );
}