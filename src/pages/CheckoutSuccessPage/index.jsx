import { useCartFromLocalStorage } from "../../utils/localStorage/getCart";

function CheckoutSuccessPage() {
    useCartFromLocalStorage();

    return (
        <>
        <h1>CheckoutSuccess</h1>
        </>
    );
}

export default CheckoutSuccessPage;
