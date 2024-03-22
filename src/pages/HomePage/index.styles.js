import styled from "styled-components";

export const ProductsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0 auto;
`;

export const ProductCard = styled.div`
display: flex;
flex-direction: column;
margin: 2rem;
width: calc(33% - 2rem);
max-width: 300px; 
`;

export const Heading = styled.h1`
margin-bottom: 1rem; 
`

export const ProductImage = styled.img`
max-width: 100%;
height: 200px;
object-fit: cover;
`;

export const ProductTitle = styled.h3`
margin-bottom: 0.5rem;
`;

export const ProductPrice = styled.h4`
margin-bottom: 0,5rem;
`;