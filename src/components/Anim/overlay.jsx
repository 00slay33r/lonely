import React from "react";
export default function Overlay({ show, onClick }) {
  return (
    <div id="overlay" style={{ display: show ? "block" : "none" }} onClick={onClick}></div>
  );
}