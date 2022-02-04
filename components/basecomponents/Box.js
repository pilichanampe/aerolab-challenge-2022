import styled from "styled-components";
import { compose, flex, color, space, layout, background, border, position } from "styled-system";

export const Box = styled('div')(
  compose(
    flex,
    color,
    space,
    layout,
    background,
    border,
    position,
  ),
);