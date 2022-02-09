import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { Box } from './basecomponents/Box';
import { Card } from './basecomponents/Card';
import { Image } from './basecomponents/Image';
import { Text } from './basecomponents/Text';
import { Title3 } from './basecomponents/Title';

const CardContainer = styled(Card)`
  width: 532px;
  height: 676px;
  background: ${({ theme }) => theme.colors.n0};
  padding: 12px;
  ${({ styling }) => styling};
  border-radius: 32px;
  box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
  
  @media only screen and (max-width: 1464px) {
    background: rgba(255, 255, 255, 0.7);
    width: 323px;
    height: 477px;
    transform: none;
    bottom: 0;
    position: static;
  }

  @media only screen and (max-width: 1024px) {
    width: 335px;
    height: 408px;
    margin-bottom: 24px;
  }
`;

const CardInside = styled(CardContainer)`
  width: 100%;
  padding: 0px;
  border-radius: 24px;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 0px;
  }
`;

const CardIllustration = styled(CardInside)`
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border: none; 
  position: relative;
  background: ${({ theme }) => theme.colors.sectionBg};
  ${color};
`;

const Illustration = styled(Image)`
  object-fit: contain;
  width: inherit;
  position: absolute;
`;
const DescriptionCard = styled(CardInside)`
  width: 100%;
  height: 154px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 0;
  align-items: start;
  justify-content: start;
  padding: 24px;
  padding-top: 16px;
  background: ${({ theme }) => theme.colors.n0};
  z-index: 1;
`;

const Title = styled(Title3)`
  background: ${({ theme }) => theme.colors.brandDefault};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media only screen and (max-width: 1464px) {
    font-size: ${({ theme }) => theme.fontSizes.md1};
  }
`;

const TitleWrapper = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  @media only screen and (max-width: 1464px) {
    /* margin-bottom: 0; */
  }
`;

const IconWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.brandLight};
  margin-right: 16px;

  @media only screen and (max-width: 1464px) {
    height: 40px;
    width: 40px;
  }
`;

const Description = styled(Text)`
  width: 372px;
  @media only screen and (max-width: 1464px) {
    overflow-wrap: break-word;
    width: auto;
    font-size: ${({ theme}) => theme.fontSizes.sm1};
  }

`;

function WalkThroughCard({ img, title, description, icon, styling }) {
  return (
    <CardContainer
      p="12px"
      styling={styling}
      mx="4px"
    >
      <CardInside
        width="5px"
        height="100%"
      >
        <CardIllustration>
          <CardIllustration bg="n0">
            <Illustration src={img}></Illustration> 
          </CardIllustration>
        </CardIllustration>
          <DescriptionCard>
            <TitleWrapper>
              <IconWrapper>
                <Image src={icon}></Image>
              </IconWrapper>
              <Title>{ title }</Title>
            </TitleWrapper>
            <Description>{ description }</Description>
          </DescriptionCard>
      </CardInside>
    </CardContainer>
  )
}

export default WalkThroughCard;
