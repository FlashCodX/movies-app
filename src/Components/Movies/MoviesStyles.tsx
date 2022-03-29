import styled from "styled-components";

export const MoviesContainer = styled.section`
  width: 100%;
  margin-top: 50px;
  display: grid;
  gap: 50px 20px;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 50px;

  @media (max-width: 1400px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
