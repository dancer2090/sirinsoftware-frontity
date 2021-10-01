import { styled, css } from 'frontity';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background: #F2F2F2;
  @media(max-width: 500px){
    flex-direction: column-reverse;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  align-items: stretch;
`;
export const ImageContainer = styled.div`
  max-width: 377px;
  width: 100%;
  @media(max-width: 768px){
    max-width: 100%;
  }
`;
export const Text = styled.div`
  width: 100%;
  padding-top: 38px;
  padding-bottom: 38px;
  padding-left: 30px;
  padding-right: 10px;
  text-align: left;
  & p{
    margin-top: 0px;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 234px;
  width: 100%;
  padding: 0px;
  list-style: none;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  margin-bottom: 0px;
  @media(max-width: 1000px){
    height: auto;
  }
  @media screen and (max-width: 991px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
export const Li = styled.li`
  max-width: 273px;
  position: relative;
  padding-left: 18px;
  &:before{
    content: ' ';
    position: absolute;
    top: 9px;
    left: 0px;
    width: 8px;
    height: 8px;
    border-radius: 90px;
    background: #FF8D23;
  }
`;
