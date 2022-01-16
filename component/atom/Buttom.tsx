import React from "react";
import styled from "styled-components";
export interface IButtonProps {
  text?: string;
  onclick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({
  text,
  onclick = () => {},
}) => {
  return <Container onClick={onclick}>{text}</Container>;
};

const Container = styled.div`
  all: unset;
  padding: 16px 16px;
  background-color: #fea82f;
  color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
