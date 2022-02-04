import styled from "styled-components";
import { space } from 'styled-system';
import { Box } from "../basecomponents/Box";

export const Card = styled(Box)`
  border: 1px solid ${({theme}) => theme.colors.n300};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${space};
`;