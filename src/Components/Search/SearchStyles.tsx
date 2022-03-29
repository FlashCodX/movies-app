import styled from "styled-components";

export const SearchContainer = styled.section`
  display: flex;
  background: #ff424f;
  justify-content: center;
  width: available;
  height: 70px;
  margin-top: 30px;
`;

export const Input = styled.input`
  border: none !important;
  background: transparent;
  color: white;
  font-size: 14px;
  height: 40px;
  margin: auto;

  &:focus {
    outline: none;
    border: 2px solid aqua;

    /* border: 1px solid black; */
  }

  &::placeholder {
    color: white;
  }
`;

export const SearchIcon = styled.img`
  width: 100%;
  width: 15px;
  left: -20px;
  position: absolute;
  object-fit: cover;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
`;
