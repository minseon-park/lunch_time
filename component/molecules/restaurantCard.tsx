import React from "react";
import styled from "styled-components";
import foodSrc from "../../images/foodImage.png"
import Image, { ImageProps } from "next/image";


export interface IButtonProps {
    restaurantName?: string;
    foodTag?: string;
    distance?: number;
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
            <Title>
                {restaurantName}
            </Title>
            <NameTag>
                {foodTag}
            </NameTag>
        </NameDiv>
        <Distance>
            <div>
                {distance} 분 거리       
            </div>
        </Distance>
    </Container>;
};
//TODO: 어떻게 반응형으로 만들 것 인지 
//TODO: how to get image

const Container = styled.div`
    all: unset;
    display: flex;
    width: 80rem;
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
`;

const Title = styled.div`
    font-size: 1.3rem;
    font-weight: 700;
`;

const NameTag = styled.div`
    font-size: 1.1rem;
`;

const Distance = styled.div`
    font-size: 1.1rem;
    font-weight: 500;
    display: flex;
    margin-left: 47rem;
`;