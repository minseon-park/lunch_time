import React from "react";
import styled from "styled-components";
import { MainSearch } from "../molecules/mainSearch";
import { Title } from "../molecules/Title";
import imgSrc from '../../images/HeaderImg.png';
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
  border-radius: 0 0px 40px 40px;
  flex-direction: column;
  background-image: url('https://user-images.githubusercontent.com/78679696/160624410-7772a895-8d07-48e2-8ebc-56afdb8495f8.png');
  background-size: 100%;
`;
const First = styled.div`
  margin: 20px;
  margin-right: auto;
  margin-bottom: 4%;
`;
const Second = styled.div`
  margin-bottom: 8%;
`;
