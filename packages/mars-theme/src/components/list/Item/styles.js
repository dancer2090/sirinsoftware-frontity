import { styled } from 'frontity';
import Link from '../../link';

//const CL_TEXT = '#FFFFFF';

export const Article = styled.article`
    flex: 1 1 50%;
`;
export const ArtContainer = styled.div`
  position: relative;
`; 

export const ImgContainer = styled.div`
  width:100%;
  overflow: hidden;
  display:flex;
  justify-content:center;
  img {
    align-items:center;
    width:100%;   
  }
`;

export const ArtCategory = styled.div`
    position: absolute;
    top:1.6rem;
    left:1.6rem;
    color: #FFFFFF;
`;
export const ArtDate = styled.div`
    position: absolute;
    top:1.6rem;
    right:1.6rem;
    color: #FFFFFF;
`; 
export const ReadBtn = styled.button`
    width:100%;
    background: linear-gradient(279.98deg, #FFB03A 3.6%, #FF9233 97.69%);
`;
export const  Title = styled.h1`
    position: absolute;
    bottom:1.68rem;
    left:1.25rem;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.625rem;
    color: #FFFFFF;
`;

