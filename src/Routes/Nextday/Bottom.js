import React from "react";
import styled from "styled-components";
import { useState } from "./Context";
import { weatherIcon } from "Components/WetherIcons";

const BigConainer = styled.div``;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  margin-top: 30px;
`;

const Left = styled.div`
  display: flex;
`;

const WetherIconBox = styled.span`
  font-size: 24px;
  margin-right: 20px;
`;

const WeekBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const DayTitle = styled.span`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 12px;
`;
const TempSpan = styled.span`
  font-size: 18px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rain = styled.span`
  opacity: 0.6;
  font-size: 14px;
  margin-bottom: 10px;
`;

const RainData = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

const Bottom = () => {
  const { response } = useState();
  const [daily] = response;
  const weekArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const number = [1, 2, 3, 4, 5];

  return (
    <BigConainer>
      {number.map((num, index) => (
        <Container key={index}>
          <Left>
            <WetherIconBox>
              {weatherIcon[daily?.daily[num].weather[0].main]}
            </WetherIconBox>
            <WeekBox>
              <DayTitle>
                {weekArray[new Date(daily?.daily[num].dt * 1000).getDay()]}
              </DayTitle>
              <TempSpan>{daily?.daily[num].temp.day}</TempSpan>
            </WeekBox>
          </Left>

          <Right>
            <Rain>Cloud</Rain>
            <RainData>{daily?.daily[num].clouds}%</RainData>
          </Right>

          <Right>
            <Rain>Humidity</Rain>
            <RainData>{daily?.daily[num].humidity}%</RainData>
          </Right>
        </Container>
      ))}
    </BigConainer>
  );
};

export default Bottom;
