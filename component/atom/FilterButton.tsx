import React from "react";
import styled from "styled-components";
import FilterImage from "../../images/FilterImage.png"
import Image from "next/image"
export interface IButtonProps {
    text?: string;
    width?: string;
    onclick?: () => void;
  }

export const FilterButton: React.FC<IButtonProps> = ({
    text,
    width,
    onclick = () => {},
}) => {
    return <Container onClick={onclick}>
        <StyledDiv>{text}</StyledDiv>
        <Image
            src={FilterImage}
            alt="none"
            width={15}
            height={15}
        />
    </Container>;
};

  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid;
    border-radius: 10px;
    padding: 15px 15px;
`;

    const StyledDiv = styled.div`
        margin-right: 5px;
    `;