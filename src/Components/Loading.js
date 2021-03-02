import React from "react";
import styled from "styled-components";
import bgImage from "../Images/Loading.gif";

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Loading = () => <Image src={bgImage} />;

export default Loading;
