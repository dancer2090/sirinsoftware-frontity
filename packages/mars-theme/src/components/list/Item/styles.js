import { styled } from 'frontity';
import Link from '../../link';

const CL_TEXT = '#FFFFFF';

const Text = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  color: ${CL_TEXT};
`;

export const Article = styled.article`
    flex: 1 1 46%;
    padding: ${(props) => (props.isOdd ? '5% 0 0px 10px' : '0px 10px 0px 0' )};
    @media (max-width: 767px) {
      flex: 1 1 98%;
      padding: 10px 0;
      && button {
        background: ${ (props) => ( 
          props.isOdd ? 'linear-gradient(279.98deg, #3FA54A 3.6%, #216628 97.69%)' :
            'linear-gradient(279.98deg, #FFB03A 3.6%, #FF9233 97.69%)' )
      }
    }
    
`;
export const ArtContainer = styled.div`
  position: relative;
`; 

export const ImgContainer = styled.div`
  width:100%;
  max-height:470px;
  overflow: hidden;
  display:flex;
  justify-content:center;
  img {
    width:100%;
    height:100%;
  }
 
  @media (max-width: 767px) {
    max-height:354px;
  }
  @media (max-width: 480px) {
    max-height:254px;
  }
`;

export const ArtCategory = styled(Text)`
    position: absolute;
    top:1.6rem;
    left:1.6rem;
    font-size: 1.375rem;
    line-height: 1.375rem;
    text-transform: uppercase;
    @media (max-width: 767px) {
      font-size: 0.875rem;
    }
`;
export const ArtDate = styled(Text)`
    position: absolute;
    top:1.6rem;
    right:1.6rem;
    font-size:0.875rem;
    line-height: 1.875rem;
    letter-spacing: 0.01em;
    @media (max-width: 767px) {
      font-size: 0.75rem;
    }
    
`; 
export const BtnRead = styled.button`
    width:100%;
    height:46px;
    border:none;
    background: ${ (props) => ( 
        props.isClGreen ? 'linear-gradient(279.98deg, #3FA54A 3.6%, #216628 97.69%)' :
          'linear-gradient(279.98deg, #FFB03A 3.6%, #FF9233 97.69%)'
    )}; 
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 1rem;
    line-height: 1.375rem;
    color: ${CL_TEXT};
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);
`;
export const  Title = styled.h1`
    position: absolute;
    bottom:15%;
    left:1.25rem;
    font-size: 1.5rem;
    line-height: 1.625rem;
    color: ${CL_TEXT};
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    @media (max-width: 767px) {
      font-size: 1.125rem;
      line-height:1.25rem
    }
`;

