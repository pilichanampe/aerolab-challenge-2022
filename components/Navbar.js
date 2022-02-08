import React from 'react';
import styled from 'styled-components';
import AeropayDropdown from './AeropayDropdown';
import { Box } from './basecomponents/Box';
import { Spacer } from './basecomponents/Spacer';
import { Image } from './basecomponents/Image';

const Nav = styled(Box)`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.n0};
  position: fixed;
  z-index: 2;
  padding: 24px;
  top: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.n200};
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
`;

function Navbar() {
  return (
    <Nav as="nav">
      <Box
        as="a"
        href="https://aerolab.co/"
        title="Visit Aerolab page"
      >
        <Image
          width="126px"
          src="./icons/aerolab-logo-1.svg"
          alt="Aerolab logo"
        ></Image>
      </Box>
      <Spacer></Spacer>
      <AeropayDropdown></AeropayDropdown>
    </Nav>
  );
}

export default Navbar;
