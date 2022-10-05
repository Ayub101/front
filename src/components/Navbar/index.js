import React from "react";
import { Nav, NavLink,  NavLink2, NavMenu } 
    from "./Nav_elements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
        <NavLink to="/homepage" activeStyle>
            Home Page 
          </NavLink>
          <NavLink to="/audiobook" activeStyle>
            Audio Book
          </NavLink>
          <NavLink to="/videobook" activeStyle>
            Video Book
          </NavLink>
          <NavLink to="/liveroom" activeStyle>
            Live Rooms
          </NavLink>
        </NavMenu>
        <NavLink2 to="/sign-up" activeStyle>
            Sign Up
          </NavLink2>
      </Nav>
    </>
  );
};
  
export default Navbar;