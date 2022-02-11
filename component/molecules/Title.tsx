import React from "react";
import styled from "styled-components";
import { Text } from "../atom/Text";

export const Title = () => {
    return ( 
        <>
        <Text 
          underline={false}
          font_size={2.5}
          font_weight="normal"
          color="#000000"
          padding="0.5">
          오늘 점심시간에 이 메뉴 어때요?</Text>
        <Text
          underline={false}
          font_size={1.5}
          font_weight="normal"
          color="#000000"
          padding="0.5">
          당신을 위한 50가지 추천 맛집</Text>
        </>
    );
} 