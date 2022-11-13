import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import UserService from "../../../services/UserService";

const MobileNavMenu = () => {

  const [user, setUser] = useState(null);
  const [showUserBoard, setShowUserBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  useEffect(() => {
    const user = UserService.getCurrentUser();
    if (user) {
      setUser(user.data.username);
      if (user.data.role === "Admin") {
        setShowAdminBoard(user.data.role);
      } else if (user.data.role === "Customer") {
        setShowUserBoard(user.data.role);
      }
    }
  }, []);

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

        {user ? (
            <li className="menuItemHasChildren">
              {/*<Link to={process.env.PUBLIC_URL + "/login-register"}>Sign up</Link>*/}
              {showUserBoard && (
                  <Link to={process.env.PUBLIC_URL + "/customer-dashboard"}>Dashboard</Link>
              )}
              {showAdminBoard && (
                  <Link to={process.env.PUBLIC_URL + "/admin-dashboard"}>Dashboard</Link>
              )}
              <Link to={process.env.PUBLIC_URL + "/login"} onClick={UserService.logout}>Logout</Link>
            </li>
        ) : (
            <li className="menuItemHasChildren">
              <Link to={process.env.PUBLIC_URL + "/login"}>Login / Register</Link>
            </li>
        )}
      </ul>
    </nav>
  );
};

export default MobileNavMenu;