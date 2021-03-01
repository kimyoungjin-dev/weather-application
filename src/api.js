import axios from "axios";

const makeRequest = (path, params) =>
  axios.get(`https://api.openweathermap.org/data/2.5/`, {
    params: {
      ...params,
      appid: "1cce20274897538f27f72a370b9bb045",
    },
  });

export const current = {
  getCurrent: (lat, lon) => makeRequest("onecall?", { lat, lon }),
};
