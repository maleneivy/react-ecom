import styled from "styled-components";

export const HeaderLinksList = styled.ul`
display: flex;

li {
    list-style: none;
    margin-right: 1rem;

    a {
        text-decoration: none;
        color: ${(props) => props.theme.color.secondary};
        font-size: ${(props) => props.theme.fontSize.xSmall};

        &:hover {
            background-color: ${(props) => props.theme.color.primary};
            padding: 0.4rem;
            border-radius: ${(props) => props.theme.borderRadius.smooth};
        }
    }
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
    background: ${(props) => props.theme.color.light};
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