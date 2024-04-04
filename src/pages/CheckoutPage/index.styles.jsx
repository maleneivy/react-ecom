import { styled } from "styled-components";

export const CartContainer = styled.div`
max-width: 500px;
border-radius: ${(props) => props.theme.borderRadius.smooth};
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
padding: 1.5rem;
margin: 1rem auto;
`;

export const ProductInCart = styled.div`
background-color: ${(props) => props.theme.color.light};
display: flex;
margin: 1.5rem auto;
position: relative;

@media screen and (max-width:850px) {
    flex-direction: column;
}
`;

export const ProductCartImage = styled.img`
height: 130px;
width: 100px;
object fit: cover;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
border-radius: ${(props) => props.theme.borderRadius.smooth};
`;

export const ProductCartInfo = styled.div `
display: flex;
flex-direction: column;
padding-left: 1rem;

@media screen and (max-width:850px) {
    text-align: center;
    padding: 0;
    margin-bottom: 0.5rem;
}
`;

export const QuantityContainer = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
justify-content: space-evenly;
`;

export const HandleQuantity = styled.div `
display: flex;
align-items: center;
justify-content: end;

@media screen and (max-width:850px) {
    justify-content: center
}

button {
    height: 2rem;
    width: 2rem;
    border: solid ${(props) => props.theme.color.light};
    padding: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.color.light};
    border-radius: ${(props) => props.theme.borderRadius.smooth};


    &:hover {
        background-color: ${(props) => props.theme.color.primary};
        border: solid ${(props) => props.theme.color.primary};
    }

    &:active {
        background-color: ${(props) => props.theme.color.light};
    }
}

p {
    color: ${(props) => props.theme.color.red};
    margin-left: 0.8rem;
    font-size: ${(props) => props.theme.fontSize.small};
    
}

.quantity-button {
    margin: 0.2rem;
}

.delete-product-from-cart-button {
    align-self: start;
    margin-top: 1rem;
    border: solid ${(props) => props.theme.color.light};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: fit-content;
    background: ${(props) => props.theme.color.light};
    padding: unset;
    margin-left: 2rem;

    &:hover {
     background-color: ${(props) => props.theme.color.primary};
      border: solid ${(props) => props.theme.color.primary};
    }
`;

export const ProductPrice = styled.div`
background-color: ${(props) => props.theme.color.light};
`;

export const HorizontalLine = styled.hr`
border-top: ${(props) => props.theme.color.secondary};
`;
