import AddToCartIcon from "../AddToCartIcon";
import Nav from "../Nav"
import { HeaderContainer } from "./index.styles";

function Header() {
    return (
        <HeaderContainer>
        <h1>React-ecom</h1>
        <AddToCartIcon/>
        <Nav />
        </HeaderContainer>
    );
}

export default Header;
