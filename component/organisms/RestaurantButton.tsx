import React from "react";
import styled from "styled-components";
import { RestaurantCard } from "../molecules/RestaurantCard"

type RestaurantData = {
    restaurantName?: string;
    foodTag?: string[];
    distance?: number;
    imageSrc ?: string;
}

const fakeData = [
    {restaurantName: "밍식당", foodTag: ["#떡볶이", "#성심당", "#샐러드"], distance:2},
    {restaurantName: "재식당", foodTag: ["#떡볶이", "#빵", "#샐러드"], distance:3},
    {restaurantName: "몽다식당", foodTag: ["#치킨", "#식혜", "#샐러드"], distance:5},
    {restaurantName: "지식당", foodTag: ["#샤브샤브", "#식혜", "#샐러드"], distance:6},
    {restaurantName: "백종원식당", foodTag: ["#찌개", "#식혜", "#샐러드"], distance:8},
]

export const RestaurantButton = () => {
    return (
        <Container>
            {fakeData.length ?  fakeData.map((restaurant:RestaurantData, i:number) => {
                return <RestaurantCard
                    key={i}
                    restaurantName={restaurant.restaurantName}
                    foodTag={restaurant.foodTag}
                    distance={restaurant.distance}
                />
            }) : <div></div>}
        </Container>
    );
}

const Container = styled.div`
    display:flex;
    flex-direction: column;
`;