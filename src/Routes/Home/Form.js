import React from "react";
import styled from "styled-components";
import { useState } from "./Context";
import { week, day, month, year } from "Components/Date";
import bgImage from "Images/HomePoster.jpeg";
import { IoIosArrowForward } from "react-icons/io";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  height: 18vh;
  padding: 0px 20px;
  display: flex;
`;

const LeftContentsBox = styled.div`
  width: 65%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Weather = styled.h1`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 24px;
`;

const DateArray = styled.span`
  margin-bottom: 5px;
  opacity: 0.6;
`;

const Country = styled.span`
  font-size: 14px;
`;

const RightContentsBox = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Temp = styled.span`
  font-weight: bold;
  font-size: 34px;
`;

const BgImage = styled.img`
  height: 40vh;
  width: 100%;
  margin: 10px 0px;
`;

const GoHomeContainer = styled.div`
  display: flex;
  margin-right: 10px;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;

const GoHomeTitle = styled.span`
  opacity: 0.8;
`;

const GoHomeIcon = styled.span``;

const Form = () => {
  const history = useHistory();
  const { response } = useState();
  const [data] = response;

  const onNextDayClick = () => {
    history.push("/nextday");
  };

  return (
    <>
      <Container>
        <LeftContentsBox>
          <Weather>{data.current.weather[0].main}</Weather>
          <DateArray>
            {week} {day} {month} {year}
          </DateArray>
          <Country>{data.timezone}</Country>
        </LeftContentsBox>

        <RightContentsBox>
          <Temp>{data.current.temp}</Temp>
        </RightContentsBox>
      </Container>
      <BgImage src={bgImage} />
      <GoHomeContainer onClick={() => onNextDayClick()}>
        <GoHomeTitle>Next 7day</GoHomeTitle>
        <GoHomeIcon>
          <IoIosArrowForward />
        </GoHomeIcon>
      </GoHomeContainer>
    </>
  );
};

export default Form;
