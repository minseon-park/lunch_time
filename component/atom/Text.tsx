import React from "react";
import styled from "styled-components";

export interface ITextProps {
  text_shadow?: boolean;
  underline?: boolean;
  font_size?: number;
  font_weight?: string;
  color?: string;
  padding?: string;
  children: React.ReactNode | string;
  margin?: string;
}

export const Text: React.FC<ITextProps> = ({
  underline = false,
  text_shadow = false,
  children,
  font_size = 1.2,
  font_weight = "bold",
  color = "black",
  padding = "0.6rem",
  margin= "0 0 0 0",
}) => {
  return (
    <Container
      font_size={font_size}
      font_weight={font_weight}
      color={color}
      underline={underline}
      padding={padding}
      text_shadow={text_shadow}
      margin = {margin}
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
  text_shadow: boolean;
  padding: string;
  margin: string;
}>`
  font-size: ${({ font_size }) => font_size}rem;
  font-weight: ${({ font_weight }) => font_weight};
  color: ${({ color }) => color};
  text-decoration: ${({ underline }) => underline && "underline"};
  text-shadow: ${({ text_shadow }) => text_shadow && "0px 2px 4px #000000cc"};
  padding: ${({ padding }) => padding};
  margin: ${({margin}) => margin};
`;
