import React , { useState } from "react";
import styled from "styled-components";
import Image, { ImageProps } from "next/image";
import SearchIcon from "../../images/SearchIcon.png"
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    searchText: string,
}

export const SearchBar = () => {
    const {register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <StyledInput className={"inputWithIcon"}>
                <Input 
                    {...register("searchText", {required: true})}
                    placeholder= "지금 안 땡기는 음식 찾기"
                />
                <Button type="submit">
                    <Image
                    src={SearchIcon}
                    alt="image"
                    />
                </Button>
            </StyledInput>
        </Form>
    );
};

const Form = styled.form`
    width: 55rem;
    height: 4rem;
    padding-left: 2rem;
    color: 494949;
    border: none;
    border-radius: 10px;
    box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
    outline: none;
    background: #F0F5F9;
`;

const StyledInput = styled.div`
    display: flex;
`;
const Input = styled.input`
    border: none;
    background: none;
    font-size: 1rem;
    color: 494949;
    width: 51rem;
    height: 4rem;
    outline: none;
`;

const Button = styled.button`
    margin-right: 1rem;
    width: 2rem;
    height: 4rem;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    outline: none;
`;