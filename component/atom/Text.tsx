import React from "react";
import styled from "styled-components";

export interface ITextProps {
  underline?: boolean;
  font_size?: number;
  font_weight?: string;
  color?: string;
  children: React.ReactNode | string;
}

export const Text: React.FC<ITextProps> = ({
  underline = false,
  children,
  font_size = 1.2,
  font_weight = "bold",
  color = "black",
}) => {
  return (
    <Container
      font_size={font_size}
      font_weight={font_weight}
      color={color}
      underline={underline}
    >
      {children}
    </Container>
  );
};

const Container = styled.div<{
  font_size: number;
  font_weight: string;
  color: string;
  underline: boolean;
}>`
  font-size: ${({ font_size }) => font_size}px;
  font-weight: ${({ font_weight }) => font_weight};
  color: ${({ color }) => color};
  text-decoration: ${({ underline }) => underline && "underline"};
`;
