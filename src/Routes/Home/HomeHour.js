import React, { useEffect, useState } from "react";
import { currentApi } from "api";
import styled from "styled-components";
import Loading from "Components/Loading";

const Container = styled.div`
  padding: 0px 10px;
`;

const List = styled.div`
  padding-left: 11px;
  background-color: white;
  position: fixed;
  bottom: 0;
  border-radius: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 44vh;
  width: 90%;
  border: 10px;
  & :hover {
    background-color: skyblue;
    transition-property: background-color;
    transition-duration: 2.5s;
  }
`;

const Item = styled.div`
  margin-top: 30px;
  width: 25%;
  border-radius: 50px;
  height: 50%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 20px 0px;
  margin-right: 10px;
`;

const Hours = styled.span`
  opacity: 0.5;
  font-size: 14px;
`;

const IconContainer = styled.div`
  background-color: skyblue;
  opacity: 0.3;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.span`
  color: black;
  color: blue;
  opacity: 1;
`;

const Temp = styled.span`
  font-size: 13px;
`;

const HomeHour = ({ weatherIcon }) => {
  const [hours, setHours] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getWeather = async (lat, lon) => {
    try {
      const {
        data: { hourly: hours },
      } = await currentApi.getCurrent(lat, lon);

      setHours(hours);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handdleSuccess = (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeather(lat, lon);
    };

    const handdleError = () => {
      console.log("Can not find you :(");
    };

    navigator.geolocation.getCurrentPosition(handdleSuccess, handdleError);
  }, []);
  const HoursData = [0, 2, 4, 6];

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <List>
            {HoursData.map((e, index) => (
              <Item key={index}>
                <Hours>
                  {new Date(hours && hours[e].dt * 1000).getHours()}시
                </Hours>
                <IconContainer>
                  <Icon>
                    {weatherIcon &&
                      weatherIcon[
                        hours &&
                          hours[e] &&
                          hours[e].weather[0] &&
                          hours[e].weather[0].main
                      ]}
                  </Icon>
                </IconContainer>
                <Temp>{hours && hours[e].temp}º</Temp>
              </Item>
            ))}
          </List>
        </Container>
      )}
    </>
  );
};

export default HomeHour;
