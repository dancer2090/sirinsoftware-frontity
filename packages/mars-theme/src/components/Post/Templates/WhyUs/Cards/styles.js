import { styled, css } from 'frontity';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Card = styled.div`
  max-width: 489px;
  padding-left: 36px;
  padding-right: 36px;
  padding-top: 20px;
  padding-bottom: 20px;
  background: linear-gradient(285.93deg, #40A74A 2.66%, #216628 95.92%);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  text-align: left;
  @media screen and (max-width: 991px) {
    font-size: 14px;
    line-height: 20px;
  }
  & ul{
    padding-left: 0px;
    list-style: none;
  }
  & li{
    padding-left: 20px;
    position: relative;
    &:before{
      content: ' ';
      position: absolute;
      left: 0px;
      top: 7px;
      width: 8px;
      height: 8px;
      background: #FF8D23;
      border-radius: 260px;
    }
  }
`;

export const CardsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  @media(max-width: 1000px){
    justify-content: center;
  }
  z-index: 1;
  ${Card}:nth-child(2n){
    background: #F2F2F2;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    margin-right: 0px;
    margin-left: -18px;
    margin-top: 39px;
    color: #222222;
    z-index: 2;
    @media(max-width: 1000px){
      margin:0px;
      margin-top: 15px;
    }
  }
  ${Card}:nth-child(2n+1){
    margin-top: 15px;
    background: #F2F2F2;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    color: #222222;
  }
  ${Card}:nth-child(1){
    background: linear-gradient(285.93deg, #40A74A 2.66%, #216628 95.92%);
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    color: #fff;
  }
  ${Card}:nth-child(4){
    background: linear-gradient(285.93deg, #40A74A 2.66%, #216628 95.92%);
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    color: #fff;
  }
  ${Card}:nth-child(5){
    background: linear-gradient(285.93deg, #40A74A 2.66%, #216628 95.92%);
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    color: #fff;
  }
  ${Card}:nth-child(5){
    margin-top: -50px;
    @media(max-width: 1000px){
      margin:0px;
      margin-top: 15px;
    }
  }
`;
