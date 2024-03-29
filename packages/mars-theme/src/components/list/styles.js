import { styled, css } from 'frontity';

export const PaginationContainer = styled.div`
  margin-top: 16px;
  width:100%;
  display: flex;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;
  margin-bottom: 80px;

  & div{
    margin-bottom: 10px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s ease;
    transform: scale(0);
  }
  ${(props) => props.when && css`
    & div{
      visibility: visible;
      opacity: 1;
      transform: scale(1);
    }
  `}
`;
export const Text = styled.button`
  font-family: Belleza;
  font-style: normal;
  font-weight: 800;
  font-size: 1rem;
  line-height: 1.375rem;
  text-align: center;
  text-transform: uppercase;
  color: #FFAD39;
  background-color: transparent;
  border: 0px;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
  width: 100%;
  &:hover{
    background-color: transparent;
    color: #FF9233;
  }
  &:focus{
    background-color: transparent;
    color: #FF9233;
    border: 0px;
  }
  @media (max-width: 767px) {
    font-size: 1.5rem;
    line-height:1.375rem
  }
`;

export const Container = styled.section`
  width: 960px;
  margin: 30px auto 0 auto;
  padding: 20px 0;
  list-style: none;
  display: flex;
  justify-content:space-between;
  flex-wrap: wrap;
  position: relative;
 
  @media (max-width: 767px) {
    margin-top: 60px;
  }
  
 @media screen and (max-width: 991px) {
    max-width: 728px;
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
    padding: 0 10px;
    margin-top: 0;
  }
`;

export const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
