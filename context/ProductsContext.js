import { createContext, useContext, useState } from 'react';

const ProductsContext = createContext();

export function ProductsProvider({ children }) { 
  // const [productId, setProductId] = useState();
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();
  // const [categorySelected, setCategorySelected] = useState();
  // const [filteredProducts, setFilteredProducts] = useState();

  
  return (
    <ProductsContext.Provider
      value={{
        // productId,
        // setProductId,
        products,
        setProducts,
        categories,
        setCategories, 
        // categorySelected,
        // setCategorySelected,
        // filteredProducts,
        // setFilteredProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export function useProductsContext() {
  return useContext(ProductsContext);
};