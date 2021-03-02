import axios from "axios";

const makeRequest = (path, params) =>
  axios.get(`https://api.openweathermap.org/data/2.5/${path}`, {
    params: {
      ...params,
      appid: "1cce20274897538f27f72a370b9bb045",
    },
  });

const CurrentHourly = async (path, params = {}) => {
  try {
    const { data } = await makeRequest(path, params);
    return [data, null];
  } catch (error) {
    console.log(error);
    return [error, null];
  }
};

export const current = {
  getCurrent: (lat, lon) => CurrentHourly("onecall", { lat, lon }),
};
