import React from 'react';
import { styled, css } from "frontity";
import  {
  SIZE_DESCTOP_LARGE,
  SIZE_DESCTOP_MEDIUM_2,
  SIZE_DESCTOP_MEDIUM_1,
  SIZE_DESCTOP_SMALL,
  getPxSize,
} from '../../const/responsive';

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  
  width: 180px;
  height: 40px;
  background: linear-gradient(274.43deg, #FFB03A 3.6% , #FF9233 97.69%);
  font-style: normal;
  font-weight: 800;
  font-size: 14 px;
  color: #FFFFFF;
  outline: none;
  
  
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_2)}) {
    
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
   
  }

  ${props => props.size === 'large' && css`
    
    @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_2)}) {

    }
    @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
      
    }
  `}

  &:hover {
    background: #f57200;
  }
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
