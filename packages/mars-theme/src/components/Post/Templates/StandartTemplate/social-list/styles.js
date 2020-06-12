import { styled } from 'frontity';
import SvgSprite from '../SvgSprite';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const Label = styled.div`
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #222222;
    margin-right: 19px;
`;

export const Socials = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
`;


export const SocialItem = styled.a`
    height: 30px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => {
    switch (props.name) {
      case 'facebook':
        return '#3B54AF';
      case 'linkedin':
        return '#0077B5';
      case 'twitter':
        return '#3DA6EA';
      default:
        return '#fff';
    }
  }};
    transition: all .3s ease-in-out;

    &:hover {
        background-color: ${(props) => {
    switch (props.name) {
      case 'facebook':
        return '#243c96';
      case 'linkedin':
        return '#006396';
      case 'twitter':
        return '#2287c7';
      default:
        return '#fff';
    }
  }};
    }
`;

export const CopyBlock = styled.div`  
    margin-left: 20px;
  
    @media screen and (max-width: 767px) {
        margin-left: 0;
        width: 100%;
        margin-top: 30px;
    }
`;

export const CopyButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    outline: none;

    &:active {
        outline: none;
    }
`;

export const CopyLink = styled.span`
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #F8710F;
    cursor: pointer;
`;

export const CopyNotification = styled.span`
    height: 40px;
    min-width: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
    font-size: 12px;
    line-height: 14px;
    color: #222222;
    position: absolute;
    left: calc(100% + 5px);
    top: -40px;
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease-in-out;
    &.show {
        opacity: 1;
        visibility: visible;
    }
`;

export const SocialIcon = styled(SvgSprite)`
    fill: white;
    width: 18px;
    height: 18px;
`;

export const CopyIcon = styled(SvgSprite)`
    width: 18px;
    height: 18px;
    margin-right: 10px;
    fill: #F8710F;
`;
