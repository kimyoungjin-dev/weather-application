import React from "react";
import styled from "styled-components";
import Loading from "Components/Loading";
import { GoPencil } from "react-icons/go";

const Container = styled.div`
  padding: 0px 10px;
  margin-top: 20px;
  font-size: 15px;
`;
const Temp = styled.span`
  position: fixed;
  right: 10%;
  top: 16%;
  font-weight: 600;
  font-size: 40px;
`;

//ItemContainer
const ItemContainer = styled.div`
  width: 98%;
  height: 25vh;
`;

const CurrentWeather = styled.h2`
  font-size: 35px;
  font-weight: 600;
`;

const DateArrayContainer = styled.div`
  margin: 20px 0px;
`;

const Country = styled.span``;

const Pencil = styled.span`
  margin-left: 5px;
  font-size: 12px;
`;

const HomePresenter = ({
  DateArray,
  timeZone,
  currentData,
  loading,
  error,
}) => {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <ItemContainer>
            <CurrentWeather>
              {currentData &&
                currentData.weather &&
                currentData.weather[0] &&
                currentData.weather[0].main}
            </CurrentWeather>
            <DateArrayContainer>
              {`${DateArray.cleanArray}, ${DateArray.getDate}
               ${DateArray.month} ${DateArray.year}`}
            </DateArrayContainer>
            <Temp>{currentData && currentData.temp}℃</Temp>
            <Country>{timeZone}</Country>
            <Pencil>
              <GoPencil />
            </Pencil>
          </ItemContainer>
        </Container>
      )}
    </>
  );
};

export default HomePresenter;
