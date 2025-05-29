import React from "react";
export default function Footer() {
  return (
    <footer>
      <div className="icons">
        <a href="#"><i className="fa-brands fa-spotify"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <a href="#"><i className="fa-brands fa-discord"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
      </div>
      <div className="support">
        <a href="#">Help & Support</a>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Do Not Sell My Personal Information</a>
        <a href="#">Cookie Choices</a>
      </div>
      <div className="copyright">
        © 2025 Shop | lonely
      </div>
      <div className="accessibility">
        IF YOU ARE USING A SCREEN READER AND ARE HAVING PROBLEMS USING THIS WEBSITE, PLEASE CALL 000-000-000 FOR ASSISTANCE.
      </div>
    </footer>
  );
}