import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useProductsContext } from '../context/ProductsContext';
import { useUserContext } from '../context/UserContext';
import { Box } from './basecomponents/Box';
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
  border: 2px solid red;
`;

export default function ProductsList() {
  // const { filteredProducts, setFilteredProducts } = useProductsContext();
  const { products } = useProductsContext();
  const { categories } = useProductsContext();
  
  useEffect(() => {
    console.log('products en productslist', products);
    console.log('categories en productslist', categories);
  
  }, []);
  

  return (
    <section>
      <FiltersHeader>
        <CategoryDropdown products={products}></CategoryDropdown>
        <ProductsSortBy products={products}></ProductsSortBy>
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
    </section>
  );
};