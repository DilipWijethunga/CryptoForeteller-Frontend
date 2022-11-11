import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Nav} from "react-bootstrap";
import {IconContext} from 'react-icons';

import UserService from "../../../services/UserService";
import Logo from "../../header/Logo";
import './NavbarCustomer.css';

function NavbarCustomer(props) {
    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <Logo
                            image={"/images/logo/1.png"}
                        />
                    </Link>
                    <Nav>
                        <li className="nav-item">
                            <Link to={'/customer-dashboard'} className={'nav-link text-white'}> Dashboard </Link>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <Link to={'/customer-profile'} className={'nav-link text-white'}> Profile </Link>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <Link className={'nav-link text-white'} onClick={UserService.logout}> Logout </Link>
                        </li>

                    </Nav>
                </div>
            </IconContext.Provider>
        </>
    );
}

export default NavbarCustomer;
