import React from "react";
import styled from "styled-components";
import { useState } from "./Context";
import { weatherIcon } from "Components/WetherIcons";

const Container = styled.div``;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  height: 100px;
  font-size: 10px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  color: black;
  padding: 7px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const MiniItem = styled.span``;

const MiniCircleItem = styled.div`
  border-radius: 100%;
  margin: 10px 0px;
  opacity: 0.5;
  font-size: 20px;
  padding: 5px;
  color: white;
  background-color: gray;
`;

const Bottom = () => {
  const { response } = useState();
  const [hourly] = response;
  const number = [0, 2, 4, 6, 8];
  // console.log(new Date(hourly?.hourly[0].dt * 1000).getHours());

  return (
    <Container>
      <List>
        {number.map((num, index) => (
          <Item key={index}>
            <MiniItem>
              {new Date(hourly?.hourly[num].dt * 1000).getHours()}시
            </MiniItem>
            <MiniCircleItem>
              {weatherIcon[hourly?.hourly[num]?.weather[0].main]}
            </MiniCircleItem>
            <MiniItem>{hourly?.hourly[num].temp}</MiniItem>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default Bottom;
