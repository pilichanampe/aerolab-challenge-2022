import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ProductsProvider, useProductsContext } from '../context/ProductsContext';
import { useUserContext } from '../context/UserContext';
import { Box } from './basecomponents/Box';
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

export default function ProductsList() {
  // const { filteredProducts, setFilteredProducts } = useProductsContext();
  const { products } = useUserContext();
  
  useEffect(() => {
    console.log('products en productslist', products);
  
  }, []);
  

  return (
    <ProductsProvider>
      <ProductsSortBy products={products}></ProductsSortBy>
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
    </ProductsProvider>
  );
};