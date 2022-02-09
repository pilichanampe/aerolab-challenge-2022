import React from 'react';
import styled from 'styled-components';
import { Box } from './basecomponents/Box';
import { Title1 } from './basecomponents/Title';
import { Text } from './basecomponents/Text';
import { Button } from './basecomponents/Button';
import { Image } from './basecomponents/Image';
import Link from 'react-scroll/modules/components/Link';
import { Grid } from './basecomponents/Grid';

const Container = styled(Grid)`
  width: 100%;
  height: 780px;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;

  @media only screen and (max-width: 1024px) {
    height: 600px;
  }
`;

const HeaderWrapper = styled(Grid)`
  max-width: 1464px;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 1024px) {
    align-items: start;
    height: 540px;
  }
`;

const PresentationWrapper = styled(Container)`
  width: 100%;   
  
  @media only screen and (max-width: 1464px) {
    text-align: center;
    margin-top: 0;
    height: 760px;
  }

  @media only screen and (max-width: 1024px) {
    justify-content: space-around;
    margin-top: 0;
  }
`;

const IllustrationContainer = styled(Container)`
  width: auto;
  
  @media only screen and (max-width: 1464px) {
    display: none;
  }

  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end; */
`;

const TextWrapper = styled(Container)`
  max-width: 600px;
  
  @media only screen and (max-width: 1464px) {
    align-items: center;
    text-align: center;
  }

  @media only screen and (max-width: 1024px) {
    align-items: center;
    justify-content: start;
    text-align: center;
    max-width: 350px;
    height: auto;
    margin-top: 0px;
  }
`;


const Title = styled(Title1)`
  /* @media only screen and (max-width: 1464px, min-width: 1024px) { */
    /* font-size: ${({ theme }) => theme.fontSizes.xl2} */
  /* } */
  
  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSizes.xl2};
    align-items: center;
    text-align: center;
  }

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
  z-index: 1;

  @media only screen and (max-width: 1024px) {
    height: 64px;
    width: 303px;
    font-size: ${({ theme }) => theme.fontSizes.sm1};
    margin-top: 40px;
  }
`;

const Span = styled.span`
  background: ${({ primary, theme }) => primary && theme.colors.brandDefault};
  -webkit-background-clip: ${({ primary }) => primary && 'text'};
  -webkit-text-fill-color: ${({ primary }) => primary && 'transparent'};
  display: block;
  text-align: start;
`;

const IllustrationWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: end;
  width: 730px;
  height: 660px;
  background: ${({ theme }) => theme.colors.sectionBg};
  border-radius: 100px;
`;

const Illustration = styled(Image)`
  position: absolute;
  object-fit: cover;
  max-width: 897px;
`;

const PreTitle = styled(Text)`
  line-height: 150%;
  font-style: normal;
  font-weight: 300;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.n600};
  font-weight: 600px;
  width: auto;
  text-align: start;
  letter-spacing: 0.24em;
  margin-bottom: 8px;

  @media only screen and (max-width: 1464px) {
    text-align: center;
    font-size: ${({ theme }) => { theme.fontSizes.sm2}}
  }

  @media only screen and (max-width: 1024px) {
    font-size: ${({ theme }) => { theme.fontSizes.lg2}} !important;
  }


`;

function Header() {
  return (
    <HeaderWrapper as="header">
      <PresentationWrapper>
        <TextWrapper
          // display="flex"
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
          >Here you&apos;ll be able to redeem all of your hard-earned Aeropoints and exchange them for cool tech.</Text>
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
                alt="icon"
              ></Image>
            </BigButton>
        </TextWrapper>
      </PresentationWrapper>
      <IllustrationContainer>
        <IllustrationWrapper>
          <Illustration
            src="./illustrations/hero-desktop.png"
            alt="Illustration"
          ></Illustration>
        </IllustrationWrapper>
      </IllustrationContainer>
    </HeaderWrapper>
  );
}

export default Header;
