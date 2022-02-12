import React from "react";
import styled from "styled-components";
import { Button } from "../atom/Buttom";
import { RestauranDescription } from "../molecules/restauranDescription";
import { RestaurantPhoto } from "../molecules/RestaurantPhoto";
import { Title } from "../molecules/Title";
import { DescriptionField } from "../organisms/descriptionField";
import { DislikeMenu } from "../organisms/DislikeMenu";
import { MainHeader } from "../organisms/MainHeader";
//export interface ITestTemplateProps {}

export const RestaurantDetail = () => {
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
      <Main>
        <Detail>
          <Photo>
            <RestaurantPhoto></RestaurantPhoto>
          </Photo>
          <DetailView>
            <Title
              title="음식점 이름"
              main_text="태그"
              sort="center"
              color="black"
            ></Title>
            <DescriptionField></DescriptionField>
            <Bottom>
              <Button text="다시 고를래요" color="#ffffff"></Button>
              <Button text="여기로 갈래요" color="#ffffff"></Button>
            </Bottom>
          </DetailView>
        </Detail>
        <Map></Map>
      </Main>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin-right: auto;
  padding: 30px;
`;
const Photo = styled.div`
  height: 200px;
`;
const Main = styled.div`
  display: flex;
  flex-direction: row;
`;
const Detail = styled.div`
  margin-bottom: 100px;
  width: 50%;
  padding-left: 5%;
  padding-right: 5%;
`;
const DetailView = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Map = styled.div`
  background-color: black;
  height: 100vh;
  width: 50%;
`;
