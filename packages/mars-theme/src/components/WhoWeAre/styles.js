import { styled } from 'frontity';
import BigTitle from '../BigTitle/BigTitle';

export const WhoWeAreContainer = styled.div`
    padding-top: 70px;
    background: linear-gradient(271.79deg, #40A74A 0%, #216628 100%);
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);
    @media screen and (max-width: 767px) {
        padding-top: 40px;
    }
`;
export const WhyWeAreTitle = styled(BigTitle)`
    margin-top: 72px;
    height: 134px;
    @media screen and (max-width: 991px) {
        margin: 0px;
        height: 115px;
    }
    @media screen and (max-width: 767px) {
        height: 60px;
    }
    &>div:first-of-type{
        font-size: 110px;
        line-height: 1.21;
        @media screen and (max-width: 991px) {
            font-size: 96px;
        }
        @media screen and (max-width: 767px) {
            font-size: 50px;
        }
    }
`;
export const WhoWeAreBlocks = styled.div`
    margin-top: 11px;
`;
export const ImageBlock = styled.img`
    width: 48.7%;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
    @media screen and (max-width: 991px) {
        width: 100%;
    }
`;
export const TextBlock = styled.div`
    font-size: 16px;
    line-height: 1.75;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding-left: 60px;
    padding-right: 90px;
    @media screen and (max-width: 991px) {
        padding: 60px;
    }
    @media screen and (max-width: 767px) {
        padding: 30px;
        font-size: 14px;
    }
`;
export const WhoWeAreBlock = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: stretch;
    align-items: center;
    @media screen and (max-width: 991px) {
        flex-wrap: wrap;
    }
    @media screen and (max-width: 767px) {
        text-align: center;
    }
    &:nth-child(2n){
        flex-direction: row-reverse;
        & ${TextBlock}{
            padding-left: 90px;
            padding-right: 60px;
            @media screen and (max-width: 991px) {
                padding: 60px;
            }
            @media screen and (max-width: 767px) {
                padding: 30px;
                font-size: 14px;
            }
        }
    }
`;