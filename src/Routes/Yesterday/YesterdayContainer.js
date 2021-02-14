import React, { useEffect, useState } from "react";
import YesterdayPresenter from "./YesterdayPresenter";
import YesterdayForm from "./YesterdayForm";
import YesterdayDaily from "./YesterdayDaily";
import { currentApi } from "api";

const YesterdayContainer = ({ weatherIcon, DateArray }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //현재정보
  const getWeather = async (lat, lon) => {
    try {
      const {
        data: { current: data },
      } = await currentApi.getCurrent(lat, lon);
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getWeather(lat, lon);
      },
      () => console.log("Cant find you :(")
    );
  }, []);

  return (
    <>
      <YesterdayPresenter loading={loading} />
      <YesterdayForm
        DateArray={DateArray}
        weatherIcon={weatherIcon}
        data={data}
        loading={loading}
        error={error}
      />
      <YesterdayDaily
        DateArray={DateArray}
        weatherIcon={weatherIcon}
        loading={loading}
      />
    </>
  );
};

export default YesterdayContainer;
