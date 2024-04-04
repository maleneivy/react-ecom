import { styled } from "styled-components";

export const AboutContainer = styled.div`
display: flex;
flex-direction: column;
margin: 2rem auto;
padding: 3rem auto 2rem 3rem;
border-radius: ${(props) => props.theme.borderRadius.smooth};
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
background-color: ${(props) => props.theme.light};
position: relative;
max-width: 1000px;

@media screen and (max-width: 850px) {
    margin: 1rem;
}
`;

export const BackButtonContainer = styled.div`
position: absolute;
`;

export const TextContentContainer = styled.div`
margin: 4rem;

@media screen and (max-width:500px) {
    margin: 2rem;
}
`;