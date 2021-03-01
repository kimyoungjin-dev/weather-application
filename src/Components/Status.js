import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsBatteryHalf, BsFilterRight } from "react-icons/bs";
import { BiWifi } from "react-icons/bi";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`;

const Time = styled.div``;

const ItemList = styled.div``;

const Item = styled.span`
  margin-left: 10px;
`;

const Status = () => {
  const [clock, setClock] = useState("");

  const getClock = () => {
    const date = new Date();
    const getHours = date.getHours();
    const Minutes = date.getMinutes();
    setClock(
      `${getHours < 10 ? `0${getHours}` : getHours}:${
        Minutes < 10 ? `0${Minutes}` : Minutes
      }`
    );
  };

  useEffect(() => {
    setInterval(() => {
      getClock();
    }, 1000);
  }, []);

  return (
    <Container>
      <Time>{clock}</Time>
      <ItemList>
        <Item>
          <BsBatteryHalf />
        </Item>
        <Item>
          <BiWifi />
        </Item>
        <Item>
          <BsFilterRight />
        </Item>
      </ItemList>
    </Container>
  );
};

export default Status;
