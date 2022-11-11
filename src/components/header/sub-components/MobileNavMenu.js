import React from "react";
import { Link } from "react-router-dom";

const MobileNavMenu = () => {
  return (
    <nav className="offcanvasNavigation" id="offcanvas-navigation">
      <ul>
        <li className="menuItemHasChildren">
          <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
        </li>

        <li className="menuItemHasChildren">
          <Link to={process.env.PUBLIC_URL + "/coins"}>Coins</Link>
        </li>

        <li className="menuItemHasChildren">
          <Link to={process.env.PUBLIC_URL + "/news"}>News</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
        </li>
        <li className="menuItemHasChildren">
          <Link to={process.env.PUBLIC_URL + "/login"}>Login / Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
