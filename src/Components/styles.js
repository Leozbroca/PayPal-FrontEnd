import styled from "styled-components";

export const Main = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Bree Serif", serif;
  border: 1px solid black;
  background-color: #dddcf8;

  .name {
    font-size: 18px;
    margin: 0px;
    margin-top: 5px;
  }

  .item-number {
    font-size: 18px;
    margin: 0px;
  }

  .price {
    font-size: 18px;
    margin: 0px;
    color: "#00033D";
    margin-bottom: 5px;
  }
`;

export const Photo = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: red;
`;
