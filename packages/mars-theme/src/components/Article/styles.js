import { styled } from 'frontity';
import Post from './post';
import Socials from './social-list';
import Button from './button';

export const WrapperPage = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');
    width: 100%;
    background-color: white;

    * {
        box-sizing: border-box;
    }
`;

export const BigFrame = styled.div`
    width: 100%;
    height: 400px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    background-image: url(${(props) => props.image});
    background-size: cover;

    h1 {
        margin: 0;
        font-weight: bold;
        font-size: 44px;
        line-height: 30px;
        color: #FFFFFF;
    }

    @media screen and (max-width: 991px) {
        margin-bottom: 80px;
        height: 350px;

        h1 {
            font-size: 36px;
        }
    }

    @media screen and (max-width: 767px) {
        height: 250px;
        margin-bottom: 30px;

        h1 {
            font-size: 24px;
        }
    }
`;

export const Container = styled.div`
    font-family: 'Montserrat', sans-serif;
    max-width: 960px;
    width: 100%;
    margin: 0 auto;

    @media screen and (max-width: 991px) {
        max-width: 728px;
    }

    @media screen and (max-width: 767px){
        max-width: 100%;
        padding: 0 10px;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 150px;

    @media screen and (max-width: 991px) {
        margin-bottom: 102px;
    }

    @media screen and (max-width: 767px) {
        margin-bottom: 80px;
    }
`;

export const ArticleLeft = styled.div`
    flex-grow: 2;
    width: calc(100% - 360px);
    margin-right: 60px;

    @media screen and (max-width: 991px) {
        margin-right: 28px;
        width: calc(100% - 228px);
    }

    @media screen and (max-width: 767px) {
        width: 100%;
        margin-right: 0;
        margin-bottom: 78px;
    }
`;

export const ArticleContent = styled.div`
    margin-bottom: 50px;
    font-size: 14px;
    line-height: 24px;
    color: #222222;

    p {
        margin-bottom: 15px;
        font-family: 'Open Sans', sans-serif;
    }

    h2 {
        font-weight: 800;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #216628;
        margin-top: 29px;
        margin-bottom: 14px;
    }

    @media screen and  (max-width: 767px) {
        line-height: 22px;
        font-size: 12px;
        margin-bottom: 26px;

        h2 {
            margin-top: 19px;
            margin-bottom: 23px;
            font-size: 18px;
            line-height: 18px;
        }
    }
`;

export const Posts = styled.div`
    display: block;
    width: 300px;
    min-width: 300px;

    @media screen and (max-width: 991px) {
        width: 200px;
        min-width: 200px;
    }

    @media screen and (max-width: 767px) {
        width: 100%;
        min-width: 100%;
    }
`;

export const PostTitle = styled.h2`
    font-family: 'Montserrat';
    font-size: 18px;
    font-weight: normal;
    line-height: 18px;
    text-transform: uppercase;
    color: #222222;
    margin-top: 0;
    margin-bottom: 18px;

    @media screen and (max-width: 767px) {
        text-align: center;
    }
`;

export const PostList = styled.div`
    display: block;
`;

export const PostItem = styled(Post)`
    margin-bottom: 10px;
    &:last-child {
        margin-bottom: 50px;
    }

    @media screen and (max-width: 767px) {
        margin-bottom: 5px;

        &:last-child {
            margin-bottom: 41px;
        }
    }

`;

export const ArticleLeftHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
`;

export const DateBlock = styled.time`
    font-size: 14px;
    line-height: 30px;
    letter-spacing: 0.01em;
    color: #222222;
`;

export const SocialList = styled(Socials)`
    margin-bottom: 78px;

    @media screen and (max-width: 767px) {
        margin-bottom: 40px;
    }
`;

export const BusinessButton = styled(Button)`
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);
`;
