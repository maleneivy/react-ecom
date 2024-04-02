import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "../Icons";
import { BackButton } from "./index.styles";

export const GoBackButton = () => {
    const navigate = useNavigate();
    return (
        <>
        <BackButton onClick={() => navigate(-1)}>
            <ArrowLeft /> Go back
        </BackButton>
        </>
    );
};