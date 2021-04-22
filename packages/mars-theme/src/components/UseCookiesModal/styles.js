import { styled } from 'frontity';

export const Container = styled.div`
  width: 100%;
  min-height: 116px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0,0,0,.85);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  transform: translateY(100%);
  opacity: 0;
  transition-delay: .3s;
  transition: all .3s ease-in-out;

  ${({active}) => (
    active
    ? 'transform: none; opacity: 1;'
    : null
  )}

  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }
`;

export const Content = styled.div`
  max-width: 75%;

  a,
  p {
    font-size: 14px;
    line-height: 20px;
  }

  a {
    color: #FFB03A;
    transition: all .3s;

    &:hover {
      color: #FF9233;
    }
  }

  p {
    color: white;
    margin: 0;
  }

  @media screen and (max-width: 992px) {
    margin-bottom: 15px;
    max-width: 100%;

    a,
    p {
      font-size: 14px;
      line-height: 22px;
    }
  }
`;

export const Button = styled.button`
  height: 40px;
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 0 20px;
  background: linear-gradient(274.43deg,#FFB03A 3.6%,#FF9233 97.69%);
  position: relative;
  color: white;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 1);
    opacity: 0;
    pointer-events: none;
    transition: all .3s ease-in-out;
  }

  &:hover {
    &:before {
      opacity: .1;
    }
  }

  &:active {
    outline: none;
  }
`;