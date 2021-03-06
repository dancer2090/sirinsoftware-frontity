import { styled, css } from 'frontity';

export const HeadBlock = styled.div`
  width: 100%;
  position: fixed;
  z-index: 30;
  box-shadow: ${(props) => (props.transparent ? 'none' : '0px 5px 10px rgba(0, 0, 0, 0.1)')};
  background-color: ${(props) => (props.transparent ? 'transparent' : '#FFFFFF')};

  ${(props) => props.isMenu && css`
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
  background-color: ${(props) => (props.transparent ? 'transparent' : '#FFFFFF')};
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
  
  @media screen and (max-width: 767px) {
    padding: 0 10px;
  }
  
  ul {
    li {
      list-style-type: none;
      a {
        text-decoration: none;
        color: ${(props) => (props.transparent ? '#FFFFFF' : '#222222')};
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
  background-color: #FFFFFF;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  margin: 0;

  & > li {
    font-weight: 400;
    font-size: 14px;
    padding: 5px 0;
    text-transform: capitalize;
    & > a {
      color: #222222 !important;
      &:hover{
        color: #FF8D23 !important;
      }
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
    display: ${(props) => (props.isMenu ? 'block' : 'none')};
    padding-bottom: 50px;
  }
  
  & > li {
    padding-left: 10px;
    padding-right: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;

    & > span {
      font-size: 11px;
      font-weight: 500;
      cursor: pointer;
      color: ${(props) => (props.transparent ? '#FFFFFF' : '#222222')};
    }

    & > a {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      transition: all 0.3s ease-in-out;
      ${(props) => props.transparent && css`
        color: #FFFFFF;

        &:hover {
          color: #FF8D23;
        }
      `}

      ${(props) => props.isMenu && css`
        padding: 12px 5px;

        &:hover {
          color: #FF8D23;
        }
      `}
    }

    @media(max-width: 1000px) {
      width: 100%;
      display: block;
      text-align: left;
      max-width: 300px;
      margin: 0 auto;

      & > span {
        text-align: left;
        display: block;
      }

      & > a {
        text-align: left;
        display: block;
      }

      & > div > ul {
        width: 100%;
        display: block;
        position: static;
        padding-left: 40px;
        box-shadow: none;
      }
    }
    &:hover {
      & > ul {
        display: block;        
      }
    }
  }
`;


export const Mobilemenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  min-width: 40px;
  justify-content: center;
  
  @media (min-width: 1000px) {
    display: none;
  }
  
  @media screen and (max-width: 767px) {
    min-width: 24px;
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
    & img{
      height: 26px;
    }
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
    cursor: pointer;
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
  ${(props) => props.transparent && css`
    & button{
      background: transparent;
      color: #FF8D23;
      font-size: 16px;
      box-shadow: none;
    }
  `}
  @media(max-width: 699px) {
    display: none;
  }
`;

export const PopUpWindow = styled.div`
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
  height: auto;     
`;

export const LogoBlock = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 11px;
  display: flex;
  justify-content: flex-start;
  padding-left: 19px;
  width: 300px;
`;


export const MobileLogo = styled.div`
  padding-left: 0;
  & img{
    height: 39px;
  }
`;

export const MobileTopMenu = styled.div`
    padding:0;
    svg {
      width: 15px;
      height: 15px;
    }
    ul li {      
      a, span {
        text-decoration: none;
        color: #222222;
        font-size: 14px;
        line-height: 17px;
        font-style: normal;
        font-weight: 500;
        display: block;
        width: 100%;
        padding: 12px 5px;
      }
    }
    li {
      height: 45px;
      list-style-type: none;
    }
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
    top: 12px;
    right: 20px;
    cursor: pointer;
`;

export const Cross = styled.div`
    @media(min-width: 1000px) {
      display: none;
    }
`;
