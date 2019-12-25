import React from 'react';
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
} from 'reactstrap';

export const Header = () => {

    const sidemenuToggle = () => {
        document.getElementById("sidebarNav").classList.toggle("open");
    }

    return (
        <Navbar color="white" light expand="lg" className="shadow-sm" sticky="top">
            <div className="d-flex ml-auto hide-lg">
                <Nav>
                    <NavItem>
                        <NavbarToggler
                            className="ml-2"
                            data-toggle="offcanvas"
                            data-target="#sidebarNav"
                            onClick={sidemenuToggle}
                        />
                    </NavItem>
                </Nav>
            </div>
            <Collapse navbar className="main-header">
                <Nav className="ml-auto main-header-right" navbar>
                    <NavItem>
                        <UncontrolledDropdown inNavbar className="navbar__profile-dropdown">
                            <DropdownToggle caret className="navbar__link-btn dropdown-toggle-indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                    <g fill="none" fillRule="evenodd">
                                        <circle cx="10" cy="7.27" r="2.34" fill="#137878" />
                                        <path fill="#137878" fillRule="nonzero" d="M10,0.638520044 C4.82973263,0.638520044 0.638520044,4.82973263 0.638520044,10 C0.638520044,15.1702674 4.82973263,19.36148 10,19.36148 C15.1702674,19.36148 19.36148,15.1702674 19.36148,10 C19.36148,4.82973263 15.1702674,0.638520044 10,0.638520044 Z M14.6074084,16.2850636 L14.6074084,14.99747 C14.6074084,12.4530978 12.5443722,10.3900617 10,10.3900617 C7.4552377,10.3900617 5.39259161,12.4530978 5.39259161,14.99747 L5.39259161,16.2850636 C3.45905594,14.8652391 2.1987667,12.5825983 2.1987667,10 C2.1987667,5.69137885 5.69137885,2.1987667 10,2.1987667 C14.3086211,2.1987667 17.8012333,5.69137885 17.8012333,10 C17.8012333,12.5825983 16.5409441,14.8652391 14.6074084,16.2850636 Z" />
                                    </g>
                                </svg>

                                <span className="navbar__link-btn--label">User name</span>
                            </DropdownToggle>
                            <DropdownMenu right className="p-0 dropdown-menu--profile" id="small-drop-down">
                                <ul className="navbar__profile-dropdown-item-list">
                                    <li>
                                        <Link to={"/member/profile"}>
                                            <img className="main-header__drop-menu-ico" src="/images/global/my-profile.svg" alt="" />
                                            My Profile
                                    </Link>
                                    </li>
                                    <li>
                                        <Link to={"#"}>
                                            <img className="main-header__drop-menu-ico" src="/images/global/logout.svg" alt="" />
                                            Log Out
                                    </Link>
                                    </li>
                                </ul>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}