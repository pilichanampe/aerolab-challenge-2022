import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { Box } from './basecomponents/Box';
import { Card } from './basecomponents/Card';
import { Text } from './basecomponents/Text';
import { Image } from './basecomponents/Image';

import { useProductsContext } from '../context/ProductsContext';
import { getProducts } from './common/getProducts';

const ADropdown = styled(Card)`
  flex-direction: row;
  justify-content: space-between;
  min-width: 256px;
  height: 48px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.n0};
  padding: 0 16px;
  padding-left: 24px;
  height: 59px;
`;

const Menu = styled(Card)`
 width: 256px;
 height: 404px;
 z-index: 10;
 background-color: ${({ theme }) => theme.colors.n0};
 box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
 display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
 flex-direction: column;
 padding: 10px 0px;
 padding-right: 2px;
 position: absolute;
 top: 67px;
`;

const MenuContent = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 2px 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    height: 15px;
    width: 6px;
  };
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.n300};
    border-radius: 2px;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  padding: 0;
`;

const Chevron = styled(Image)`
  width: 24px;
  height: 24px;
  transform: rotate(90deg);
  transition: transform .2s ease-out;
  ${({ isActive }) => isActive && css`
    transform: rotate(-90deg);
  `};
`;

const ItemList = styled.li`
  cursor: pointer;
  margin: 0;
  display: flex;
  align-items: center;
  padding-left: 24px;
  height: 51px;
  color: ${({ theme }) => theme.colors.ng00};
  font-size: ${({ theme }) => theme.fontSizes.md2};
  background: ${({ theme, isSelected }) => isSelected ? theme.colors.n200 : ''};

  &:hover {
    background: ${({ theme }) => theme.colors.n100};
  }
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

function CategoryDropdown() {
  const [chevron, setChevron] = useState('chevron-default.svg');
  const [active, setActive] = useState(false);
  const { categories }= useProductsContext();
  const { products, setProducts, allProducts } = useProductsContext()
  const [selected, setSelected] = useState('All Products');
  const dropdown = useRef();

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (dropdown.current && !dropdown.current.contains(e.target)) {
        setActive(false);
      };
    }
    document.addEventListener('click', checkIfClickedOutside);
    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    }

  }, [active]);

  const activateMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActive(!active);
    if (active) {
      setChevron('chevron-active.svg');
    } else {
      setChevron('chevron-default.svg');
    }
  }
 
  const handleFilteredCategory = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelected(e.target.id);
    const selectedTemp = e.target.id;
    if (selectedTemp === 'All Products') {
      setProducts(allProducts);
      return;
    }
    setProducts([...allProducts].filter(product => product.category === selectedTemp));
  }

  return <>
    <Wrapper ref={dropdown}>
      <ADropdown
        onClick={activateMenu}
      >   
        <Text as="span">
          {selected}
        </Text>
        <Chevron
          isActive={active}
          ml={2}
          width={32}
          height={32}
          src={`./icons/${chevron}`}
        ></Chevron>    
      </ADropdown>
      <Menu
        isOpen={active}
      >
        <MenuContent>
          <Box>
            <Box
              display="flex"
              width="100%"
              justifyContent="space-between"
              flexDirection="column"
            >
              <List>
                <ItemList
                  isSelected={selected === 'All Products'}
                  id="All Products"
                  onClick={handleFilteredCategory}
                >All Products</ItemList>
                {!categories && 'categories está vacío'}
                {products && categories &&
                  categories.map((category, index) => {
                    return (
                      <ItemList
                        isSelected={selected === category}
                        key={`category-${index}`}
                        id={category}
                        onClick={handleFilteredCategory}
                      >
                        {category}
                      </ItemList>
                    )
                  })
                }
              </List>
            </Box>
          </Box>
        </MenuContent>
      </Menu>
    </Wrapper>
  </>;
};

export default CategoryDropdown;
