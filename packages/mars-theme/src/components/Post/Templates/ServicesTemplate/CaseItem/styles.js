import { styled, css } from 'frontity';

export const CaseItemBlock = styled.div`
  min-height: 470px;
  width: 100%;
  display: flex;
  flex-direction: column;

  &:nth-child(even) {
    margin-top: 43px;
  }

  @media screen and (max-width: 992px) {
    min-height: 354px;

    &:nth-child(even) {
      margin-top: 40px;
    }
  }

  @media screen and (max-width: 767px) {
    min-height: 300px;

    &:nth-child(even) {
      margin-top: 0;
    }
  }
`;

export const CaseLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 46px;
  background: linear-gradient(279.98deg, #FFB03A 3.6%, #FF9233 97.69%);
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #FFFFFF;
  font-family: 'Montserrat';
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  position: relative;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    transition: all .3s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    &:after {
      opacity: .05;
    }
  }
`;