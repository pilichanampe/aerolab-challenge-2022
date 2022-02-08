import React from 'react';
import styled from 'styled-components';
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
`;

const CardInside = styled(CardContainer)`
  width: 100%;
  padding: 0px;
  border-radius: 24px;
`;

const CardIllustration = styled(CardInside)`
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border: none; 
  position: relative;
  background: ${({ theme }) => theme.colors.sectionBg};
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
`;

const TitleWrapper = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
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
`;

const Description = styled(Text)`
  width: 372px;

`;

function WalkThroughCard({ img, title, description, icon, styling }) {
  return (
    <CardContainer
      p="12px"
      styling={styling}
    >
      <CardInside
        width="5px"
        height="100%"
      >
        <CardIllustration>
          <Illustration src={img}></Illustration> 
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
