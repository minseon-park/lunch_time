import Image from "next/image";
import React from "react";
import styled from "styled-components";

export interface props {
  data?: [];
}

export const RestaurantPhoto: React.FC<props> = ({ data }) => {
  return (
    <Container>
      {data &&
        data.map((src, i) => (
          <Cell key={i}>
            <Image src={src} alt="image" />
          </Cell>
        ))}
    </Container>
  );
};

const Container = styled.div`
  all: unset;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
`;
const Cell = styled.div`
  margin: 1px;
  width: 200px;
  height: 200px;
  background-color: brown;
`;
