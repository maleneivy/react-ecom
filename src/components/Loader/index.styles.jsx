import styled, {keyframes} from "styled-components";

const spinScale = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(360deg) scale(1.3);
    border-color: #C2D7E0;
  }
  100% {
    transform: rotate(720deg) scale(1);
  }
`;

export const Loading = styled.div`
width: 2rem;
height: 2rem;
border: 0.5rem dashed #628391;
border-radius: 50%;
margin: 2rem auto;
animation: ${spinScale} 6s ease-in-out infinite;
`;