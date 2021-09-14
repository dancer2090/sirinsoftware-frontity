import { styled } from 'frontity';
export const Item = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  flex-direction: ${(props) => (
    props.reverse === true
    ? 'row-reverse;'
    : 'row;'
  )};

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`;

export const Content = styled.div`
  width: calc((100% - 500px) - 42px);

  h2 {
    font-family: 'Belleza';
    font-weight: bold;
    font-size: 48px;
    line-height: 48px;
    text-transform: uppercase;
    color: ${(props) => (props.color === 'yellow'
      ? '#F8710F;'
      : '#216628;')
    };
    margin-bottom: 16px;
    margin-top: 0;
    & a{
      transition: all 0.3s ease-in-out;
      color: ${(props) => (props.color === 'yellow'
        ? '#F8710F;'
        : '#216628;')
      };
      &:hover{
        color: ${(props) => (props.color === 'yellow'
          ? '#216628;'
          : '#F8710F;')
        };
      }
    }
  }

  p {
    font-family: Open Sans;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
    margin: 0;
  }

  @media screen and (max-width: 991px) {
    width: calc((100% - 380px) - 28px);

    h2 {
      font-size: 36px;
      line-height: 36px;
      margin-bottom: 19px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;

    h2 {
      font-size: 24px;
      line-height: 24px;
      margin-bottom: 23px;
    }

    p {
      font-size: 12px;
      line-height: 17px;
    }
  }
`;

export const Frame = styled.div`
  width: 500px;
  height: 370px;
  background: 
    linear-gradient(0deg, rgba(6, 6, 6, 0.6), rgba(6, 6, 6, 0.6)), 
    url(${props => props.src});
  background-size: cover;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 991px) {
    width: 380px;
    height: 275px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 36px;
  }

  @media screen and (max-width: 575px) {
    height: 200px;
  }
`;