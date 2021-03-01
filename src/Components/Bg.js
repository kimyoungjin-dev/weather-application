import React from "react";
import styled from "styled-components";
import bgImage from "Images/backgroudeImage.gif";

const Image = styled.img`
  height: 100vh;
  width: 100vw;
`;

const Bg = () => <Image src={bgImage} />;

export default Bg;
