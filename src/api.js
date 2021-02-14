import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: "1cce20274897538f27f72a370b9bb045",
    units: "metric",
  },
});

export const currentApi = {
  getCurrent: (lat, lon) =>
    api.get("/onecall?", {
      params: {
        lat: lat,
        lon: lon,
        exclude: "alerts,minutely,daily",
      },
    }),
};

export const futureApi = {
  getFuture: (lat, lon) =>
    api.get("/onecall?", {
      params: {
        lat: lat,
        lon: lon,
        exclude: "alerts,minutely,current,hourly",
      },
    }),
};

export const pastApi = {
  getPast: (lat, lon, day) =>
    api.get("/onecall/timemachine?", {
      params: {
        lat: lat,
        lon: lon,
        dt: Math.floor(+new Date() / 1000 - 86400 * `${day}`),
      },
    }),
};
