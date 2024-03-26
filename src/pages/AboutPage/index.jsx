import { useCartFromLocalStorage } from "../../utils/localStorage/getCart";

function AboutPage() {
    useCartFromLocalStorage();
    return (
        <h1>About</h1>
    )
}

export default AboutPage; 