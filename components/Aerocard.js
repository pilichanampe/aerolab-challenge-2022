import styled from "styled-components";
import { Box } from "./basecomponents/Box";
import { Text } from "./basecomponents/Text";
import { Image } from "./basecomponents/Image";
import { useUserContext } from "../context/UserContext";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 264px;
  height: 148px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.n900};
  color: ${({ theme }) => theme.colors.n0};
  padding: 16px;
  background-image: url('./wave-pattern-mask.svg');
  background-position: 50% 30%;
  background-repeat: no-repeat;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
`;

export default function Aerocard({name}) {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Text fontSize="md2">Aerocard</Text>
        <Image src="./icons/aeropay-2.svg"></Image>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
      >
        <Text fontSize="sm2">{ name }</Text>
        <Text fontSize="sm2">07/23</Text>
      </Box>
    </Container>
  )
};

Aerocard.defaultProps = {
  userName: 'User name',
  expiredDate: '07/23',
}; 


