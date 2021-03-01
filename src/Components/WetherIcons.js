import React from "react";
import { AiOutlineAntCloud } from "react-icons/ai";
import { IoThunderstormOutline } from "react-icons/io5";
import { RiDrizzleFill } from "react-icons/ri";
import {
  FaSnowflake,
  FaSmog,
  FaCloudMoonRain,
  FaCloudSun,
} from "react-icons/fa";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { WiDayCloudyWindy } from "react-icons/wi";

export const weatherIcon = {
  Clouds: <AiOutlineAntCloud />,
  Drizzle: <RiDrizzleFill />,
  Thunderstorm: <IoThunderstormOutline />,
  Rain: <FaCloudMoonRain />,
  Snow: <FaSnowflake />,
  Clear: <FaCloudSun />,
  Haze: <IoPartlySunnyOutline />,
  Mist: <FaSmog />,
  Dust: <WiDayCloudyWindy />,
};
