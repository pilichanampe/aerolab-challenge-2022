import React from 'react';
import styled from 'styled-components';
import { color, space, fontSize, buttonStyle } from 'styled-system'

const BaseButton = styled.button`
   border: 0;
   outline: 0;
   ${color}
   ${space}
   ${fontSize}
   ${buttonStyle}
 `
BaseButton.defaultProps = {
  variant: 'primary',
  backgroundColor: 'black',
  size: 'large'
}

function Button({ className, children, buttonProps }) {
  return (
    <BaseButton
      className={className}
      {...buttonProps}
      bg="black"
    >
      {children}
    </BaseButton>
  )
}

export default Button;

