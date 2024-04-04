import { styled } from "styled-components";

export const DiscountByPercentage = styled.div`
background-color: ${(props) => props.theme.color.red};
padding: 0.5rem;
text-align: center;
width: fit-content;
border-radius: ${(props) => props.theme.borderRadius.smooth};
font-size: calc(80%);
`;