import { styled } from "styled-components";

export const BackButton = styled.button`
background-color: #C2D7E0;
padding: 0.4rem;
width: 100px;
border: 1px solid #C2D7E0;
border-radius: 9px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

&:hover {
    background-color: #628391;
    color: #fff;
}

&:active {
    background-color: #fff;
    color: #628391;
}
`;