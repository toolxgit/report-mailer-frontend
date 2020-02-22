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
                        <p>Powered By Toolx</p>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}