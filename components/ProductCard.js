// import React from 'react';
import styled from "styled-components";
import { Card } from '../components/basecomponents/Card';
import { Text } from '../components/basecomponents/Text';
import { Button } from '../components/basecomponents/Button';
import { Box } from '../components/basecomponents/Box';
import { Image } from '../components/basecomponents/Image';
import { useState } from "react";
import { useUserContext } from '../context/UserContext';
import { postRedeem } from '../components/common/postRedeem';
import { getUser } from "./common/getUser";
import { motion } from "framer-motion";
import { useToastContext } from '../context/ToastContext';

const Container = styled(motion.div)`
  border-radius: 16px;
  width: 348px;
  margin-top: 40px;
  margin-bottom: 40px;
  margin: 10px;
  cursor: ${({ canNotBuy }) => canNotBuy ? 'arrow' : 'pointer'};
  @media only screen and (max-width: 1464px) {
    margin: 20px 8px;
  }
`;

const ProductWrapper = styled(Card)`
  background: ${({ theme }) => theme.colors.n0};
  width: 348px;
  height: 432.92px; 
  justify-content: end;
  ${Container}:hover & {
    box-shadow: ${({theme, canNotBuy}) => canNotBuy ? 'none' : `-1px 6px 32px 1px ${theme.colors.n500}`};
  }
`;

const ImageWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ProductDescription = styled(Card)`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-left: none;
  border-bottom: none;
  border-right: none;
  height: 88px;
  width: 100%;
  align-items: start;
  padding-top: 16px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
`;

const RedeemButton = styled(Button)`
  background: ${({ theme, isLoading, canNotBuy }) => isLoading ? theme.colors.sectionBg : canNotBuy ? theme.colors.n200 : theme.colors.brandDefault};
  cursor: inherit;
  ${Container}:hover & {
    box-shadow: -1px 6px 32px 1px ${({ theme }) => theme.colors.n500};    
  }
`;

const spring = {
  type: "spring",
  damping: 25,
  stiffness: 120
};

function ProductCard({ img, name, category, cost, id }) {
  const [loading, setLoading] = useState();
  const { points, setPoints, setLoading:setDropdownLoading } = useUserContext();
  const { notifications, setNotifications, addNotification, removeNotification } = useToastContext();
  
  const redeemedProduct = {
    productId: id,
  }
  
  const handleRedeem = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    setLoading(true);
    setDropdownLoading(true);
    postRedeem(redeemedProduct)
    .then(async (response) => {
      const { message } = response;
      const { points:updatedPoints } = await getUser();
      setPoints(updatedPoints);
      setNotifications(
        [
          ...notifications,
          <Text>
            <Text
              as="strong"
              color="n900"
              
            >
              { name }
            </Text>
            {` redeemed successfully`}
          </Text>
        ]
      );
      console.log(notifications);
    }).catch(error => {
      setNotifications([...notifications, `${error.message}`]);
      // alert(error.message);
    }).finally(() => {
      setLoading(false);
      setDropdownLoading(false);
    });
  }

  return (
    <Container
      width={348}
      my={40}
      canNotBuy={points < cost}
      layout
      transition={spring}
    >
      <ProductWrapper>
        <ImageWrapper>
          <Image
            alt="Product image"
            width={280}
            height={204}
            src={img}
          />
        </ImageWrapper>
        <ProductDescription>
          <Text
            as="span"
            fontSize={18}
            color="n900"
          >{ name }</Text>
          <Text
            as="span"
            uppercase
            fontSize={14}
          >{ category }</Text>
        </ProductDescription>
      </ProductWrapper>
      <RedeemButton
        onClick={handleRedeem}
        className="button"
        width="100%"
        mt={16}
        display="flex"
        justifyContent="center"
        alignItems="center"
        isLoading={loading}
        canNotBuy={points < cost}
        disabled={loading || points < cost}
        color={points < cost ? 'n600' : ''}
      >
        {loading && <span>Processing...</span>}
        {!loading &&
          <>
           <span>{points > cost ? 'Redeem' : 'You need'}</span>
            <Image
              src={points < cost ? './icons/aeropay-4.svg' : './icons/aeropay-3.svg'}
              px={2}
            ></Image>
            <span>{points > cost ? cost : cost - points}</span>
          </>
        }
      </RedeemButton>
    </Container>
  );
};

ProductCard.defaultProps = {
  name: 'Nombre del producto',
  category: 'Categoría',
  img: './favicon.svg',
}; 

export default ProductCard;
