import { Link } from "react-router-dom";
import Message from "../../components/Message";
import { useCartFromLocalStorage } from "../../utils/localStorage/getCart";

function CheckoutSuccessPage() {
    useCartFromLocalStorage();

    return (
        <>
        <h1>Thank you!</h1>
        <Message text="Your order has been successful" type="success" />
        <Link to="/">Go back to store</Link>
        </>
    );
}

export default CheckoutSuccessPage;
