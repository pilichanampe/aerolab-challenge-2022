import styled from 'styled-components';
// import { color, space, fontSize, buttonStyle } from 'styled-system'

const Button = styled.button`
   border: none;
   padding: ${props => props.theme.spaces.lg };
   font-size: ${props => props.theme.fontSizes.sm };
   font-family: inherit;  

 `

export default Button;

