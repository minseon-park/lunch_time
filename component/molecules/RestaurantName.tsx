import styled from "styled-components";
import { Text } from "../atom/Text";

type RestaurantData = {
    restaurantName?: string;
    foodTag?: string[];
    distance?: number;
    imageSrc ?: string;
}

const FakeData = [
    {restaurantName: "밍식당", foodTag: ["#떡볶이", "#성심당", "#샐러드"],}
]

export const RestaurantName = () => {
     return (
         <Container>
            {FakeData.length ? FakeData.map((data: RestaurantData, i:number) => {
                return (
                    <>
                        <TitleContainer>
                            <Text 
                                key={i} 
                                underline={false}
                                font_size={1.6}
                                font_weight="normal"
                                color="#000000"
                                padding="0.2rem">
                                {data.restaurantName}
                            </Text>
                        </TitleContainer>
                        <TagContainer>
                            {data.foodTag?.map((foodtagData: string, i:number) => {
                                return(
                                    <Text 
                                        key={i} 
                                        underline={false}
                                        font_size={1.1}
                                        font_weight="normal"
                                        color="#666666"
                                        padding="0.2rem">
                                        {foodtagData}
                                    </Text>
                                )
                            })}
                        </TagContainer>
                        
                    </>
                )
            }) : <div></div>}
         </Container>
     );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-contents: center;
`;

const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
`;