import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateCartFromLocalStorage } from "../../components/Cart/cartSlice";

export const useCartFromLocalStorage = () => {
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
};