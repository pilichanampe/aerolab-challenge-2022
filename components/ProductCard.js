// import React from 'react';
import styled from "styled-components";
import { Card } from '../components/basecomponents/Card';
import { Text } from '../components/basecomponents/Text';
import { Button } from '../components/basecomponents/Button';
import { Box } from '../components/basecomponents/Box';
import { Image } from '../components/basecomponents/Image';

const ProductWrapper = styled(Card)`
  width: 348px;
  height: 432.92px; 
  justify-content: end;
`;

const ImageWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ProductDescription = styled(ProductWrapper)`
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

function ProductCard({ img, name, category }) {
  return (
    <Box width={348}>
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
      <Button
        width="100%"
        mt={16}
        backgroundImage="aerolab"
      >Soy el botón</Button>
    </Box>
  );
};

ProductCard.defaultProps = {
  name: 'Nombre del producto',
  category: 'Categoría',
  img: './favicon.svg',
}; 

export default ProductCard;
