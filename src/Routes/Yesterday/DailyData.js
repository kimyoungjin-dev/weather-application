import { useState, useEffect } from "react";
import { pastApi } from "api";

export default () => {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState({
    first: null,
    second: null,
    thr: null,
    four: null,
    five: null,
  });

  const getWeather = async (lat, lon) => {
    const day = [1, 2, 3, 4, 5, 6];
    try {
      const {
        data: { current: first },
      } = await pastApi.getPast(lat, lon, day[0]);

      const {
        data: { current: second },
      } = await pastApi.getPast(lat, lon, day[1]);

      const {
        data: { current: thr },
      } = await pastApi.getPast(lat, lon, day[2]);

      const {
        data: { current: four },
      } = await pastApi.getPast(lat, lon, day[3]);

      const {
        data: { current: five },
      } = await pastApi.getPast(lat, lon, day[4]);
      setState({
        ...state,
        first,
        second,
        thr,
        four,
        five,
      });
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
        const lon = position.coords.latitude;
        getWeather(lat, lon);
      },
      () => console.log("Cant find you :(")
    );
  }, []);

  return { state, loading };
};
