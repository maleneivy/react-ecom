import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import Message from "../../components/Message";
import { useCartFromLocalStorage } from "../../utils/localStorage/getCart";
import BaseButton from "../../components/BaseButton";
import { BackToStoreContainer, SuccessContainer } from "./indes.styles";
import { useApi } from "../../hooks/useApi";

function CheckoutSuccessPage() {
    useCartFromLocalStorage();
    const { isLoading, isError} = useApi('https://v2.api.noroff.dev/online-shop');

    if(isLoading) {
        return <Loader />
    }

    if(isError) {
        return <div>Error</div>
    } 

    return (
        <SuccessContainer>
        <h1>Thank you!</h1>
        <Message text="Your order has been successful" type="success" />
        <BackToStoreContainer>
        <Link to="/">
            <BaseButton>Go back to store</BaseButton>
        </Link>
        </BackToStoreContainer>
        </SuccessContainer>
    );
}

export default CheckoutSuccessPage;
