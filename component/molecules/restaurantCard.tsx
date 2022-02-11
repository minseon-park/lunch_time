import React from "react";
import styled from "styled-components";
import foodSrc from "../../images/foodImage.png"
import Image, { ImageProps } from "next/image";
import { Text } from "../atom/Text"

export interface IButtonProps {
    restaurantName?: string;
    foodTag?: string;
    distance?: number;
    imageSrc ?: string;
    onclick?: () => void;
}

export const RestaurantCard: React.FC<IButtonProps> = ({
    restaurantName,
    foodTag,
    distance,
    onclick = () => {},
}) => {
    return <Container onClick={onclick}>
        <Image
        src={foodSrc}
        alt="image"
        />
        <NameDiv>
            <Text
            underline={false}
            font_size={1.2}
            font_weight="bold"
            color="#000000"
            padding="0">
                   {restaurantName}     
            </Text>
            <Text
            underline={false}
            font_size={1.1}
            font_weight="normal"
            color="#000000"
            padding="0">
                {foodTag}   
            </Text>
        </NameDiv>
        <DistanceDiv>
            <Text
            underline={false}
            font_size={1}
            font_weight="normal"
            color="#000000"
            padding="1.2">
                {distance} 분 거리       
            </Text>
        </DistanceDiv>
    </Container>;
};

const Container = styled.div`
    all: unset;
    display: flex;
    width: 75%;
    height: 8rem;
    padding: 1.5rem; 
    background: #F4F4F4;
    border-radius: 10px;
`;

const FoodImage = styled.img`
    width: 9rem;
    height: 7rem;
    margin: 0.5rem;
`;

const NameDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-around;  
    margin-left: 3rem;
    width: 5rem;
`;

const DistanceDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;