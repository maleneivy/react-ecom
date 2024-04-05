import styled from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: end;
padding: 1rem;
background-color: ${(props) => props.theme.color.light};
`;

export const MenuContainer = styled.div`
display: flex;
align-items: baseline;
`;

