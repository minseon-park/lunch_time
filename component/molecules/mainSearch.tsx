import React from "react";
import styled from "styled-components";
import { SearchBar } from "../atom/SearchBar";
import { Text } from "../atom/Text";

export interface IMainSearchProps {
  title: string;
}

export const MainSearch: React.FC<IMainSearchProps> = ({ title }) => (
  <>
    <Container>
      <Divider>
        <Text
          font_size={1.2}
          font_weight="bold"
          color="#ffffff"
          text_shadow={true}
        >
          {title}
        </Text>
      </Divider>
      <Divider>
        <SearchBar></SearchBar>
      </Divider>
    </Container>
  </>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Divider = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;
