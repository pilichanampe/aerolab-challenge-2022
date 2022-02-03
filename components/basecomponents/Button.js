import styled from 'styled-components';
import { color, space, fontSize, buttonStyle } from 'styled-system';

export const Button = styled.button`
  background: ${({theme, bg}) => bg ? bg : theme.colors.brandDefault };
  color: ${props => props.theme.colors.n0};
  border: none;
  border-radius: 16px;
  height: 59px;
  width: 320px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  line-height: 150%;
  letter-spacing: 0%;
  font-size: ${props => props.theme.fontSizes.md2};
  ${color};
  ${space};
  ${fontSize};
  ${buttonStyle};
`;
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */