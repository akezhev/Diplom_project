import React from "react";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  
  return (
    <footer>
      {location.pathname === '/' && <div className="banner_footer"></div>}
      <p>Все права защищены &copy;</p>
    </footer>
  );
}
