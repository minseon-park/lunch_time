import React from "react";
import styled from "styled-components";
import { FilterButton } from "../atom/FilterButton";
import { Text } from "../atom/Text";
import { MainSearch } from "../molecules/MainSearch";
import { RestaurantCard } from "../molecules/restaurantCard";
import { Title } from "../molecules/Title";
import { DislikeMenu } from "../organisms/DislikeMenu";
import { MainHeader } from "../organisms/MainHeader";
//export interface ITestTemplateProps {}

export const RestaurantsList = () => {
  return (
    <Container>
      <Header>
        <Title
          title="Lunch Time"
          main_text="직장인을 위한 오늘 점심 추천 도우미"
          sort="center"
          color="orange"
        ></Title>
      </Header>

      <MainTitle>
        <Title
          title="오늘 점심시간에 이 메뉴 어때요?"
          main_text="당신을 위한 50가지 추천 맛집"
          sort="left"
          color="black"
        ></Title>
        <ButtonDiv>
          <FilterButton text="필터선택" />
        </ButtonDiv>
      </MainTitle>
      <MainList>
        <RestaurantCard restaurantName="김밥천국" />
      </MainList>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const Header = styled.div`
  margin-right: auto;
  margin-bottom: 40px;
`;

const MainTitle = styled.div`
  display: flex;
  margin-bottom: 30px;
  width: 95%;
`;
const ButtonDiv = styled.div`
  margin-left: auto;
`;

const MainList = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: black;
  width: 90%;
`;
