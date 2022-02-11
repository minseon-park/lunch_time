import React from "react";
import styled from "styled-components";
import { MainSearch } from "../molecules/MainSearch";
import { Title } from "../molecules/Title";

export const MainHeader = () => {
  return (
    <Container>
      <First>
        <Title
          title="Lunch Time"
          main_text="직장인을 위한 오늘 점심 추천 도우미"
          sort="center"
          color="white"
        ></Title>
      </First>
      <Second>
        <MainSearch title="지금 당신이 안먹고 싶은 음식들을 골라보세요 그것만 빼고 점심메뉴 추천해 드림" />
      </Second>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  background-color: black;
`;
const First = styled.div`
  margin: 20px;
  margin-right: auto;
  margin-bottom: 4%;
`;
const Second = styled.div`
  margin-bottom: 8%;
`;
