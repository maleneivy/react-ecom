import { Link } from "react-router-dom"
import Logo from "../../assets/logo/brand-logo.png";
import { StyledLogo } from "./index.styles";

export const BrandLogo = () => {
    return (
    <Link to="/">
        <StyledLogo src={Logo} />
    </Link>
    );
};