import styled from "styled-components";


export const TopSection = styled.div`
display: flex; 
flex-direction: column;
margin: 1rem 4rem;


@media screen and (max-width: 800px) {
    margin: 1rem 8rem;
}

@media screen and (max-width: 750px) {
    margin: 1rem 7rem;
}

@media screen and (max-width: 700px) {
    margin: 1rem 6rem;
}

@media screen and (max-width: 650px) {
    margin: 1rem 5rem;
}

@media screen and (max-width: 600px) {
    margin: 1rem 6rem;
}

@media screen and (max-width: 550px) {
    margin: 1rem 4rem;
}

@media screen and (max-width: 400px) {
    margin: 1rem 2rem;
}
`;

export const ProductsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 2rem 4rem;
border-radius: ${(props) => props.theme.borderRadius.smooth};
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
background-color: ${(props) => props.theme.color.light};

@media screen and (max-width: 800px) {
    max-width: 500px;
    margin: 0.5rem auto;
}

@media screen and (max-width: 600px) {
    max-width: 400px;
}

@media screen and (max-width: 450px) {
    max-width: 300px;
}
`;

export const ProductCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin: 2rem;
width: calc(30% - 2rem);
max-width: 300px; 
background-color: ${(props) => props.theme.color.light};
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
position: relative;
border-radius: ${(props) => props.theme.borderRadius.smooth};

@media screen and (max-width: 1100px) {
    width: calc(40% - 2rem);
}

@media screen and (max-width: 800px) {
    width: calc(70% - 2rem);
}

@media screen and (max-width: 600px) {
    width: calc(90% - 2rem);
    margin: 1rem auto;
}
`;

export const Heading = styled.h1`
margin-bottom: 1rem; 
`

export const ProductImage = styled.img`
max-width: 100%;
height: 200px;
object-fit: cover;
border-radius: ${(props) => props.theme.borderRadius.smoothTop};
`;

export const ProductTitle = styled.h3`
margin-bottom: 0.5rem;
`;

export const ProductPrice = styled.h4`
margin-bottom: 0,5rem;
`;

export const ProductTTextContent = styled.div`
padding-left: 1rem;
padding-bottom: 1rem;
`;

export const SearchBarContainer = styled.div`
display: flex; 
align-items: center;
`;

export const SearchBar = styled.input`
padding: 0.6rem;
border: solid 0.1px ${(props) => props.theme.color.light};
border-radius: 9px 0 0 9px;
width: fit-content;
color: ${(props) => props.theme.color.secondary};
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ResetSearchButton = styled.button`
border: none;
padding: 0.6rem; 
font-size: ${(props) => props.theme.fontSize.xSmall};
border-radius: 0 9px 9px 0;
background-color:  ${(props) => props.theme.color.primary};
color:  ${(props) => props.theme.color.secondary};

&:hover {
    background-color:  ${(props) => props.theme.color.tertiary};
    color:  ${(props) => props.theme.color.light};
}

&:active {
    background-color:  ${(props) => props.theme.color.light};
}
`;

export const SavePriceContainer = styled.div`
position: absolute;
right: 0; 
top: 0;
`;