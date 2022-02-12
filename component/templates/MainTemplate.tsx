import React from "react";
import styled from "styled-components";
import { Text } from "../atom/Text";
import { MainSearch } from "../molecules/MainSearch";
import { DislikeMenu } from "../organisms/DislikeMenu";
import { MainHeader } from "../organisms/MainHeader";
//export interface ITestTemplateProps {}

export const MainTemplate = () => {
  return (
    <Container>
      <MainHeader />
      <DislikeMenu />
    </Container>
  );
};
const Container = styled.div``;
