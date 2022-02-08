import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useUserContext } from '../context/UserContext';
import { Box } from './basecomponents/Box';
import { Card } from './basecomponents/Card';
import { Button} from './basecomponents/Button';
import { Image } from './basecomponents/Image';
import { postPoints } from '../components/common/postPoints';
import ThreeDotsWave from './ThreeDotsWave';
import Aerocard from '../components/Aerocard';

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
 position: absolute;
 top: 50px;
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
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: end;
  position: relative;
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

const NumberWrapper = styled(Box)`
  background: ${({ theme }) => theme.colors.brandLight};
  border-radius: 12px;
`;

const Points = styled.span`
  background: ${({ theme }) => theme.colors.brandDefault};
  -webkit-background-clip: ${({ isSelected }) => !isSelected && 'text'};
  -webkit-text-fill-color: ${({ isSelected }) => !isSelected && 'transparent'};
`;

function AeropayDropdown() {
  const { name, points, setPoints, loading, setLoading } = useUserContext();
  const [chevron, setChevron] = useState('chevron-default.svg');
  const [active, setActive] = useState(false);
  const [pointsSelected, setPointsSelected] = useState(1000);
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
  
  const pointsToAdd = [1000, 5000, 7500];

  const activateMenu = (e) => {
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
  
  const handleAddPoints = async (e) => {
    e.stopPropagation();
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
    <Wrapper
      ref={dropdown}
      title="Buy more points"
    >
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
        <MenuTitle>Add Balance</MenuTitle>
        <MenuContent>
          <Box>
            <Aerocard name={name}></Aerocard>
          </Box>
          <Box>
            <Box
              display="flex"
              width="100%"
              justifyContent="space-between"
            >
              {
                pointsToAdd.map(selector => {
                  return (
                    <NumberWrapper
                      key={selector}
                    >
                      <PointsButton
                        isSelected={pointsSelected === selector}
                        onClick={handleSelected}
                      >
                        {selector}
                      </PointsButton>
                    </NumberWrapper>
                  )
                })
              }

            </Box>
            <AddPointsButton
              onClick={handleAddPoints}
              isLoading={loading}
              width="100%"
              mt={24}
              height={51}
              display="flex"
              justifyContent="center"
              alignItems="center"
              disabled={loading}
            >
              {loading && <span>Processing...</span>}
              {!loading && 
                <Box>
                <Image
                  src="./icons/aeropay-3.svg"
                  pr={2}
                ></Image>
                <span>Add Points</span>
                </Box>              
              }
            </AddPointsButton>
          </Box>
        </MenuContent>
      </Menu>
    </Wrapper>
  </>;
};

export default AeropayDropdown;
