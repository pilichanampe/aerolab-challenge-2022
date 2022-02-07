import styled from "styled-components";
import { Button } from "./basecomponents/Button";
import { Text } from "./basecomponents/Text";
import { Box } from "./basecomponents/Box";
import { useProductsContext } from "../context/ProductsContext";
import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";

const FilterButton = styled(Button)`
  width: auto;
  padding: 0 24px;
  height: 43px;
  border-radius: 12px;
  background: ${({ isSelected, theme }) => isSelected && theme.colors.brandDefault};
  -webkit-background-clip: ${({ isSelected }) => !isSelected && 'text'};
  -webkit-text-fill-color: ${({ isSelected }) => !isSelected && 'transparent'};
`;

const ButtonWrapper = styled(Box)`
  background: ${({ theme }) => theme.colors.brandLight};
  border-radius: 12px;
`;

function ProductsSortBy() {
  const filters = ['Lowest Price', 'Highest Price']; // Coudn't do Most Recent to work T.T  D:
  const { filteredProducts, setFilteredProducts } = useProductsContext();
  const [selected, setSelected] = useState();
  const [lastSelected, setLastSelected] = useState();
  const [productsNoSort, setProductsNoSort] = useState();
  const { products, setProducts } = useUserContext();
  
  useEffect(() => {
    setProductsNoSort(products.slice());
  
  }, []);
  

  const handleSort = (e) => {
    setSelected(e.target.name);

    // Here I'm not using 'selected' instead of e.target.name because it arrives one click later... But I keep it because I use it for the color changes.
    if (e.target.name === lastSelected) {
      return;
    }
    if (e.target.name === 'Lowest Price') {
      setProducts([...products].sort((a, b) => a.cost - b.cost));
    }
    if (e.target.name === 'Highest Price') {
      setProducts([...products].sort((a, b) => b.cost - a.cost));
    }
    // if (e.target.name === 'Most Recent') {
    //   // coudn't show the first order. ::sadfaceforever::
    // }
    setLastSelected(e.target.name);
  }

  return (
    <Box
      display="flex"
      width="auto"
      height="100"
    >
      <Text>Sort by:</Text>
      {filters.map(filter => {
        return (
          <ButtonWrapper key={filter}>
            <FilterButton
              name={filter}
              onClick={handleSort}
              isSelected={filter === selected }
              fontSize={18}
              py="12"
            >{filter}</FilterButton>
          </ButtonWrapper>
        )
      })}
    </Box>  
  );
}

export default ProductsSortBy;

