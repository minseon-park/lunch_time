import React from "react";
import styled from "styled-components";
import { Text } from "../atom/Text";
import { MainSearch } from "../molecules/MainSearch";
import { MainHeader } from "../organisms/MainHeader";
//export interface ITestTemplateProps {}

export const TestTemplate = () => {
  return (
    <Container>
      <MainHeader></MainHeader>
    </Container>
  );
};
const Container = styled.div``;
