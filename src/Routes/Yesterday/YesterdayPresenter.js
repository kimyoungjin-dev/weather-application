import React from "react";
import { Link } from "react-router-dom";
import Loading from "Components/Loading";
import styled from "styled-components";
import { BiRightArrow } from "react-icons/bi";

const Container = styled.div`
  padding: 0px 10px;
`;

const GoHomeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
`;

const HomeIcon = styled.span`
  font-size: 12px;
`;

const HomeTitle = styled.span`
  font-size: 15px;
  margin-left: 5px;
`;

const Past7daysContainer = styled.div`
  font-size: 35px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Past = styled.span`
  font-size: 30px;
`;

const SevenDays = styled.span`
  font-weight: 600;
  opacity: 0.6;
  margin-left: 12px;
`;

//

const YesterdayPresenter = ({ loading }) => {
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
                  <BiRightArrow />
                  <HomeTitle>Home</HomeTitle>
                </HomeIcon>
              </Link>
            </GoHomeContainer>
            <Past7daysContainer>
              <Past>Past</Past>
              <SevenDays>7 days</SevenDays>
            </Past7daysContainer>
          </Container>
        </>
      )}
    </>
  );
};

export default YesterdayPresenter;
