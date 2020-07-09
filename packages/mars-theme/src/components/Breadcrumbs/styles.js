import { styled } from 'frontity';
import Link from '../link';

export const Container = styled.ol`
  width: 100%;
  padding: 15px 0;
  list-style: none;
  border-bottom: 1px solid #efefef;
  margin-top: 0;
  margin-bottom: 30px;
`;

export const Li = styled.li`
  padding: 0;
  margin: 0;
  display: inline;
  position: relative;
  
  &:after {
    content: "/";
    color: black;
    margin: 0 5px;
  }

  &:last-child {
    &:after {
      display: none;
    }
    
    a {
      color: #777777;
    }
  }
`;

export const Item = styled(Link)`
  color: black;
  transition: all .3s;
    
  &:hover {
    color: #777777;
  }
`;

export const Name = styled.span``;
