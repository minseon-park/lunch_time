import React , { useState } from "react";
import styled from "styled-components";
import SearchIcon from "../../images/SearchIcon.png"

//TODO: 재사용성 reusable 한 search bar 만들기 (placeholder 받아오기 )
 export const SearchBar = () => {
    const [text, setText] = useState("");
    const handleChange = (event: any) => {
        setText(event.target.value);
    };
    const clearInput = () => {
        setText("");
    };
    return (
        <form>
            <StyledInput className={"inputWithIcon"}>
                <Input 
                    type="text"
                    value={text}
                    onChange={handleChange}
                    placeholder= "지금 안 땡기는 음식 찾기"
                    onSubmit={e => { e.preventDefault(); }}
                />
                <button className="right-icon" onClick={clearInput}>
                </button>
            </StyledInput>
        </form>
    );
};


//TODO: img buttton 만들기
const StyledInput = styled.div`
    &.inputWithIcon {
        position: relative;
    }
    display: flex;
    button.right-icon {
        margin-right: 1rem;
        width: 2rem;
        height: 2rem;
        background-image: url(${SearchIcon.src});
        background: none;
        // border: none;
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);

    };
`;
const Input = styled.input`
  width: 55rem;
  height: 4rem;
  font-size: 1rem;
  padding-left: 2rem;
  color: 494949;
  border: none;
  border-radius: 10px;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
  outline: none;
  background: #F0F5F9;
  cursor: pointer;
  }
`;