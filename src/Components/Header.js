import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  top: 60%;
  z-index: 1;
`;

const ItemList = styled.ul`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  padding: 0px 30px;
  font-size: 18px;
  font-weight: 600;
  opacity: 0.6;
`;

const Item = styled.li``;

const SLink = styled(Link)``;

const Header = withRouter((props) => {
  return (
    <Container>
      <ItemList>
        <SLink to="/yesterday">
          <Item> Yesterday</Item>
        </SLink>
        <SLink to="/">
          <Item> Today</Item>
        </SLink>
        <SLink to="/nextday">
          <Item>Next 7 Days</Item>
        </SLink>
      </ItemList>
    </Container>
  );
});

export default Header;
