import React from 'react';
import styled from 'styled-components';
import { Box } from './basecomponents/Box';
import { Grid } from './basecomponents/Grid';
import { Image } from './basecomponents/Image';
import WalkThroughCard from './WalkThroughCard';

const ElementsWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  height: 780px;

  @media only screen and (max-width: 1024px) {
    height: auto;
  }

  @media only screen and (max-width: 1464px) {
    height: auto;
    justify-content: end;
  }
`;

const CardsContainer = styled(Grid)`
  max-width: 1464px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
  
  @media only screen and (max-width: 1464px) {
    margin-bottom: 32px;

  }
`;

const Illustration = styled(Image)`
  width: 580px;
  margin-bottom: -80px;
  display: none;
  @media only screen and (max-width: 1464px) {
    display: flex;
  }
`;

const BackgroundContainer = styled(Box)`
  width: 100%;
  height: 528px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  justify-content: end;
  background: ${({ theme }) => theme.colors.sectionBg};
  z-index: -1;
  
  @media only screen and (max-width: 1024px) {
    height: 1716px !important;
  }

  @media only screen and (max-width: 1464px) {
    height: 656px;
  }
`;

function WalkThrough() {
  const cards = [
    {
      title: '1 - BROWSE',
      description: 'Browse our tech catalog with more than 20 top tech products',
      img: './illustrations/walkthroug-1-desktop.png',
      icon: './icons/walkthrough-1.svg',
      styling: 'transform: rotate(-3deg); position: absolute; left: 0px; bottom: -50px;',
    },
    {
      title: '2 - CHOOSE ',
      description: 'Exchange your hard earned AeroPoints fot the item you want',
      img: './illustrations/walkthroug-2-desktop.png',
      icon: './icons/walkthrough-2.svg',
      styling: 'z-index: 1; bottom: 60px;',
    },
    {
      title: '3 - ENJOY!',
      description: "All done, you can relax! We'll take care of delivery of your tech item!",
      img: './illustrations/walkthroug-3-desktop.png',
      icon: './icons/walkthrough-3.svg',
      styling: 'transform: rotate(3deg); z-index: 1; position: absolute; right: 0px; bottom: -50px',
    },
  ];

  return (
    <ElementsWrapper as="section">
      <Illustration
        src="./illustrations/hero-responsive.png"
        alt="Illustration"
      ></Illustration>
      <CardsContainer>
        {cards.map(({ img, title, description, icon, styling }, index) => {
          return (
            <WalkThroughCard
              key={`wt-${index}`}
              img={img}
              title={title}
              description={description}
              icon={icon}
              styling={styling}
            ></WalkThroughCard>
          )
        })}
      </CardsContainer>
      <BackgroundContainer></BackgroundContainer>
    </ElementsWrapper>
  );
}

export default WalkThrough;
