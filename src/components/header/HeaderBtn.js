import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {IoIosMenu} from "react-icons/io";
import UserService from "../../services/UserService";

const HeaderBtn = () => {

    const [user, setUser] = useState(null);
    const [showUserBoard, setShowUserBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);

    const triggerMobileMenu = () => {
        const offcanvasMobileMenu = document.querySelector(
            "#offcanvas-mobile-menu"
        );
        offcanvasMobileMenu.classList.add("active");
    };

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
        <div className="header-btn-wrapper ">
            <ul className="accounts d-none d-lg-flex">
                {/*<li>*/}
                {/*  <Link to={process.env.PUBLIC_URL + "/login-register"}>Log in</Link>*/}
                {/*</li>*/}
                {user ? (
                    <li className="active">
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
                    <li className="active">
                        <Link to={process.env.PUBLIC_URL + "/login"}>Login</Link>
                    </li>

                )}

            </ul>
            <div className="mobile-button-wrapper d-block d-lg-none text-right">
                <button
                    className="mobile-aside-button"
                    onClick={() => triggerMobileMenu()}
                >
                    <IoIosMenu/>
                </button>
            </div>
        </div>
    );
};

export default HeaderBtn;
