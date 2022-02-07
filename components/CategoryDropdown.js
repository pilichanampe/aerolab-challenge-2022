import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useUserContext } from '../context/UserContext';
import { Box } from './basecomponents/Box';
import { Card } from './basecomponents/Card';
import { Button} from './basecomponents/Button';
import { Image } from './basecomponents/Image';
import { postPoints } from '../components/common/postPoints';
import ThreeDotsWave from './ThreeDotsWave';
import Aerocard from '../components/Aerocard';
import { useProductsContext } from '../context/ProductsContext';

const ADropdown = styled(Card)`
  flex-direction: row;
  justify-content: space-between;
  min-width: 172px;
  height: 48px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.n0};
  padding: 0 16px;
`;

const LoadingDots = styled(ThreeDotsWave)`
  width: 100%;
`;

const AddPointsButton = styled(Button)`
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  background: ${({ theme, isLoading }) => isLoading ? theme.colors.sectionBg : theme.colors.brandDefault};
`;

const PointsButton = styled(Button)`
  width: 85.33px;
  height: 35px;
  border-radius: 12px;
  background: ${({ isSelected, theme }) => isSelected && theme.colors.brandDefault};
  -webkit-background-clip: ${({ isSelected }) => !isSelected && 'text'};
  -webkit-text-fill-color: ${({ isSelected }) => !isSelected && 'transparent'};
`;

const Menu = styled(Card)`
 width: 312px;
 height: 404px;
 margin-top: 8px;
 z-index: 10;
 background-color: ${({ theme }) => theme.colors.n0};
 box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
 position: relative;
 display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
 flex-direction: column;
`;

const MenuTitle = styled(Card)`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
      border-left: none;
  border-top: none;
  border-right: none;
  height: 58px;
  width: 100%;
  align-items: start;
  padding-top: 16px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
`;

const MenuContent = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
`;

const Chevron = styled(Image)`
  transform: rotate(90deg);
  width: 24px;
  height: 24px;
`;

const NumberWrapper = styled(Box)`
  background: ${({ theme }) => theme.colors.brandLight};
  border-radius: 12px;
`;

const Points = styled.span`
  background: ${({ theme }) => theme.colors.brandDefault};
  -webkit-background-clip: ${({ isSelected }) => !isSelected && 'text'};
  -webkit-text-fill-color: ${({ isSelected }) => !isSelected && 'transparent'};
`;

function CategoryDropdown({products}) {
  const { name, setName, points, setPoints, loading, setLoading } = useUserContext();
  // Can't have the products in useProductsContext updated all the time... Don't know why it behaves like this.
  // const { products } = useProductsContext;
  const [chevron, setChevron] = useState('chevron-default.svg');
  const [active, setActive] = useState(false);
  const [categories, setCategories] = useState();
  const [category, setCategory] = useState();

  const getCategories = () => {
    const filters = products.map(product => product.category);
    setCategories([... new Set(filters)]);
  }
  
  useEffect(() => {
    getCategories();
    return categories;
  }, []);
  
  console.log(categories);
  const activateMenu = (e) => {
    console.log(categories);
    e.preventDefault();
    setActive(!active);
    if (active) {
      setChevron('chevron-active.svg');
    } else {
      setChevron('chevron-default.svg');
    }
  }
  
  const handleSelected = (e) => {
    e.preventDefault();
    setPointsSelected(parseInt(e.target.innerText));
  }
  
  const handleAddPoints = async () => {
    setLoading(true);
    postPoints(pointsSelected)
    .then(response => {
      setPoints(response['New Points']);
    }).catch(error => {
      alert(error.message);
    }).finally(() => {
      setLoading(false);
    });
  }

  return <>
    <Wrapper>
      <ADropdown      
        onClick={activateMenu}
      >
        <Image
          mr={2}
          width={32}
          height={32}
          src='./icons/favicon.svg'
        ></Image>    
        <Points>
          {loading && <LoadingDots></LoadingDots>}
          {!loading && points}
        </Points>
        <Chevron
          ml={2}
          width={32}
          height={32}
          src={`./icons/${chevron}`}
        ></Chevron>    
      </ADropdown>
      <Menu
        isOpen={active}
      >
        <MenuTitle>{category}</MenuTitle>
        <MenuContent>
          <Box>
            {categories && 
              <Box
                display="flex"
                width="100%"
                justifyContent="space-between"
                flexDirection="column"
              >
                {
                  categories.map(category => {
                    return (
                      <ul>
                        <li>{category}</li>
                      </ul>
                    )
                  })
                }

              </Box>
            }
          </Box>
        </MenuContent>
      </Menu>
    </Wrapper>
  </>;
};

export default CategoryDropdown;
