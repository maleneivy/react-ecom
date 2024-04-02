import { GoBackButton } from "../../components/GoBackButton";
import { useCartFromLocalStorage } from "../../utils/localStorage/getCart";

function AboutPage() {
    useCartFromLocalStorage();
    return (
        <>
        <GoBackButton />
        <h1>About</h1>
        </>
    )
}

export default AboutPage; 