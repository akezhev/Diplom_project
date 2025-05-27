<<<<<<< HEAD
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
=======
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="banner_footer"></div>
      <p>Все права защищены &copy;</p>
    </footer>
  );
}
>>>>>>> 36df7236b02d77c994298f3e3b1d645d2a87d2a3
