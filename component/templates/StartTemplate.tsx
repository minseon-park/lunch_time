import React from "react";
import styled from "styled-components";
import { Text } from "../atom/Text";
import { Button } from "../atom/Buttom";
import { Title } from "../molecules/Title";

export const StartTemplate = () => {
    return (
        <Container>
            <LogoDiv>
                <Title
                    title="Lunch Time"
                    main_text="직장인을 위한 오늘 점심 추천 도우미"
                    sort="center"
                    color="white"
                    title_size={2.7}
                    main_text_size={1}
                />
            </LogoDiv>
            <MainDiv>
                <TextDiv>
                    <Text
                        font_size={3}
                        font_weight="bold"
                        color="#FFFFFF"
                        text_shadow= {true}
                        padding="0"
                     >
                    점심메뉴 정하셨나요??
                    </Text>
                    <Text
                        font_size={3}
                        font_weight="bold"
                        color="#FFFFFF"
                        text_shadow= {true}
                        padding="0"
                     >
                    점심메뉴 고르는 거 도와드릴게요
                    </Text>
                    <Text
                        font_size={3}
                        font_weight="bold"
                        color="#FFFFFF"
                        text_shadow= {true}
                        padding="0"
                     >
                    당신의 점심시간은 소중하니깐
                    </Text>
                </TextDiv>
                <ButtonDiv>
                    <Button
                        text="점심메뉴 고르러가기"
                        color="white"
                        font_size={1.5}
                    >
                    </Button>
                </ButtonDiv>
            </MainDiv>
        </Container>
    );
};

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: grey;
    display: flex;
    flex-direction: column;
`;

const LogoDiv = styled.div`
    display: flex;
    padding: 1rem 2rem;
`;
const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-item: flex-end;
    padding: 10rem 8rem;
    flex: 1;
`;
const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-item: flex-end;
    text-align: end;
`;
const ButtonDiv = styled.div`
    display: flex;
    justify-content: flex-end;
`;
