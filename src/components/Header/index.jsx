import AddToCartIcon from "../AddToCartIcon";
import { BrandLogo } from "../BrandLogo";
import Nav from "../Nav"
import { HeaderContainer, MenuContainer } from "./index.styles";

function Header() {
    return (
        <HeaderContainer>
        <BrandLogo />
        <MenuContainer>
        <AddToCartIcon/>
        <Nav />
        </MenuContainer>
        </HeaderContainer>
    );
}

export default Header;
