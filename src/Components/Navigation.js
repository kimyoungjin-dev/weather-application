import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const Item = styled.li``;

const Navigation = () => {
  return (
    <Container>
      <List>
        <Link to="/">
          <Item>Today</Item>
        </Link>

        <Link to="/yesterday">
          <Item>Yesterday</Item>
        </Link>

        <Link to="/nextday">
          <Item>Next 7 Days</Item>
        </Link>
      </List>
    </Container>
  );
};

export default Navigation;
