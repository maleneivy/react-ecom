import styled from "styled-components";

export const Button = styled.button`
background-color: ${(props) => props.theme.color.primary};
color: ${(props) => props.theme.color.secondary};
padding: 0.4rem;
width: 100px;
border: 1px solid ${(props) => props.theme.color.primary};
border-radius: ${(props) => props.theme.borderRadius.smooth};
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

&:hover {
    background-color: ${(props) => props.theme.color.tertiary};
    color: ${(props) => props.theme.color.light};
}

&:active {
    background-color: ${(props) => props.theme.color.light};
    color: ${(props) => props.theme.color.tertiary};
}
`;