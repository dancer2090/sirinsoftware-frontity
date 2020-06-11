import { styled } from 'frontity';

export const PaginationContainer = styled.div`
  margin-top: 2.68rem;
  width:100%;
  display: flex;
  justify-content: center;
`;
export const Text = styled.button`
  font-family: Montserrat;
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
  margin: 0;
  margin-top: 30px;
  padding: 1rem;
  padding-top: 1.75rem;
  list-style: none;
  display: flex;
  justify-content:space-between;
  flex-wrap: wrap;
  position: relative;
  @media (max-width: 767px) {
    margin-top: 60px;
  }
`;

export const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
