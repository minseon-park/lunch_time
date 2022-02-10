import React from "react";
import styled from "styled-components";
import { Button } from "../atom/Buttom";

//export interface ITestTemplateProps {}

export const TestTemplate = () => {
  return (
    <Container>
      <ButtonDiv>
        <Button text="이거 빼고 점심 골라줘" color="blue" />
      </ButtonDiv>
    </Container>
  );
};
const Container = styled.div``;
const ButtonDiv = styled.div`
  margin: 100px;
`;
