/* eslint-disable import/prefer-default-export */
import { styled } from 'frontity';

export const Field = styled.input`
    width: 100%;
    height: 36px;
    font-size: 14px;
    line-height: 22px;
    color: #000000;
    padding: 0 8px;
    box-sizing: border-box;
    border: none;
    font-family: 'Open Sans';
    box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.2);
    transition: all .3s ease-in-out;
    &::placeholder {
        font-size: 14px;
        line-height: 22px;
        color: #8E8E8E;
    }

    &:focus {
        border: none;
        outline: none;
        box-shadow: none;
    }
`;
