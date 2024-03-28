import { styled } from "styled-components";

export const CartContainer = styled.div`
max-width: 500px;
border-radius: 9px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
padding: 1.5rem;
margin: 1rem auto;
`;

export const ProductInCart = styled.div`
background-color: #fff;
display: flex;
margin: 1.5rem auto;
`;

export const ProductCartImage = styled.img`
height: 130px;
width: 100px;
object fit: cover;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ProductCartInfo = styled.div `
display: flex;
flex-direction: column;
padding-left: 1rem;
`;

export const QuantityContainer = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
`;

export const HandleQuantity = styled.div `
display: flex;
align-items: center;
justify-content: end;


button {
    height: 2rem;
    width: 2rem;
}

p {
    color: red;
}

.quantity-button {
    margin: 0.2rem;
}
`;

export const DeleteButtonContainer = styled.div`
text-align: end;

.delete-product-from-cart-button {
    align-self: end;
    width: 7rem;
    margin-top: 1rem;
    background-color: #FF4D48;
}
`;

export const ProductPrice = styled.div`
background-color: lightblue;
`;

export const HorizontalLine = styled.hr`
border-top: #4C656F;
`;