import { styled } from 'frontity';
import SvgSprite from '../SvgSprite';

const Container = styled.div`
    width; 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const Label = styled.div`
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #222222;
    margin-right: 19px;
`;

const Socials = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
`;


const SocialItem = styled.a`
    height: 30px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => {
        switch(props.name) {
            case "facebook":
                return "#3B54AF";
            case "linkedin":
                return "#0077B5";
            case "twitter":
                return "#3DA6EA";
            default:
                return "#fff";
        }
    }};
`;

const CopyBlock = styled.div`  
    margin-left: 20px;
  
    @media screen and (max-width: 767px) {
        margin-left: 0;
        width: 100%;
        margin-top: 30px;
    }
`;

const CopyButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
`;

const CopyLink = styled.span`
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

const CopyNotification = styled.span`
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
`;

const SocialIcon = styled(SvgSprite)`
    fill: white;
    width: 18px;
    height: 18px;
`;

const CopyIcon = styled(SvgSprite)`
    width: 18px;
    height: 18px;
    margin-right: 10px;
    fill: #F8710F;
`;

export {
    Container,
    Label,
    Socials,
    SocialItem,
    CopyLink,
    CopyBlock,
    CopyNotification,
    SocialIcon,
    CopyIcon,
    CopyButton
}