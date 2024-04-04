import { styled } from "styled-components";

export const DiscountByPercentage = styled.div`
background-color: #ff3707;
padding: 0.5rem;
text-align: center;
width: fit-content;
border-radius: ${(props) => props.theme.borderRadius.smooth};
font-size: calc(80%);
`;