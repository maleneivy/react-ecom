import styled from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: end;
padding: 1rem;
background-color: ${(props) => props.theme.color.light};
box-shadow: 0px -2px 10px 2px rgba(0,0,0,0.2);
`;

export const MenuContainer = styled.div`
display: flex;
align-items: baseline;
`;

