import React from "react";
import styled from "styled-components";
export interface IButtonProps {
  text?: string;
  onclick?: () => void;
  color: string;
  font_size?: number;
}

export const Button: React.FC<IButtonProps> = ({
  text,
  onclick = () => {},
  color,
  font_size= 1.2,
}) => {
  return (
    <Container onClick={onclick} color={color} font_size={font_size}>
      {text}
    </Container>
  );
};

const Container = styled.div<{ 
  color: string; 
  font_size: number;}>`
  all: unset;
  padding: 1rem 1.5rem;
  background-color: #fea82f;
  font-size: ${({ font_size }) => font_size}rem;
  color: ${(props) => props.color};
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-weight: 600;
`;
