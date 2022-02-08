import React from 'react';
import styled from 'styled-components';
import { Card } from './basecomponents/Card';
import { Title3 } from './basecomponents/Title';

const CardContainer = styled(Card)`
  width: 532px;
  height: 676px;
  background: ${({ theme }) => theme.colors.n0}
`


function WalkThroughCard() {
  return <CardContainer></CardContainer>;
}

export default WalkThroughCard;
