import React from "react";
import { Link } from "react-router-dom";
import Loading from "Components/Loading";
import styled from "styled-components";
import { BiLeftArrow } from "react-icons/bi";

const Container = styled.div`
  padding: 0px 20px;
`;

const GoHomeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

const HomeIcon = styled.span`
  font-size: 12px;
`;

const HomeTitle = styled.span`
  font-size: 15px;
`;

const Next7daysContainer = styled.div`
  font-size: 35px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Next = styled.span`
  font-size: 30px;
`;

const SevenDays = styled.span`
  font-weight: 600;
  opacity: 0.6;
  margin-left: 12px;
`;

const NextdayPresenter = ({ loading }) => {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Container>
            <GoHomeContainer>
              <Link to="/">
                <HomeIcon>
                  <BiLeftArrow />
                  <HomeTitle>Home</HomeTitle>
                </HomeIcon>
              </Link>
            </GoHomeContainer>
            <Next7daysContainer>
              <Next>Next</Next>
              <SevenDays>7 days</SevenDays>
            </Next7daysContainer>
          </Container>
        </>
      )}
    </>
  );
};

export default NextdayPresenter;
