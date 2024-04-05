import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BarsIcon = styled(FontAwesomeIcon)`
color: ${(props) => props.theme.color.tertiary};
font-size: ${(props) => props.theme.fontSize.large};
`;

export const CrossIcon = styled(FontAwesomeIcon)`
color: ${(props) => props.theme.color.tertiary};
font-size: ${(props) => props.theme.fontSize.large};
margin: 1rem 2rem 0 0;
`;

export const GoBackIcon = styled(FontAwesomeIcon)`
color: ${(props) => props.theme.color.light};
font-size: ${(props) => props.theme.fontSize.small};
`;

export const DeleteIcon = styled(FontAwesomeIcon)`
color: ${(props) => props.theme.color.tertiary};
font-size: ${(props) => props.theme.fontSize.medium};
`;

export const AddIcon = styled(FontAwesomeIcon)`
color: ${(props) => props.theme.color.tertiary};
`;

export const SubTractIcon = styled(FontAwesomeIcon)`
color: ${(props) => props.theme.color.tertiary};
`;