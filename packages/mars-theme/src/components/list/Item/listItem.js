import React from "react";
import { connect } from "frontity";

import { ArtContainer, Article, Title,
        ArtCategory, ArtDate, ReadBtn, ImgContainer } from "./styles"

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  
  const author = state.source.author[item.author];
  const date = new Date(item.date);
  console.log(state.source);
  //console.log(item);
  //const category = state.source.category[].name

  return (
    <Article>
      <ArtContainer>
        <ImgContainer>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGt4EM_r-2oqcLhC7uP2o9PUKz52DB7O1Efg7JGuxk2VWJcty9&usqp=CAU"/>
        </ImgContainer>
        <ArtCategory>Category</ArtCategory>
        <ArtDate>Date</ArtDate>
        <Title>This is Title</Title>
        <ReadBtn onClick={()=>{console.log('click on button')}}>Read</ReadBtn>
      </ArtContainer>
    </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

// const StyledLink = styled(Link)`
//   padding: 15px 0;
// `;
