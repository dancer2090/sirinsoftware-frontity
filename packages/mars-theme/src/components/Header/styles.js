import { styled, css } from 'frontity';

export const HeadBlock = styled.div`
  width: 100%;
  position: fixed;
  z-index: 10;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  background-color: #FFFFFF;

  ${props => props.isMenu && css`
    height: 100%;
    overflow: auto;
  `}
`;

export const Header = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  width: 100%;
  height: 76px;
  background-color: #FFFFFF;
  margin: 0 auto;
  top: 0;
  max-width: 960px;
  @media(max-width: 700px) {
    padding: 0px;
    height: 66px;
  }
  @media(max-width: 320px) {
    padding: 0px;
    height: 46px;
  }
  ul {
    li {
      list-style-type: none;
      a {
        text-decoration: none;
        color: #222222;
        font-weight: 500;
        transition: all 0.3s ease-in-out;
        &:hover {
          color: #FF8D23;
        }
      }
    }
  }
`;
export const SubMenu = styled.ul`
  display: none;
  position: absolute;
  top: 76px;
  background-color: white;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  margin: 0;

  & > li {
    font-weight: 400;
    font-size: 14px;
    padding: 5px 0;
    text-transform: capitalize;
    & > a {

    }
  }
`;
export const Menu = styled.ul`

  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  
  @media(max-width: 1000px) {
    display: ${props => props.isMenu ? 'block' : 'none'};
  }
  
  & > li {
    padding-left: 14px;
    padding-right: 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;

    & > a {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      transition: all 0.3s ease-in-out;

      ${props => props.isMenu && css`
        padding: 12px 5px;

        &:hover {
          color: #FF8D23;
        }
      `}
    }

    &:hover {
      & > ul {
        display: block;
        @media (max-width: 1000px) {
          display: none;
        }
      }
    }
  }
  /* .menu ul li {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
  } */
  /* .menu ul {
    display: none;
    position: absolute;
  }
  .menu li:hover ul {
    display: block;
  }
  .menu li:hover li {
    display: block;
    text-transform: capitalize;
    padding-bottom: 10px;
    padding-top: 10px;
    line-height: 27px;
    font-size: 14px;
    color: #77716d;
    font-weight: 400;
  }
  .sub-menu li {
    margin-left:-30px;
    margin-right: 10px;
    margin-top: -5px;
    margin-bottom: -5px;
  }
  .sub-menu {
    margin-top: 0px;
    display: none;
    position: absolute;
    margin-left: -10px;
    width: 157 px;
    background: #fff;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, .25);
    z-index: 5;
    text-align: left;
  } */
`;


export const Mobilemenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  min-width: 40px;
  justify-content: center;
  @media(min-width: 1000px) {
    display: none;
  }
`;

export const Logo = styled.div`
  height: 100%;
  width: 170px;
  margin-left: 10px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  
  @media(max-width: 1000px) {
    margin-right: 0px;
    margin-left: 200px;
  }
  @media(max-width: 700px) {
    margin-right: 0px;
    margin-left: 0px;
  }
  @media(max-width: 320px) {
    margin-left: 10px;
  }
`;
export const Submenu = styled.div`
  margin: 10px 10px 0px 10px;  
`;

export const MobileButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {

    font-style: normal;
    font-weight: 800;
    font-size: 12px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;
    color: #FF8D23;
    text-decoration: none;
    @media(min-width: 700px) {
      display: none;
    }
  }
`;

export const GetButton = styled.div`
  width: 180px;
  height: 100%;
  display: flex;
  align-items: center;
  @media(max-width: 699px) {
    display: none;
  }
`;

export const PopUpWindow = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-around;
  height: 100%;
  background-color:#FFFFFF;
  @media(min-width: 1000px) {
    display: none;
  }
  
`;

export const MobileBody = styled.div`
  width: 100%;
  height: 100%;
`;

export const MobileOption = styled.div`
  text-align: center;
  height: 320px;     
`;

export const LogoBlock = styled.div`
  margin-top: 10px;
  margin-bottom: 11px;
  display: flex;
  justify-content: center;
`;


export const MobileLogo = styled.div`
  padding-left: 0;
`;

export const MobileTopMenu = styled.div`
    padding:0;
    ul li a {
        text-decoration: none;
        color: #222222;
        font-size: 14px;
        line-height: 17px;
        font-style: normal;
        font-weight: 500;
    }
    a {
        text-decoration: none;
    }
    li span {
        color: #FF8D23;
    }
    li {
        height: 45px;
        list-style-type: none;
    }
        .sub-menu li {
            margin-left: -30px;
            margin-right: 10px;
            margin-top: 10px;
            margin-bottom: 5px;
        }
        .sub-menu {
            display: none;
            position: absolute;
            margin-left: -10px;
            width: 157px;
            background: #fff;
            box-shadow: 2px 4px 4px rgba(0, 0, 0, .25);
            z-index: 5;
            text-align: left;
        }

    font-weight: 500;
    @media(min-width: 1000px) {
            display: none;
    }
`;

export const MobileGetButton = styled.div`
    text-align: center;
    padding-left: 0;
    margin-bottom: 50px;
`;

export const CrossBlock = styled.div`
    width: 10%;
    position: absolute;
    top: 17px;
    right: 20px;
    cursor: pointer;
`;

export const Cross = styled.div`
    @media(min-width: 1000px) {
      display: none;
    }
`;
