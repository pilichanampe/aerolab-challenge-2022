import React from 'react';
import styled from 'styled-components';
import { Box } from './basecomponents/Box';
import ProductCard from './ProductCard';
styled

const Wrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 1464px) {
    justify-content: center;
  }
`;

export default function ProductsList({ products }) {
  return (
    <Wrapper>
      {products.map(({ _id, img, name, category, cost }) => (
        <ProductCard
          key={_id}
          img={img.url}
          name={name}
          category={category}
          cost={cost}        
        ></ProductCard>
      ))}
    </Wrapper>
  );
};