import { styled } from "styled-components";

export const SuccessContainer = styled.div`
max-width: 1000px; 
margin: 2rem auto;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
padding: 2rem;

.success {
    border-radius: ${(props) => props.theme.borderRadius.smooth};
}
`;

export const BackToStoreContainer = styled.div`
text-align: center;
margin-top: 2rem;
`;