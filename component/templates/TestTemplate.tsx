import React from "react";
import styled from "styled-components";
import { Text } from "../atom/Text";
import { Title } from "../molecules/Title"
//export interface ITestTemplateProps {}

export const TestTemplate = () => {
  return (
    <Container>
      <ButtonDiv>
        <Title/>
      </ButtonDiv>
    </Container>
  );
};
const Container = styled.div``;
const ButtonDiv = styled.div`
  margin: 100px;
`;
