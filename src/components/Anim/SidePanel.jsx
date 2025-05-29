import React from "react";
export default function SidePanel({ open, onClose }) {
  return (
    <div className={`side-panel${open ? " open" : ""}`}>
      <div className="side-panel-head">
        Menu
        <i className="fa-solid fa-xmark" onClick={onClose}></i>
      </div>
      <div className="line"></div>
      <nav className="side-panel-links" onClick={onClose}>
        <a href="/new_shop">New</a>
        <a href="/profile">Login</a>
        <a href="/">Create Account</a>
      </nav>
    </div>
  );
}