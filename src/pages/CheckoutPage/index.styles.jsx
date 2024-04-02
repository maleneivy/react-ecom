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

@media screen and (max-width:850px) {
    flex-direction: column;
}
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
    border: solid #fff;
    padding: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 9px;


    &:hover {
        background-color: #C2D7E0;
         border: solid #C2D7E0;
    }

    &:active {
        background-color: #fff;
    }
}

p {
    color: red;
    margin-left: 0.8rem;
    font-size: 1.3rem;
    
}

.quantity-button {
    margin: 0.2rem;
}

.delete-product-from-cart-button {
    align-self: start;
    margin-top: 1rem;
    border: solid #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: fit-content;
    background: #fff;
    padding: unset;
    margin-left: 2rem;

    &:hover {
     background-color: #C2D7E0;
      border: solid #C2D7E0;
    }
`;


export const ProductPrice = styled.div`
background-color: #fff;
`;

export const HorizontalLine = styled.hr`
border-top: #4C656F;
`;