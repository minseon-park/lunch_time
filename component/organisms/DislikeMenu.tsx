import styled from "styled-components";
import { Text } from "../atom/Text";
import { MenuButton } from "../atom/MenuButton";
import { Button } from "../atom/Buttom";
import { useState } from "react";
import { useEffect } from "react";
import { Title } from "../molecules/Title";
const fakeData = ["마라탕", "짬뽕", "치킨", "만두", "김치찌개", "교양만두"];

export const DislikeMenu = () => {
  const [isbool, setIsbool] = useState(true);
  const textColor = `${({theme}: {theme: any}) => theme.mode.primaryText}`;

  return (
    <Container>
      <TitleDiv>
        지금 내가 먹고싶지 않은 음식
      </TitleDiv>
      <MenuDiv>
        {fakeData.map((data: string, i: number) => {
          return <MenuButton key={i} text={data}></MenuButton>;
        })}
      </MenuDiv>
      <ButtonSpace>
        <Button text="이거 빼고 점심 골라줘" color="#ffffff"></Button>
      </ButtonSpace>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const MenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: auto;
  margin-bottom: 300px;
`;
const ButtonSpace = styled.div`
  margin-top: auto;
  margin-left: auto;
`;

const TitleDiv = styled.div`
  font-size: 1.5em;
  color: ${({theme}) => theme.mode.primaryText};
  padding: 2rem;
`;

