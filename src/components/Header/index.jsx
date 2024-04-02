import AddToCartIcon from "../AddToCartIcon";
import Nav from "../Nav"
import { HeaderContainer, MenuContainer } from "./index.styles";

function Header() {
    return (
        <HeaderContainer>
        <h1>React-ecom</h1>
        <MenuContainer>
        <AddToCartIcon/>
        <Nav />
        </MenuContainer>
        </HeaderContainer>
    );
}

export default Header;
