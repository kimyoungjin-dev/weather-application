import React, { useEffect, useState } from "react";
import Header from "Components/Header";
import { currentApi } from "api";
import HomePresenter from "./HomePresenter";
import HomeHour from "./HomeHour";

const HomeContainer = ({ DateArray, weatherIcon }) => {
  const [currentData, setCurrentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeZone, setTimeZone] = useState(null);

  const getWeather = async (lat, lon) => {
    try {
      const {
        data: { timezone, current: currentData },
      } = await currentApi.getCurrent(lat, lon);

      setCurrentData(currentData);
      setTimeZone(timezone);
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

  return (
    <div>
      <Header />
      <HomeHour weatherIcon={weatherIcon} currentData={currentData} />
      <HomePresenter
        DateArray={DateArray}
        currentData={currentData}
        timeZone={timeZone}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default HomeContainer;
