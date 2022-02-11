import React from "react";
import styled from "styled-components";

export interface ITextProps {
  underline?: boolean;
  font_size?: number;
  font_weight?: string;
  color?: string;
  padding?: string;
  children: React.ReactNode | string;
}

export const Text: React.FC<ITextProps> = ({
  underline = false,
  children,
  font_size = 1.2,
  font_weight = "bold",
  color = "black",
  padding = "0.6rem",
}) => {
  return (
    <Container
      font_size={font_size}
      font_weight={font_weight}
      color={color}
      underline={underline}
      padding={padding}
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
  padding: string;
}>`
  font-size: ${({ font_size }) => font_size}rem;
  font-weight: ${({ font_weight }) => font_weight};
  color: ${({ color }) => color};
  text-decoration: ${({ underline }) => underline && "underline"};
  padding: ${({ padding }) => padding };
`;
