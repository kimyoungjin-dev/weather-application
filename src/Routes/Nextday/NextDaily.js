import React from "react";
import styled from "styled-components";
import Loading from "Components/Loading";

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

const DayTemp = styled.div`
  position: relative;
  height: 12vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Day = styled.div`
  opacity: 0.4;
`;

const Temp = styled.div`
  font-size: 14px;
`;

const MaxTemp = styled.div`
  position: absolute;
  top: -10px;
  right: -30px;
  opacity: 0.4;
  font-size: 12px;
`;

const WeatherInfomaition = styled.span`
  opacity: 0.4;
`;

const Percent = styled.span`
  opacity: 0.6;
  text-align: center;
  margin-top: 5px;
`;

const NextDaily = ({ DateArray, weatherIcon, NextData, loading }) => {
  const numberArray = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {numberArray.map((item, index) => (
            <InformationContainer key={index}>
              <WeatherIcon>
                {weatherIcon[NextData && NextData[item].weather[0].main]}
              </WeatherIcon>
              <UnderBar>
                <DayTemp>
                  <Day>{DateArray.getArray[item + 1]}</Day>
                  <Temp>{NextData && NextData[item].temp.day}</Temp>
                  <MaxTemp>{NextData && NextData[item].temp.max}</MaxTemp>
                </DayTemp>
              </UnderBar>

              <UnderBar>
                <WeatherInfomaition>Humidity</WeatherInfomaition>
                <Percent>{NextData && NextData[item].humidity}%</Percent>
              </UnderBar>

              <UnderBar>
                <WeatherInfomaition>Rain</WeatherInfomaition>
                <Percent>
                  {NextData && NextData[item].rain
                    ? NextData[item].rain
                    : "No rain news"}
                </Percent>
              </UnderBar>
            </InformationContainer>
          ))}
        </Container>
      )}
    </>
  );
};

export default NextDaily;
