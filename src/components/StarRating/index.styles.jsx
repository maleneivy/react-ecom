import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { styled } from 'styled-components';

export const FilledStarIcon = styled(FaStar)`
color: ${(props) => props.theme.color.tertiary};

`;

export const HalfFilledStarIcon = styled(FaStarHalfAlt)`
color: ${(props) => props.theme.color.tertiary};
`;

export const EmptyStarIcon = styled(FaRegStar)`
  color: ${(props) => props.theme.color.primary};
`;