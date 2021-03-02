import React, { useEffect } from "react";
import { WeathData } from "api";
import { useDispatch, useState } from "./Context";
import { SUCCESS } from "./Reducer";
import Bottom from "./Bottom";
import Loading from "Components/Loading";
import Form from "./Form";
import TopTitle from "./TopTitle";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 10px;
`;
const NextContainer = () => {
  const { dispatch } = useDispatch();
  const { loading } = useState();

  const getWeather = async (lat, lon) => {
    const [data, dataError] = await WeathData.getCurrent(lat, lon);
    dispatch({ type: SUCCESS, payload: data, dataError });
  };

  const getLocation = () => {
    const handleSuccess = (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeather(lat, lon);
    };
    const handleError = () => {
      console.log("위치정보를 찾을수없습니다.");
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <TopTitle />
          <Form />
          <Bottom />
        </Container>
      )}
    </>
  );
};

export default NextContainer;
