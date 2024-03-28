import { styled } from "styled-components";

export const ProductCard = styled.div`
max-width: 1000px;
display: flex;
background-color: #f2fcfa;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
margin: 1rem auto; 

@media screen and (max-width: 1050px) {
    margin: 1rem 4rem;
};

@media screen and (max-width: 900px) {
    flex-direction: column;
}

@media screen and (max-width: 700px) {
    margin: 1rem 2rem;
}
`;

export const ProductImage = styled.img`
max-height: 400px;
margin: 1rem;

@media screen and (max-width:900px) {
    object-fit: cover;
}
`;

export const ProductTextContentContainer = styled.div`
display: flex;
flex-direction: column;
margin: 1rem;
`;

export const ProductTags = styled.p`
font-size: 1em; 
margin-top: 0;
`