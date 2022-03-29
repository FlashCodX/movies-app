import styled from "styled-components";

/**CARD */
/*************************************************************** */
/*************************************************************** */
export const Card = styled.section`
  position: relative;
  height: 550px;
  width: 350px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;
  transition: 1s;
  &:hover {
    transform: translateY(-5px);
  }
`;

/**Image Container */
/*************************************************************** */
/*************************************************************** */
export const ImageContainer = styled.div`
  position: relative;
  height: inherit;
  width: 100%;
`;

export const Image = styled.img`
  position: absolute;
  object-position: top;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
`;
/*************************************************************** */
/*************************************************************** */

/**Card Info Container */
/*************************************************************** */
/*************************************************************** */
export const CardInfo = styled.section`
  position: relative;
  height: 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: 10px;
  width: 100%;
  &::-webkit-scrollbar {
    visibility: collapse;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 16px;
  font-weight: 900;
`;

export const Plot = styled.p`
  color: white;
  height: 90px;
  font-size: 15px;
  font-weight: lighter;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 1px;
  }
`;

/*************************************************************** */
/*************************************************************** */
