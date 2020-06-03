import {styled,css,keyframes} from 'frontity';

export const HeadBlock = styled.div `
    width: 100%;
    position: fixed;
`;

export const Header = styled.div `
  padding-right: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1920px;
  width: 100%;
  height: 76px;
  background-color: #FFFFFF;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  top: 0;
  @media(max-width: 700px) {
      padding: 0px;
      height: 66px;
  }
  @media(max-width: 320px) {
      padding: 0px;
      height: 46px;
  }
  li span {color: #FF8D23;}
  ul li a {
      text-decoration: none;
      color: #222222 !important;
       font-weight: 500;
}

a{
    text-decoration: none;
    color: #FFFFFF;
  }
  li {
      list-style-type: none;
  }
.menu li{
    margin-left: 28px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    }
    .menu ul li {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
    }
    .menu li {
        display: inline-block;
    }
    .menu ul {
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
            font-size: 15px;
            color: #77716d;
            font-weight: 400;
        }
    .sub-menu li {
        margin: 10px 10px 0px 10px;
    }
    .sub-menu {
        display: none;
        position: absolute;
        margin-left: -10px;
        width: 157 px;
        background: #fff;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, .25);
        z-index: 5;
        text-align: left;
    }

`;

export const Mobilemenu = styled.div `
@media(min-width: 1100px) {
            display: none;
        }
`;

export const Logo = styled.div `
    height: 36px;
    width: 170px;
    margin-left: 10px;
    margin-right: 20px;
@media(max-width: 1100px) {
        margin-right: 0px;
        margin-left: 0px;
    }
@media(max-width: 700px) {
        margin-right: 0px;
        margin-left: 0px;
    }
@media(max-width: 320px) {
            margin-left: 10px;
}
`;

export const MobileButton = styled.div `
@media(min-width: 700px) {
        display: none;
}



`;
export const GetButton = styled.div `
    width: 180px;
    height: 40px;
@media(max-width: 699px) {
        display: none;
}
`;


