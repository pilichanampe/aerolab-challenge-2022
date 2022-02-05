// import React from 'react';
import styled from "styled-components";
import { Card } from '../components/basecomponents/Card';
import { Text } from '../components/basecomponents/Text';
import { Button } from '../components/basecomponents/Button';
import { Box } from '../components/basecomponents/Box';
import { Image } from '../components/basecomponents/Image';
import { useState } from "react";

const Container = styled(Box)`
  border-radius: 16px;
  @media only screen and (max-width: 1464px) {
    margin: 20px 8px;
  }
`;

const ProductWrapper = styled(Card)`
  width: 348px;
  height: 432.92px; 
  justify-content: end;
  ${Container}:hover & {
    box-shadow: -1px 6px 32px 1px ${({ theme }) => theme.colors.n500};
  }
`;

const ImageWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ProductDescription = styled(Card)`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-left: none;
  border-bottom: none;
  border-right: none;
  height: 88px;
  width: 100%;
  align-items: start;
  padding-top: 16px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
`;

const RedeemButton = styled(Button)`
  ${Container}:hover & {
    box-shadow: -1px 6px 32px 1px ${({ theme }) => theme.colors.n500};
  }
`

function ProductCard({ img, name, category, cost }) {
  const [canBuy, setCanBuy] = useState(true);

  return (
    <Container
      width={348}
      my={40}
    >
      <ProductWrapper>
        <ImageWrapper>
          <Image
            width={280}
            height={204}
            src={img}
          />
        </ImageWrapper>
        <ProductDescription>
          <Text
            as="span"
            fontSize={18}
            color="n900"
          >{ name }</Text>
          <Text
            as="span"
            uppercase
            fontSize={14}
          >{ category }</Text>
        </ProductDescription>
      </ProductWrapper>
      <RedeemButton
        className="button"
        width="100%"
        mt={16}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <span>{canBuy ? 'Redeem' : 'You need'}</span>
        <Image
          mr={2}
          ml={2}
          width={24}
          height={24}
          src='./icons/favicon.svg'
        ></Image>
        <span>{ cost }</span>    
      </RedeemButton>
    </Container>
  );
};

ProductCard.defaultProps = {
  name: 'Nombre del producto',
  category: 'Categoría',
  img: './favicon.svg',
}; 

export default ProductCard;
