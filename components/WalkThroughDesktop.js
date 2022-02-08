import React from 'react';
import styled from 'styled-components';
import { Box } from './basecomponents/Box';
import { Grid } from './basecomponents/Grid';
import WalkThroughCard from './WalkThroughCard';

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 721px;
  margin-top: 128px;
`;

const CardContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1464px;
  height: 721px;
  position: relative;
`;

const Background = styled(Container)`
  height: 528px;
  background: ${({ theme }) => theme.colors.sectionBg};
`;

function WalkThrough() {
  const cards = [
    {
      title: '1 - BROWSE',
      description: 'Browse our tech catalog with more than 20 top tech products',
      img: './illustrations/walkthroug-1-desktop.png',
      icon: './icons/walkthrough-1.svg',
      styling: 'transform: rotate(-3deg); position: absolute; left: 0px',
    },
    {
      title: '2 - CHOOSE ',
      description: 'Exchange your hard earned AeroPoints fot the item you want',
      img: './illustrations/walkthroug-2-desktop.png',
      icon: './icons/walkthrough-2.svg',
      styling: 'z-index: 1; position: absolute; bottom: 60px',
    },
    {
      title: '3 - ENJOY!',
      description: "All done, you can relax! We'll take care of delivery of your tech item!",
      img: './illustrations/walkthroug-3-desktop.png',
      icon: './icons/walkthrough-3.svg',
      styling: 'transform: rotate(3deg); z-index: 1; position: absolute; right: 0px ',
    },
  ];

  return (
    <Container
      as="section"
      position="relative"
      maxWidth="1464"
    >
      <Background>
        <CardContainer>
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
        </CardContainer>

      </Background>
    </Container>
  );
}

export default WalkThrough;
