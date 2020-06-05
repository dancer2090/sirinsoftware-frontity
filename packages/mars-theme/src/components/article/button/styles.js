import { styled } from 'frontity';

const Container = styled.button`
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
}
`;

export {
  Container
};
