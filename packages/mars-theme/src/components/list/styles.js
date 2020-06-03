import { styled } from 'frontity';
import Link from '../link';
export const Article = styled.article`
    flex: 1 1 50%;

`;
export const ArtContainer = styled.div`
  position: relative;
  padding: 15px 5px;
`; 

export const ArtCategory = styled.div`
    position: absolute;
    top:1.6rem;
    left:1.6rem;
`;
export const ArtDate = styled.div`
    position: absolute;
    top:1.6rem;
    right:1.6rem;
`; 
export const ReadBtn = styled.button`
    width:100%;
    background: linear-gradient(279.98deg, #FFB03A 3.6%, #FF9233 97.69%);
`;
export const  Title = styled.h1`
    font-size: 2rem;
    color: rgba(12, 17, 43);
    margin: 0;
    padding-top: 24px;
    padding-bottom: 8px;
    box-sizing: border-box;
`;
export const Excerpt = styled.div`
    line-height: 1.6em;
    color: rgba(12, 17, 43, 0.8);
`;
export const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;


export const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

export const StyledLink = styled(Link)`
  padding: 15px 0;
`;
