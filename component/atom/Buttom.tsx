import React from "react";
import styled from "styled-components";
export interface IButtonProps {
  text?: string;
  onclick?: () => void;
  color: string;
}

export const Button: React.FC<IButtonProps> = ({
  text,
  onclick = () => {},
  color,
}) => {
  return (
    <Container onClick={onclick} color={color}>
      {text}
    </Container>
  );
};

const Container = styled.div<{ color: string }>`
  all: unset;
  padding: 16px 16px;
  background-color: #fea82f;
  color: ${(props) => props.color};
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
