import React from 'react';
import { connect } from 'frontity';
import {
  ArtContainer,
  Article,
  Title,
  ArtCategory,
  ArtDate,
  BtnRead,
  ImgContainer,
} from './styles';
import Link from '../../link';
import imgSrc from './img-src';
/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({
  libraries, item, index, state,
}) => {
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
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
  const item_image = state.source['attachment'][item.acf.blog_image];
  const mediaObj = state.source.attachment[item.featured_media];

  let category_id = 1;
  let category = {name:''};
  if(item.categories && item.categories.length>0){
    item.categories.map((p_item, index)=>{
      category_id = p_item;
    });
    category = state.source['category'][category_id];
  }
  let bgImg = imgSrc;
  if(mediaObj) bgImg = mediaObj.source_url;
  else if(item_image) bgImg = item_image.source_url;

  return (
    <Article isOdd={isOdd}>
      <ArtContainer>
        <ImgContainer 
          bgImage={bgImg}>
        </ImgContainer>
        <ArtCategory isOdd={isOdd} n={n} isClGreen={isClGreen}>{category.name}</ArtCategory>
        <ArtDate isOdd={isOdd} n={n}>{strDate}</ArtDate>
        <Link link={item.link}>
          <Title
            isClGreen={isClGreen}
            isOdd={isOdd}
            n={n}
          >
            <Html2React html={title} />
          </Title>
        </Link>
        <Link link={item.link}>
          <BtnRead isClGreen={isClGreen}>Read</BtnRead>
        </Link>
      </ArtContainer>
    </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);
