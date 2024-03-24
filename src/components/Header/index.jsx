import AddToCartIcon from "../AddToCartIcon";
import Nav from "../Nav"
import { HeaderContainer } from "./index.styles";

function Header() {
    return (
        <HeaderContainer>
        <h1>React-ecom</h1>
        <Nav />
        <AddToCartIcon/>
        </HeaderContainer>
    );
}

export default Header;
