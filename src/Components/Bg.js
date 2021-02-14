import React from "react";
import styled from "styled-components";
import bgImage from "Images/backgroudeImage.gif";

const Container = styled.div`
  position: fixed;
  height: 100px;
  width: 100px;
  z-index: -1;
`;

const ImageContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Image = styled.img`
  height: 100vh;
  width: 100vw;
`;

const Bg = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={bgImage} />
      </ImageContainer>
    </Container>
  );
};

export default Bg;
