import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart, updateQuantity } from "../../components/Cart/cartSlice";
import { clearCheckedOutCart } from "../../components/Cart/checkedOutSlice";
import { Link } from "react-router-dom";
import { useCartFromLocalStorage } from "../../utils/localStorage/getCart";
import Message from "../../components/Message";
import * as S from "./index.styles";
import BaseButton from "../../components/BaseButton";
import { GoBackButton } from "../../components/GoBackButton";
import { Add, SubTract, TrashCan } from "../../components/Icons";
import DiscountedPrice from "../../components/DiscountedPrice";
import { SavePriceContainer } from "../HomePage/index.styles";

const CheckoutPage = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.products);
    useCartFromLocalStorage();
    

    const totalCost = cart.reduce((total, product) => {
        const price = product.discountedPrice || product.price;
        return total + (price * product.quantity);
    }, 0).toFixed(2);

    const handleIncreaseQuantity = (productId) => {
        dispatch(updateQuantity({ productId, quantity: cart.find(product => product.id === productId).quantity + 1 }));
    }

    const handleDecreaseQuantity = (productId) => {
        const product = cart.find(product => product.id === productId);
        if (!product) return;
    
        if (product.quantity <= 1) {
            dispatch(removeFromCart(productId));
        } else {
            dispatch(updateQuantity({ productId, quantity: product.quantity - 1 }));
        }
    }
    
    const handleDeleteProduct = (productId) => {
        dispatch(removeFromCart(productId));
    }

    const handleCheckOut = () => {
        const confirmation = window.confirm("Are you sure you want to checkout? Your cart will be erased if you do.");
        if (confirmation) {
            dispatch(clearCheckedOutCart());
            dispatch(clearCart());
            localStorage.removeItem("cart");
            window.location.href = "/checkout-success"; 
        }
    };

    if (cart.length === 0) {
        return (
            <S.EmptyCartContainer>
            <h1>Shopping cart</h1>
            <Message text="Your cart is empty" type="info"/>
            <S.BackToStoreContainer>
                <Link to="/">
                    <BaseButton>Go back to store</BaseButton>
                </Link>
            </S.BackToStoreContainer>
            </S.EmptyCartContainer>
            )
    }

    const totalSaved = cart.reduce((total, product) => {
        const priceDifference = product.price - (product.discountedPrice || 0);
        return total + (priceDifference * product.quantity);
    }, 0).toFixed(2);

    return (
        <>
            <S.CartContainer>
                <GoBackButton />
                <h1>ShoppingCart</h1>
                {cart.map((product, index) => (
                    <div key={product.id}>
                        <S.ProductInCart>
                        <SavePriceContainer>
                        <DiscountedPrice 
                                        originalPrice={product.price}
                                        discountedPrice={product.discountedPrice}
                                    />
                        </SavePriceContainer>
                            <S.ProductCartInfo>
                                <Link to={`/product/${product.id}`}>
                                    <S.ProductCartImage src={product.image?.url} alt={product.title} />
                                </Link>
                                <h3>{product.title}</h3>
                                <S.ProductPrice>
                                    {product.price === product.discountedPrice ? (
                                        <span>{product.price} NOK</span>
                                    ) : (
                                        <div className="discounted-price">
                                            <span className="on-sale-price">{product.discountedPrice} NOK</span>
                                            <span className="old-price">Originally: {product.price} NOK</span>
                                        </div>
                                    )}
                                </S.ProductPrice>
                            </S.ProductCartInfo>
                            <S.QuantityContainer>
                                <S.HandleQuantity>
                                    <button className="quantity-button" onClick={() => handleIncreaseQuantity(product.id)}>
                                        <Add />
                                    </button>
                                    <button className="quantity-button" onClick={() => handleDecreaseQuantity(product.id)}>
                                        <SubTract />
                                    </button>
                                    <p>{product.quantity}</p>
                                
                                    <BaseButton className="delete-product-from-cart-button" onClick={() => handleDeleteProduct(product.id)}>
                                        <TrashCan />
                                    </BaseButton>
                                </S.HandleQuantity>
                            </S.QuantityContainer>
                        </S.ProductInCart>
                        {index !== cart.length - 1 && <S.HorizontalLine />}
                    </div>
                ))}
            </S.CartContainer>
            <S.CartContainer>
                <div> 
                    <h3>Total cost: {totalCost}NOK</h3>
                    {totalSaved > 0 && (
                    <p className="on-sale-price">Total discount: {totalSaved} NOK</p>
                    )}
                    <BaseButton onClick={handleCheckOut} className="cart-button">Checkout</BaseButton>
                </div>
            </S.CartContainer>
        </>
    );
    
    
}

export default CheckoutPage;
