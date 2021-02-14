import React from "react";
import styled from "styled-components";
import Loading from "Components/Loading";
import DailyData from "./DailyData";

const Container = styled.div`
  padding: 0px 20px;
  margin-top: 20px;
`;

const InformationContainer = styled.div`
  display: flex;
  height: 80px;
`;

const WeatherIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;

const UnderBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0px;
  align-items: center;
  width: 25%;
  margin-left: 20px;
  font-size: 14px;
`;

const Day = styled.div``;

const Temp = styled.div`
  font-size: 14px;
`;

const HumidityTitle = styled.span`
  opacity: 0.4;
`;

const Percent = styled.span`
  opacity: 0.6;
  text-align: center;
  margin-top: 5px;
`;

const YesterdayDaily = ({ DateArray, weatherIcon, loading }) => {
  const number = [0, 1, 2, 3, 4];
  const { state } = DailyData();
  const stateArray = Object.values(state);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {number.map((item, index) => (
            <InformationContainer key={index}>
              <WeatherIcon>
                {
                  weatherIcon[
                    stateArray[item] &&
                      stateArray[item].weather &&
                      stateArray[item].weather[0] &&
                      stateArray[item].weather[0].main
                  ]
                }
              </WeatherIcon>
              <UnderBar>
                <Day>{DateArray.getAgoArray[item]}</Day>
                <Temp>{stateArray[item] && stateArray[item].temp}</Temp>
              </UnderBar>

              <UnderBar>
                <HumidityTitle>Humidity</HumidityTitle>
                <Percent>
                  {stateArray[item] && stateArray[item].humidity}%
                </Percent>
              </UnderBar>

              <UnderBar>
                <HumidityTitle>Clouds</HumidityTitle>
                <Percent>{stateArray[item] && stateArray[item].clouds}</Percent>
              </UnderBar>
            </InformationContainer>
          ))}
        </Container>
      )}
    </>
  );
};

export default YesterdayDaily;
