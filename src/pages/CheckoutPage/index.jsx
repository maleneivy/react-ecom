import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart, updateCartFromLocalStorage, updateQuantity } from "../../components/Cart/cartSlice";
import { clearCheckedOutCart } from "../../components/Cart/checkedOutSlice";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
    const dispatch = useDispatch();
    const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
    const cart = useSelector(state => state.cart.products);

    useEffect(() => {
        if (!cart.length && !cartFromLocalStorage) {
            return;
        }

        const isCartDifferentFromLocalStorage = JSON.stringify(cart) !== JSON.stringify(cartFromLocalStorage);
    
        if (isCartDifferentFromLocalStorage) {

            dispatch(updateCartFromLocalStorage(cartFromLocalStorage));
        }
    }, [dispatch, cart, cartFromLocalStorage]);
    

    const totalCost = cart.reduce((total, product) => {
        const price = product.discountedPrice || product.price;
        return total + (price * product.quantity);
    }, 0);

    const handleIncreaseQuantity = (productId) => {
        dispatch(updateQuantity({ productId, quantity: cart.find(product => product.id === productId).quantity + 1 }));
    }

    const handleDecreaseQuantity = (productId) => {
        const product = cart.find(product => product.id === productId);
        if (!product) return; // Guard clause to handle invalid product ID
    
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
        dispatch(clearCheckedOutCart());
        dispatch(clearCart());
        localStorage.removeItem("cart");
        
    }

    if (cart.length === 0) {
        return <p>Your cart is empty.</p>;
    }

    return (
        <>
            <h1>Checkout</h1>
            {cart.map(product => (
                <div key={product.id}>
                    <h3>{product.title}: Quantity: {product.quantity}</h3>
                    <p>Price: ${product.discountedPrice || product.price}</p>
                    <button onClick={() => handleIncreaseQuantity(product.id)}>+</button>
                    <button onClick={() => handleDecreaseQuantity(product.id)}>-</button>
                    <button onClick={() => handleDeleteProduct(product.id)}>Delete product</button>
                </div>
            ))}
            <div>
                <h3>Total cost: {totalCost}NOK</h3>
                <Link to="/checkout-success" onClick={handleCheckOut}>
                    <button>Checkout</button>
                </Link>
            </div>
        </>
    );
}

export default CheckoutPage;


