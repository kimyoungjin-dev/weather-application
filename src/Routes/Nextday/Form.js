import React from "react";
import styled from "styled-components";
import { week } from "Components/Date";
import { weatherIcon } from "Components/WetherIcons";
import { useState } from "./Context";
const Container = styled.div`
  background-color: white;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  border-radius: 20px;
  height: 30vh;
  padding: 20px;
`;

const TopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const WeartherBox = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const TempBox = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const DataBox = styled.span`
  display: flex;
  justify-content: flex-start;
  width: 130px;
`;

const DataTitle = styled.span`
  font-weight: bold;
  font-size: 15px;
  margin-right: 20px;
`;

const DataContents = styled.span`
  font-size: 14px;
  opacity: 0.6;
`;

const Form = () => {
  const { response } = useState();
  const [daily] = response;

  return (
    <Container>
      <TopContainer>
        <WeartherBox>
          {week} {weatherIcon[daily?.daily[0].weather[0].main]}
        </WeartherBox>
        <TempBox>{daily?.daily[0].temp.day}</TempBox>
      </TopContainer>
      <DataContainer>
        <DataBox>
          <DataTitle>Wind </DataTitle>
          <DataContents>{daily?.daily[0].wind_speed} m/h</DataContents>
        </DataBox>

        <DataBox>
          <DataTitle>Humidity</DataTitle>
          <DataContents>{daily?.daily[0].humidity}%</DataContents>
        </DataBox>
      </DataContainer>

      <DataContainer>
        <DataBox>
          <DataTitle>Cloud </DataTitle>
          <DataContents>{daily?.daily[0].clouds}</DataContents>
        </DataBox>

        <DataBox>
          <DataTitle>dew_point</DataTitle>
          <DataContents>{daily?.daily[0].dew_point}</DataContents>
        </DataBox>
      </DataContainer>
    </Container>
  );
};

export default Form;
