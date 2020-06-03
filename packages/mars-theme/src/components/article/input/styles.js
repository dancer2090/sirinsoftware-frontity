import { styled } from 'frontity';

const Field = styled.input`
    width: 100%;
    height: 36px;
    font-size: 14px;
    line-height: 22px;
    color: #000000;
    padding: 0 8px;
    box-sizing: border-box;
    border: none;
    &::placeholder {
        font-size: 14px;
        line-height: 22px;
        color: #8E8E8E;
    }

    &:focus {
        border: none;
        outline: none;
    }
`;

export {
    Field
}