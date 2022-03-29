import styled from "styled-components";

export const SplashContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow-x: hidden !important;
  z-index: 1000;
  display: grid;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 900;
  background: black;
  animation: animate 3s forwards;
  animation-delay: 3s;
  @keyframes animate {
    0% {
      left: 0;
    }

    100% {
      left: 100%;
      visibility: collapse;
    }
  }
`;
