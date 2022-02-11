import React from "react";
import styled from "styled-components";
export interface IButtonProps {
  text?: string;
  onclick?: () => void;
}
export const MenuButton: React.FC<IButtonProps> = ({
  text,
  onclick = () => {},
}) => {
  return <Container onClick={onclick}>{text}</Container>;
};

const Container = styled.div`
  all: unset;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 13rem;
  font-size: 1.2rem;
  background-color: #F4F4F4;
  color: black;
  border-radius: 30px;
  cursor: pointer;
  margin: 0 0.5rem; 
`;