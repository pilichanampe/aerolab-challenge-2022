import React from 'react';
import styled from 'styled-components';
import { Box } from './basecomponents/Box';
import WalkThroughCard from './WalkThroughCard';

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 10px solid black;
  width: 100%;
  height: 721px;
  margin-top: 128px;
`;

function WalkThrough() {
  return (
    <Container as="section">
      <WalkThroughCard></WalkThroughCard>
    </Container>
  );
}

export default WalkThrough;
