import styled from "styled-components";
import { Box } from "./basecomponents/Box";

const Waves = styled(Box)`
  display: flex;
  background-image: url('./illustrations/figma-pattern.svg');
  position: absolute;
  height: 1370px;
  width: 100%;
  z-index: -1;
  display: flex;
  top: 230px;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    top: 150px;
  }

  @media only screen and (max-width: 1464px) {
    top: 150px;
  }
`;

import React from 'react';

function WavesPattern() {
  return (
    <>
      <Waves></Waves>
    </>
  )
}

export default WavesPattern;
