import styled from 'styled-components';
import { color, space, fontSize, buttonStyle, layout, background, flexbox, typography } from 'styled-system';

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
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  ${color};
  ${space};
  ${fontSize};
  ${buttonStyle};
  ${layout};
  ${background};
  ${flexbox};
  ${typography};
`;