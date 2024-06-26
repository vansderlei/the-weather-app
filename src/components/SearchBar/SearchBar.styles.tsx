import styled from "styled-components";

export const SerachContainer = styled.div`
  position: absolute;
  height: 64px;
  max-width: 840px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  padding: 0 32px;
  top: calc(45% + 20px);
`

export const SearchInputWrapper = styled.div`
  margin: 0 auto;
  height: 64px;
  background-color: rgba(255, 255, 255, .05);
  border: 1px solid rgba(255, 255, 255, .6);
  padding: 0 50px;
  position: relative;
  border-radius: 32px;
  display: flex;
  align-items: center;
`  
export const SearchInput = styled.input`
  color: #fff;
  text-transform: uppercase;
  background: 0 0;
  outline: 0;
  width: 100%;
  border: none;
  box-shadow: none;
  display: inline;
  font-size: 14px;
  line-height: 1em;
  font-size: 17pt;
  margin: 0;
  min-width: 60px;
  padding: 1px;
  margin: 0 10px;

  &::placeholder {
    color: #ffffff;
  }
`

export const SearchButton = styled.button`
  background: none;
  border: none;
  background: none;
  border: none;
  position: absolute;
  left: 20px;

  &:hover{
    cursor: pointer;
  }
`

export const SearchResults = styled.div``