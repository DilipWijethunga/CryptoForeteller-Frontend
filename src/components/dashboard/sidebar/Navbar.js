import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {IconContext} from 'react-icons';
import {Nav} from "react-bootstrap";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                    <Nav>
                        <li className="nav-item">
                            <Link to={'/admin-dashboard'} className={'nav-link text-white'}> Dashboard </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/news-list'} className={'nav-link text-white'}> News </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/coins-list'} className={'nav-link text-white'}> Coins </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/'} className={'nav-link text-white'}> Logout </Link>
                        </li>

                    </Nav>
                </div>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
