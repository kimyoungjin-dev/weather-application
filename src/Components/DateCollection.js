import { useState, useEffect } from "react";

export default () => {
  const [DateArray, setDateArray] = useState();
  const getData = () => {
    const date = new Date();
    const getArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const getAgoArray = [
      "SUN",
      "SAT",
      "FRI",
      "THU",
      "WED",
      "TUE",
      "MON",
      "SUN",
    ];
    const Month = [
      "JAN",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.getDay();
    const year = date.getFullYear();
    const getDate = date.getDate();
    const month = Month[date.getMonth()];
    const cleanArray = getArray[day];
    setDateArray({
      year,
      getDate,
      getAgoArray,
      cleanArray,
      getArray,
      month,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return DateArray;
};
