import styled, {keyframes} from "styled-components";

const spinScale = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(360deg) scale(1.3);
    border-color: ${(props) => props.theme.color.primary};
  }
  100% {
    transform: rotate(720deg) scale(1);
  }
`;

export const Loading = styled.div`
width: 2rem;
height: 2rem;
border: 0.5rem dashed ${(props) => props.theme.color.tertiary};
border-radius: 50%;
margin: 2rem auto;
animation: ${spinScale} 6s ease-in-out infinite;
`;