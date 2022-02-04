
import styled from "styled-components";
import { color, space } from "styled-system";

export const H1 = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 700;
  letter-spacing: -0.02em;
  ${color};
  ${space};
`;

export const H2 = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 700;
  letter-spacing: -0.02em;
  ${color};
  ${space};
`;

export const H3 = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 700;
  letter-spacing: -0.02em;
  ${color};
  ${space};
`;

export const Subtitle = styled.h4`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 500;
  ${color};
  ${space};
`;