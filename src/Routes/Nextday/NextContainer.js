import React, { useEffect, useState } from "react";
import { futureApi } from "api";
import NextdayPresenter from "./NextdayPresenter";
import NextForm from "./NextForm";
import NextDaily from "./NextDaily";

const NextContainer = ({ weatherIcon, DateArray }) => {
  const [NextData, setNextData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getWeather = async (lat, lon) => {
    try {
      const {
        data: { daily: NextData },
      } = await futureApi.getFuture(lat, lon);
      setNextData(NextData);
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
      () => console.log("Can find you :(")
    );
  }, []);

  return (
    <div>
      <NextdayPresenter loading={loading} />
      <NextForm
        DateArray={DateArray}
        weatherIcon={weatherIcon}
        NextData={NextData}
        loading={loading}
      />
      <NextDaily
        DateArray={DateArray}
        weatherIcon={weatherIcon}
        NextData={NextData}
        loading={loading}
      />
    </div>
  );
};

export default NextContainer;
