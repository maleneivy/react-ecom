import { Link } from "react-router-dom";
import * as S from "./index.styles";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { ClosedHamburgerMenu, OpenHamburgerMenu } from "../Icons";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false); 

  const closeMenu = () => {
    setMenuOpen(false); 
  };

    return (
    <>
        <nav>
            <S.HeaderLinksList>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            </S.HeaderLinksList>
            <S.HamburgerMenuContainer>
            <Menu 
            customBurgerIcon={<ClosedHamburgerMenu />} 
            customCrossIcon={<OpenHamburgerMenu />}
            right 
            isOpen={menuOpen}
            onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
            >
            <li>
            <Link onClick={closeMenu} to="/">
            Home
            </Link>
            </li>
            <li>
            <Link onClick={closeMenu} to="/contact">
            Contact
            </Link>
            </li>
            <li>
            <Link onClick={closeMenu} to="/about">
            About
            </Link>
            </li>
            </Menu>
            </S.HamburgerMenuContainer>
        </nav>
    </>
    );
}

export default Nav; 
