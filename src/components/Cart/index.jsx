import CartIcon from "../../assets/icons/cart-icon.png";
import { StyledCartIcon } from "./index.styles";

function Cart() {
    return (
        <StyledCartIcon src={CartIcon} alt="Cart icon" />
    )
}

export default Cart;