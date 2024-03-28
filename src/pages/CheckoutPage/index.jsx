import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart, updateQuantity } from "../../components/Cart/cartSlice";
import { clearCheckedOutCart } from "../../components/Cart/checkedOutSlice";
import { Link } from "react-router-dom";
import { useCartFromLocalStorage } from "../../utils/localStorage/getCart";
import Message from "../../components/Message";

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
            <>
            <Message text="Your cart is empty" type="info"/>
            <Link to="/">Back to store</Link>
            </>
            )
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
                <button onClick={handleCheckOut}>Checkout</button>
            </div>
        </>
    );
}

export default CheckoutPage;


