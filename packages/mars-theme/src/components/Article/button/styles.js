/* eslint-disable import/prefer-default-export */
import { styled } from 'frontity';

export const Container = styled.button`
    height: 
    ${(props) => (props.size === 'large'
    ? '50px'
    : '36px')
};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 32px;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
    border: none;
    background: 
    ${(props) => (props.color === 'yellow'
    ? 'linear-gradient(277.09deg, #FFB03A 3.6%, #FF9233 97.69%);'
    : 'linear-gradient(272.76deg, #3FA54A 3.6%, #216628 97.69%);')
};
    outline: none;
    transition: background .3s;
    transition-timing-function: ease-in-out;
    &:hover {
      outline: none;
      cursor: pointer;
      background: ${(props) => (props.color === 'yellow'
    ? 'linear-gradient(277.09deg,#e29b32 3.6%,#e0802c 97.69%);'
    : 'linear-gradient(272.76deg,#3b9a45 3.6%,#184a1d 97.69%);')
};
    }

    &:focus, &:active {
      outline: none;
    }
`;
