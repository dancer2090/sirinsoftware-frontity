import { styled } from 'frontity';

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  padding-bottom: 71px;

  .item {
    padding-top: 25px;
    padding-bottom: 15px;
    padding-left: 10px;
    padding-right: 10px;
    width: 50%;
  

    .item-content-box {
      height: 100%;
    }

    .item-box {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      border-radius: 4px;
      position: relative;
      z-index: 1;
    }

    .projects {
      ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        padding-top: 15px;
        padding-left: 0;

        li {
          width: 100%;
          font-size: 14px;
          line-height: 20px;
          color: #000000;

          a {
            color: #15552C;
            &:hover {
              color: rgba(3, 68, 27, 0.8);
            }
          }
        }
      }
    }

    .skills {
      ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        padding-top: 20px;
        padding-left: 0;
        margin: 0;

        li {
          background: #F0F0F0;
          border-radius: 6px;
          display: flex;
          align-items: center;
          color: #000000;
          font-size: 12px;
          line-height: 15px;
          padding: 8px;
          margin-right: 10px;

          @media screen and (max-width: 480px) {
            margin-top: 5px;
          }
        }
      }
    }

    .level {
      position: absolute;
      top: 14px;
      left: 0;
      padding: 8px 14px;
      font-weight: bold;
      font-size: 12px;
      line-height: 22px;
      display: flex;
      align-items: center;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #FFFFFF;
      background: #F8710F;
      box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);
      border-radius: 6px;
  
      @media screen and (max-width: 480px) {
        top: 0;
      }
    }


    .description {
      padding-top: 3px;
      font-weight: 300;
      font-size: 12px;
      line-height: 17px;
      color: #000000;
    }

    .info {
      padding-left: 20px;

      h3 {
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #404040;
        margin: 0;
        margin-bottom: 10px;
      }
    }

    .category {
      position: absolute;
      width: auto;
      padding: 4px 10px;
      border-radius: 3px;
      background: #a6c950;
      top:13px;
      text-transform: uppercase;
      color: white;
      font-weight: 900;
      left: -45px;
      z-index: 200;
      font-size: 14px;
    }

    .info-box {
      flex-grow: 2;
      display: flex;
      padding-left: 10px;

      @media screen and (max-width: 480px) {
        padding-left: 0;
      }
    }

    .image {
      overflow: hidden;
      height: 200px;
      min-width: 200px;
      background-position: top center ;
      background-repeat: no-repeat;
      background-size: cover;
  
      @media screen and (max-width: 560px) {
        height: auto;
      }

      @media screen and (max-width: 480px) {
        min-width: 100px;
        height: 100px;
        margin-top: 70px;
      }

    }
  }

  .exp {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    
    svg {
      margin-right: 7px;

      & + span {
        padding-left: 5px;
        padding-right: 5px;
        display: inline-block;
        font-weight: 700;
      }
    }

    font-size: 14px;
    line-height: 20px;
    color: #404040;
    font-weight: 500;
  }

  @media screen and (max-width: 991px) {
    .item {
      width: 100%;
    }
  }
`;
