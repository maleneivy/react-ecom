import styled from "styled-components";

export const HeaderLinksList = styled.ul`
display: flex;

li {
    list-style: none;
    margin-right: 1rem;
}

@media screen and (max-width: 850px) {
    display: none;
}
`;

export const HamburgerMenuContainer = styled.div`
display: none; 

@media screen and (max-width:850px) {
    display: block;
}

.bm-menu-wrap {
    background: #fff;
    padding: 5rem 0 0;
    position: fixed;
    top: 0;
}

.bm-burger-button {
    position: relative;
}

.bm-item-list {
    display: flex;
    flex-direction: column;
}

.bm-item {
    padding: 1rem;
    margin-left: 30%;
}

.bm-item a {
    text-decoration: none;
}
`;