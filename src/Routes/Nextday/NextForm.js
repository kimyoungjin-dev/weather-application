import React from "react";
import styled from "styled-components";
import Loading from "Components/Loading";

const NextFormContainer = styled.div`
  padding: 0px 10px;
`;

const Form = styled.div`
  height: 30vh;
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  color: black;
  opacity: 0.6;
  border: 1px solid black;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const DayContainer = styled.div`
  display: flex;
  align-items: center;
  width: 43%;
  justify-content: center;
`;

const Date = styled.span`
  margin-right: 10px;
`;

const Icon = styled.span`
  color: skyblue;
`;
//Form-temp
const Temp = styled.div`
  position: absolute;
  top: 5%;
  right: 0;
  width: 130px;
  height: 40px;
  font-size: 40px;
`;

const FormContainer = styled.div`
  margin-top: 20px;
  color: black;
  font-size: 14px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
`;

const DataBox = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DataTitle = styled.span``;

const DataValue = styled.span`
  margin-left: 10px;
  opacity: 0.6;
`;

const NextForm = ({ DateArray, weatherIcon, NextData, loading }) => {
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NextFormContainer>
            <Form>
              <DayContainer>
                <Date>{DateArray.cleanArray}</Date>
                <Icon>
                  {weatherIcon[NextData && NextData[0].weather[0].main]}
                </Icon>
              </DayContainer>
              <Temp>{NextData && NextData[0].temp.day}℃</Temp>
              <FormContainer>
                <DataBox>
                  <DataTitle>Wind</DataTitle>
                  <DataValue>{NextData && NextData[0].wind_speed}m/s</DataValue>
                </DataBox>

                <DataBox>
                  <DataTitle>Humidity</DataTitle>
                  <DataValue>{NextData && NextData[0].humidity}%</DataValue>
                </DataBox>
              </FormContainer>

              <FormContainer>
                <DataBox>
                  <DataTitle>Dew_point</DataTitle>
                  <DataValue>{NextData && NextData[0].dew_point}mm</DataValue>
                </DataBox>

                <DataBox>
                  <DataTitle>Clude</DataTitle>
                  <DataValue>{NextData && NextData[0].clouds}</DataValue>
                </DataBox>
              </FormContainer>
            </Form>
          </NextFormContainer>
        </>
      )}
    </div>
  );
};

export default NextForm;
