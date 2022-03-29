import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  &::-webkit-scrollbar {
    width: 1px !important;
    background: gray;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: black;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (max-width: 900px) {
    max-width: 350px;
    overflow-y: auto;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  gap: 0 5px;
  /* overflow-x: scroll; */
  list-style: none;
`;

export const ListItem = styled.li`
  background: white !important;
  width: 40px;
  display: flex;
  border: 1px solid white;
  justify-items: center;
  position: relative;
  height: 40px;
`;

export const ListItemReference = styled.a`
  text-decoration: none;
  width: 100%;
  height: auto;
  line-height: 40px;
  text-align: center;
`;
