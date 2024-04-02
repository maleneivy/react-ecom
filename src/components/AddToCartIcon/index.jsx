import { useSelector } from "react-redux";
import CartIcon from "../../assets/icons/cart-icon.png";
import { CartIconContainer, StyledCartIcon } from "./index.styles";
import { Link } from "react-router-dom";

function AddToCartIcon() {
    const cartProductsQuantity = useSelector(state => state.cart.products);

    const totalProducts = cartProductsQuantity.reduce((total, product) => {
        return total + product.quantity;
    }, 0);

    return (
        <CartIconContainer>
        <Link to="/cart">
           <StyledCartIcon src={CartIcon} alt="Cart icon" />
           <span>{totalProducts}</span>   
        </Link>
        </CartIconContainer>
     
    )
}

export default AddToCartIcon;