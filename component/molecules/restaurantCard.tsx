import React from "react";
import styled from "styled-components";
import foodSrc from "../../images/foodImage.png";
import Image, { ImageProps } from "next/image";
import { Text } from "../atom/Text";

export interface IButtonProps {
  restaurantName?: string;
  foodTag?: string[];
  distance?: number;
  imageSrc?: string;
  onclick?: () => void;
}

export const RestaurantCard: React.FC<IButtonProps> = ({
  restaurantName,
  foodTag,
  distance,
  onclick = () => {},
}) => {
  return (
    <Container onClick={onclick}>
      <Image src={foodSrc} alt="image" width={250}/>
      <NameDiv>
        <Text
          underline={false}
          font_size={1.2}
          font_weight="bold"
          color="#000000"
          padding="0"
        >
          {restaurantName}
        </Text>
        <FoodTagDiv>
          {foodTag?.map((tag:string, i:number) => {
            return (
              <Text
                key={i}
                underline={false}
                font_size={1.1}
                font_weight="normal"
                color="#000000"
                padding="0"
              >
                {tag}
              </Text>
            )
          })}
        </FoodTagDiv>
      </NameDiv>
      <DistanceDiv>
        <Text
          underline={false}
          font_size={1}
          font_weight="normal"
          color="#000000"
          padding="1.2"
        >
          {distance} 분 거리
        </Text>
      </DistanceDiv>
    </Container>
  );
};

const Container = styled.div`
  all: unset;
  display: flex;
  height: 8rem;
  @media (max-width: 1024px) {
    width: 45rem;
  }
  width: 70rem;
  padding: 1.5rem;
  background: #f4f4f4;
  border-radius: 10px;
`;

const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 2rem;
  width: 20rem;
`;

const DistanceDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const FoodTagDiv = styled.div`
  display: flex;
`;