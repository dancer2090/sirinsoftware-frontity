import { styled } from 'frontity';
import Post from './post';
import Socials from './social-list';

const BigFrame = styled.div`
    width: 100%;
    height: 400px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 44px;
    line-height: 30px;
    color: #FFFFFF;
    background-image: url(${props => props.image});
    background-size: cover;

    @media screen and (max-width: 991px) {
        height: 350px;
        font-size: 36px;
        margin-bottom: 80px;
    }

    @media screen and (max-width: 767px) {
        height: 250px;
        font-size: 24px;
        margin-bottom: 30px;
    }
`;

const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;800&display=swap');
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

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
`;

const ArticleLeft = styled.div`
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

const ArticleContent = styled.div`
    margin-bottom: 50px;
    font-size: 14px;
    line-height: 24px;
    color: #222222;

    p {
        margin-bottom: 15px;
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

const Posts = styled.div`
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

const PostTitle = styled.h2`
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

const PostItem = styled(Post)`
    margin-bottom: 10px;

    @media screen and (max-width: 767px) {
        margin-bottom: 0;
    }
`;

const ArticleLeftHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
`;

const Date = styled.time`
    font-size: 14px;
    line-height: 30px;
    letter-spacing: 0.01em;
    color: #222222;
`;

const SocialList = styled(Socials)`
    margin-bottom: 78px;

    @media screen and (max-width: 767px) {
        margin-bottom: 40px;
    }
`;


export {
    Container,
    Wrapper,
    ArticleLeft,
    Posts,
    PostTitle,
    PostItem,
    ArticleLeftHeader,
    Date,
    ArticleContent,
    SocialList,
    BigFrame
};