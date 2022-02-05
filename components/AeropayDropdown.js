import React from 'react';
import styled from 'styled-components';
import { useUserContext } from '../context/UserContext';
import { Card } from './basecomponents/Card';
import { Image } from './basecomponents/Image';

const Dropdown = styled(Card)`
  flex-direction: row;
  justify-content: center;
  width: 156px;
  height: 48px;
`;

function AeropayDropdown() {
  const { name, points } = useUserContext();

  return <>
  <Dropdown>
    <span>{name}</span>
    <Image
      mr={2}
      ml={2}
      width={32}
      height={32}
      src='./icons/favicon.svg'
    ></Image>    
    <span>
      {points}
    </span>
  </Dropdown>
  </>;
}

export default AeropayDropdown;
