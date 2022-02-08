import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useProductsContext } from '../context/ProductsContext';
import { useUserContext } from '../context/UserContext';
import { Box } from './basecomponents/Box';
import { Text } from './basecomponents/Text';
import CategoryDropdown from './CategoryDropdown';
import ProductCard from './ProductCard';
import ProductsSortBy from './ProductSortBy';

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

const FiltersHeader = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Divider = styled(Box)`
  border-left: 2px solid ${({ theme }) => theme.colors.n300};
  height: 59px;
`;

export default function ProductsList() {
  const { products } = useProductsContext();
  const { categories } = useProductsContext();
  
  return (
    <Wrapper id="productsSection" pt="100px">
      <FiltersHeader>
        <Text mr={3}>Filter by:</Text>
        <CategoryDropdown></CategoryDropdown>
        <Divider mx="40px" vertical height="100%"></Divider>
        <ProductsSortBy products={products} border="2px solid blue"></ProductsSortBy>
      </FiltersHeader>
      <Wrapper>
        {products.map(({ _id, name, cost, category, img}) => {
          return (
            <ProductCard
              key={_id}
              img={img.url}
              name={name}
              id={_id}
              category={category}
              cost={cost}
            ></ProductCard>            
          )
        })}
      </Wrapper>
    </Wrapper>
  );
};