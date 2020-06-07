import { styled } from 'frontity';

const Container = styled.div`
    padding: 26px 20px 14px 20px;
    background: #FFFFFF;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    @media screen and (max-width: 991px) {
        padding: 16px 12px 14px 18px;
    }

    @media screen and (max-width: 767px) {
        min-height: 80px;
    }
`;

const Name = styled.a`
    display: block;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    color: #000000;
    transition: all .3s ease-in-out;

    &:hover {
        color: #252525;
    }
    
    @media screen and (max-width: 991px) {
        font-size: 12px;
        line-height: 18px;
    }
`;

const Link = styled.a`
    width: fit-content;
    margin-left: auto;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #F8710F;
    font-weight: 800;
    font-size: 14px;
    line-height: 22px;
    transition: all .3s ease-in-out;

    &:hover {
        color: #c75e11;
    }
`;

export {
  Container,
  Name,
  Link,
};
