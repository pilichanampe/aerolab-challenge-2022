import React from 'react';
import styled from 'styled-components';
import { Box } from './basecomponents/Box';
import { Text } from './basecomponents/Text';
import { Image } from './basecomponents/Image';

const Container = styled(Box)`
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Link = styled(Text)`
  display: flex;
  align-items: center;

  &:hover {
    background: ${({ theme }) => theme.colors.brandDefault};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;    
  }
`;

const TwitterLink = styled(Link)`
  /* background: ${({ theme }) => theme.colors.brandDefault};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
`;

function Footer() {
  return <>
    <Container as="footer">      
      <Link
        as="a"
        href="https://github.com/pilichanampe/aerolab-challenge-2022"
        target="_blank"
        >
        <Image mr="10px"src="./icons/github-active.svg" alt="icon"></Image>
        View this repository
      </Link>
      <TwitterLink
        primary
        as="a"
        href="https://twitter.com/pilichanampe/"
        target="_blank"
        fontSize="sm2"
        color="n500"
        mt={2}
        ml={2}
      >
        Made with ❤ by @pilichanampe :)
      </TwitterLink>
    </Container>
  </>;
}

export default Footer;
