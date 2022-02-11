import React from "react";
import styled from "styled-components";
import { Text } from "../atom/Text";
import { RestauranDescription } from "../molecules/restauranDescription";
import { RestaurantCard } from "../molecules/restaurantCard";
import { Title } from "../molecules/Title";
import { DescriptionField } from "../organisms/descriptionField";
//export interface ITestTemplateProps {}

export const TestTemplate = () => {
  return (
    <Container>
      <DescriptionField />
    </Container>
  );
};
const Container = styled.div``;
