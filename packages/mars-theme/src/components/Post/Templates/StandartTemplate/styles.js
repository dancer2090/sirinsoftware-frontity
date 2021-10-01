import { styled } from 'frontity';
import Post from './post';
import Socials from './social-list';
import Button from './button';
import Breadcrumbs from '../../../Breadcrumbs';

export const WrapperPage = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Belleza:wght@100;300;800&display=swap');
    width: 100%;
    background-color: white;

    * {
        box-sizing: border-box;
    }
`;

export const Crumbs = styled(Breadcrumbs)``;

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
        line-height: 50px;
        color: #FFFFFF;
    }

    @media screen and (max-width: 991px) {
        margin-bottom: 80px;
        height: 350px;

        h1 {
            font-size: 36px;
            line-height: 40px;
        }
    }

    @media screen and (max-width: 767px) {
        height: 250px;
        margin-bottom: 30px;

        h1 {
            font-size: 24px;
            line-height: 30px;
        }
    }
`;

export const Container = styled.div`
    font-family: 'Belleza', sans-serif;
    max-width: 960px;
    width: 100%;
    margin: 0 auto;

    @media screen and (max-width: 991px) {
        max-width: 728px;
    }

    @media screen and (max-width: 767px) {
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

    img {
      max-width: 100%;
      height: auto;
    }

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

    h3 {
        font-size: 20px;
        line-height: 32px;
    }

    h4 {
        font-size: 16px;
        line-height: 28px;
    }

    a {
        color: #3a6c2c;
        text-decoration: underline;
        transition: all .3s ease-in-out;

        &:hover {
            color: #25461c;
        }
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

        h3 {
            font-size: 14px;
            line-height: 18px;
        }

        h4 {
            font-size: 10px;
            line-height: 14px;
        }
    }

:before{
    content: "";
    display: table;
    table-layout: fixed;
}
:after{
    content: "";
    display: table;
    table-layout: fixed;
}

/* Для подписей <figcaption> в теге <figure>. Нужно адаптировать под дизайн! */
.wp-caption-text {
    color: #767676;
    font-size: 0.71111em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0.5rem;
    text-align: center;
}

/* Для изображений, видео, figure и т.д. */
.alignright {float:right; margin:0 0 1em 1em}
.alignleft {float:left; margin:0 1em 1em 0}
.aligncenter {display: block; margin-left: auto; margin-right: auto}
img.alignright {float:right; margin:0 0 1em 1em}
img.alignleft {float:left; margin:0 1em 1em 0}
img.aligncenter {display: block; margin-left: auto; margin-right: auto}
a img.alignright {float:right; margin:0 0 1em 1em}
a img.alignleft {float:left; margin:0 1em 1em 0}
a img.aligncenter {display: block; margin-left: auto; margin-right: auto}
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
    font-family: 'Belleza';
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
    &:last-of-type {
        margin-bottom: 50px;
    }
    a:last-of-type {
      text-align: right;
    }

    @media screen and (max-width: 767px) {
        margin-bottom: 5px;

        &:last-of-type {
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
