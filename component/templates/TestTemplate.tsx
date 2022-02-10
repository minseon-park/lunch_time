import React from "react";
import styled from "styled-components";
import { Text } from "../atom/Text";

//export interface ITestTemplateProps {}

export const TestTemplate = () => {
  return (
    <Container>
      <ButtonDiv>
        <Text
          underline={true}
          font_size={24}
          font_weight="lighter"
          color="#49B6F2"
        >
          ss
        </Text>
      </ButtonDiv>
    </Container>
  );
};
const Container = styled.div``;
const ButtonDiv = styled.div`
  margin: 100px;
`;
