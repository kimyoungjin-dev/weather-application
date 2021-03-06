import React, { useEffect } from "react";
import { WeathData } from "api";
import { useDispatch, useState } from "./Context";
import { SUCCESS } from "./Reducer";
import Form from "./Form";
import Bottom from "./Bottom";
import Loading from "Components/Loading";

const HomeContainer = () => {
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
        <>
          <Form />
          <Bottom />
        </>
      )}
    </>
  );
};

export default HomeContainer;
