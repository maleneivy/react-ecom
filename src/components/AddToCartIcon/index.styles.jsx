import styled from "styled-components";

export const StyledCartIcon = styled.img`
width: 2rem;
margin-right: 0.3rem;
`;

export const CartIconContainer = styled.div`
a {
    text-decoration: none;
    color: ${(props) => props.theme.color.secondary};
}

@media screen and (max-width:850px) {
    margin-right: 2rem;
}
`;