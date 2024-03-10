import Cart from "../Cart";
import Nav from "../Nav"
import { HeaderContainer } from "./index.styles";

function Header() {
    return (
        <HeaderContainer>
        <h1>React-ecom</h1>
        <Nav />
        <Cart />
        </HeaderContainer>
    );
}

export default Header;
