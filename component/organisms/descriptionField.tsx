import React from "react";
import styled from "styled-components";
import { RestauranDescription } from "../molecules/restauranDescription";

export interface props {
  data?: Object;
}

export const DescriptionField: React.FC<props> = ({ data }) => {
  return (
    <Container>
      <RestauranDescription title="거리" main_text="6분거리" />
      <RestauranDescription
        title="주소"
        main_text="서울 은평구 연서로 29길 30-3 1층"
      />
      <RestauranDescription title="전화번호" main_text="070-8808-9171" />
      <RestauranDescription title="영업시간" main_text="11:00 ~ 22:00" />
      <RestauranDescription title="메뉴" main_text="까르보나라      14,000원" />
    </Container>
  );
};
const Container = styled.div`
  margin: 10px;
  width: 500px;
`;
