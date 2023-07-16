import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Nav,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const [navopen, setNavOpen] = useState(false);
  const navtoggle = () => {
    setNavOpen(!navopen);
  };
  return (
    <div className="header">
      <Navbar color="dark" dark expand="sm">
        <NavbarBrand href="/">Bohubrihi Resturent</NavbarBrand>
        <NavbarToggler onClick={navtoggle} />
        <Collapse navbar isOpen={navopen}>
          <Nav className="mx-auto navlink" navbar>
            <NavItem>
              <NavLink to={"/"} >Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/menu"}>Menu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/about"}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/contact"}>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
