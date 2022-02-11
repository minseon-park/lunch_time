import React from "react";
import styled from "styled-components";
import { Text } from "../atom/Text";

export interface IDescripytionProps {
  title: string;
  main_text: string;
}

export const RestauranDescription: React.FC<IDescripytionProps> = ({
  title,
  main_text,
}) => {
  return (
    <Container>
      <Right>
        <Text font_size={1.2} font_weight="normal" color="#777777">
          {title}
        </Text>
      </Right>
      <Left>
        <Text font_size={1.2} font_weight="normal" color="#000000">
          {main_text}
        </Text>
      </Left>
    </Container>
  );
};

const Container = styled.div`
  all: unset;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Right = styled.div``;
const Left = styled.div``;
