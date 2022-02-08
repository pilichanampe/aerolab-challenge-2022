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
