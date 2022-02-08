import React from 'react';
import styled from 'styled-components';
import { Box } from './basecomponents/Box';
import { Title1 } from './basecomponents/Title';
import { Text } from './basecomponents/Text';
import { Button } from './basecomponents/Button';
import { Image } from './basecomponents/Image';
import Link from 'react-scroll/modules/components/Link';

const BaseHeader = styled(Box)`
  width: 100%;
  display: flex;
`;

const Container = styled(Box)`
  width: 100%;
  height: 780px;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: end};
  align-items: start;
`;

const Title = styled(Title1)`
`;

const BigButton = styled(Button)`
  width: 318px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin-top: 64px;
  border-radius: 24px;
`;

const Span = styled.span`
  background: ${({ primary, theme }) => primary && theme.colors.brandDefault};
  -webkit-background-clip: ${({ primary }) => primary && 'text'};
  -webkit-text-fill-color: ${({ primary }) => primary && 'transparent'};
  display: block;
`;

const IllustrationWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  border-radius: 25px;
  align-items: end;
  height: auto;
`;

const IllustrationBackground = styled(Box)`
  background: ${({ theme }) => theme.colors.sectionBg};
  height: 650px;
  width: 730px;
  position: absolute;
  display: flex;
  align-self: end;
  border-radius: 100px;
`

const Illustration = styled(Image)`
  position: relative;
  object-fit: cover;
`;

const PreTitle = styled(Text)`
  line-height: 150%;
  font-style: normal;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.n600};
  font-weight: 600px;
`;


function Header() {
  return (
    <BaseHeader as="header">
      <Container>
        <Box
          width="577px"
          mb="14px"
        >
          <Title>
            <PreTitle as="h3">EXPLORE THE</PreTitle>
            <Span primary>TECH</Span>
            <Span>ZONE</Span>
          </Title>
          <Text
            mt="24px"
          >Here you'll be able to redeem all of your hard-earned Aeropoints and exchange them for cool tech.</Text>
            <BigButton
              as={Link}
              to="productsSection"
              spy={true}
              smooth={true}
            >
              View all products
              <Image
                src="./icons/Icons.svg"
                ml="11px"
              ></Image>
            </BigButton>
        </Box>
      </Container>
      <Container start>
        <IllustrationWrapper>
          <IllustrationBackground></IllustrationBackground>
          <Illustration
            src="./illustrations/hero-desktop.png"
            width="897px"
          ></Illustration>
        </IllustrationWrapper>
      </Container>
    </BaseHeader>
  );
}

export default Header;
