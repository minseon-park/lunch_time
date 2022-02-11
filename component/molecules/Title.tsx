import React from "react";
import styled from "styled-components";
import { Text } from "../atom/Text";

export interface ITitleProps {
  sort: "center" | "right" | "left";
  color?: string;
  title: string;
  main_text: string;
}

export const Title: React.FC<ITitleProps> = ({
  sort = "center",
  color = "black",
  title = "오늘 점심시간에 이 메뉴 어때요?",
  main_text = "당신을 위한 50가지 추천 맛집",
}) => {
  return (
    <>
      <Container>
        <Sort sort={sort}>
          <Text font_size={2.7} font_weight="bold" color={color} padding="0.5">
            {title}
          </Text>
        </Sort>
        <Sort sort={sort}>
          <Text font_size={1} font_weight="normal" color={color} padding="0.5">
            {main_text}
          </Text>
        </Sort>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Sort = styled.div<{ sort: "center" | "right" | "left" }>`
  ${({ sort }) => {
    if (sort == "right") {
      return "margin-left: auto";
    } else if (sort == "left") {
      return "margin-right: auto;";
    } else {
      return "margin-left: auto;margin-right: auto;";
    }
  }};
`;
