import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #6c24be;
height: 85px;
display: flex;
justify-content: space-between;
padding: 0;
z-index: 12;
`;

export const NavLink = styled(Link)`
color: #ffffff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #e6e6e6;
}
`;
export const NavLink2 = styled(Link)`
color: #ffffff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 4rem;
height: 100%;
cursor: pointer;
&.active {
	color: #e6e6e6;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #ffffff;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
padding: 0 2rem;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;
