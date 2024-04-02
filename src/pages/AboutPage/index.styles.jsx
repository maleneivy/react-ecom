import { styled } from "styled-components";

export const AboutContainer = styled.div`
display: flex;
flex-direction: column;
margin: 2rem 4rem;
padding: 3rem auto 2rem 3rem;
border-radius: 9px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
background-color: #fff;
position: relative;

@media screen and (max-width: 850px) {
    margin: 1rem;
}
`;

export const BackButtonContainer = styled.div`
position: absolute;
`;

export const TextContentContainer = styled.div`
margin: 4rem;
`;