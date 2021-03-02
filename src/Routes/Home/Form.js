import React from "react";
import styled from "styled-components";
import Loading from "Components/Loading";
import { useState } from "./Context";
import { week, day, month, year } from "Components/Date";
import bgImage from "Images/HomePoster.jpeg";

const Container = styled.div`
  height: 18vh;
  padding: 0px 20px;
  display: flex;
`;

//left
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

//right
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

const Form = () => {
  const { response } = useState();
  const [data] = response;

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
    </>
  );
};

export default Form;
