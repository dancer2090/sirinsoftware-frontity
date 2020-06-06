import React from 'react';
import { connect } from 'frontity';
import {
  ArtContainer, Article, Title,
  ArtCategory, ArtDate, BtnRead, ImgContainer,
} from './styles';

import imgSrc from './img-src';
/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item, index }) => {
  const n = Math.floor(index / 2);
  const isOdd = (index === 1) ? true : index % 2 !== 0;
  const months = ['January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'];

  let isClGreen;
  if ((n % 2 === 0 && index === 2 * n + 1) || (n % 2 && index % 2 === 0)) {
    isClGreen = true;
  } else isClGreen = false;

  // const author = state.source.author[item.author];
  const date = new Date(item.date);
  const monthDay = (date.getDate() < 10) ? (`0${date.getDate()}`) : date.getDate();
  const strDate = `${months[date.getMonth()]}.${monthDay}.${date.getFullYear()}`;
  const title = item.title.rendered;
  
  return (
    <Article isOdd={isOdd}>
      <ArtContainer>
        <ImgContainer>
          <img
            src={imgSrc[index] ? imgSrc[index]
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGt4EM_r-2oqcLhC7uP2o9PUKz52DB7O1Efg7JGuxk2VWJcty9&usqp=CAU'}
            alt="Post in blog"
          />
        </ImgContainer>
        <ArtCategory isOdd={isOdd} n={n} isClGreen={isClGreen}>Category</ArtCategory>
        <ArtDate isOdd={isOdd} n={n}>{strDate}</ArtDate>
        <Title isOdd={isOdd} n={n}>{title}</Title>
        <BtnRead isClGreen={isClGreen}>Read</BtnRead>
      </ArtContainer>
    </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);