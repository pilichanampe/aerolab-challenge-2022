import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useProductsContext } from '../context/ProductsContext';
import { useUserContext } from '../context/UserContext';
import { Box } from './basecomponents/Box';
import { Text } from './basecomponents/Text';
import { Title2 } from './basecomponents/Title';
import { Grid } from './basecomponents/Grid';
import CategoryDropdown from './CategoryDropdown';
import ProductCard from './ProductCard';
import ProductsSortBy from './ProductSortBy';

const Wrapper = styled(Grid)`
  margin-top: 200px;
  padding-top: 200px;
  max-width: 1494px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: start;

  @media only screen and (max-width: 1024px) {
    margin-top: 0px;
    padding-top: 120px;
  }
`;

const Title = styled(Title2)`
  display: flex;

  @media only screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSizes.lg2};
  }
 `;

const Span = styled(Title2)`
  color: #176FEB;
  margin-right: 16px;
  margin-bottom: 42px;
  padding-left: 10px;

  @media only screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSizes.lg2}
  }
`;

const FiltersHeader = styled(Box)`
  padding: 10px;
  padding-top: 0px;
  display: flex;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 1464px) {
    flex-direction: column;
    align-items: start;
  }

  
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }


`;

const Divider = styled(Box)`
  border-left: 2px solid ${({ theme }) => theme.colors.n300};
  height: 59px;

  @media only screen and (max-width: 1464px) {
    display: none;
  }
`;

const ProductsWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: auto;
`;

const FilterText = styled(Text)`
  @media only screen and (max-width: 1464px) {
    display: none;
  }
`;

export default function ProductsList() {
  const { products } = useProductsContext();
  const { categories } = useProductsContext();
  
  return (
    <Wrapper id="productsSection">
      <Title as="h2">
        <Span>Tech</Span> products
      </Title>
      <FiltersHeader>
        <FilterText mr={3}>Filter by:</FilterText>
        <CategoryDropdown></CategoryDropdown>
        <Divider mx="40px" vertical height="100%"></Divider>
        <ProductsSortBy products={products}></ProductsSortBy>
      </FiltersHeader>
      <ProductsWrapper>
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
      </ProductsWrapper>
    </Wrapper>
  );
};