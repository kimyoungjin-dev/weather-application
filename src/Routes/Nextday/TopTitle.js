import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useHistory } from "react-router-dom";

const Container = styled.div``;

const GoHomeContainer = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const GoHomeArrowIcon = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const GoHome = styled.span`
  opacity: 0.6;
`;

const TitleContainer = styled.span`
  display: flex;
  font-size: 30px;
  margin: 30px 0px;
`;

const BoldTitle = styled.span`
  margin-right: 15px;
`;

const Title = styled.span`
  font-weight: bold;
`;

const TopTitle = () => {
  const history = useHistory();

  const OnHomeClick = () => {
    history.push("/");
  };

  return (
    <>
      <Container>
        <GoHomeContainer>
          <GoHomeArrowIcon>
            <MdKeyboardArrowLeft onClick={() => OnHomeClick()} />
          </GoHomeArrowIcon>
          <GoHome onClick={() => OnHomeClick()}>Weather Forecast</GoHome>
        </GoHomeContainer>
        <TitleContainer>
          <BoldTitle>Next</BoldTitle>
          <Title>7 days</Title>
        </TitleContainer>
      </Container>
    </>
  );
};

export default TopTitle;
