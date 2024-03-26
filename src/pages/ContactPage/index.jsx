import { useCartFromLocalStorage } from "../../utils/localStorage/getCart";

function ContactPage() {
    useCartFromLocalStorage();

    return (
        <>
        <h1>Contact</h1>
        </>
    );
}

export default ContactPage;
