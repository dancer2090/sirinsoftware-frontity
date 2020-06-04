import React from "react";
import { connect } from "frontity";

import { ArtContainer, Article, Title,
        ArtCategory, ArtDate, BtnRead, ImgContainer } from "./styles";

const src = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYSYoU5x8OA14ndlU2b8PrCdEhNPdP1FGppAkI1cY3CRwndSJf&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbnJhIMjYUL2wZCgEOzAvj2Qd--GVUs0XMTrtc3m-DUPYljMkg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCpEdz6-CoH6HF7KjUZsylpxzoQqp-ggXYPeCbxiNYcep6cXKS&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTctK9ci2XeLB8LUneoqajdJx6eTLNPIxtRCsajd0QE0F5Fjlzx&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYVbNXkDyuyvyjWvg_Qy8pdxpP7yxWc3ahi2DRVV1R242fcAbz&usqp=CAU"  
];

const Item = ({ state, item, index }) => {
  const n=Math.floor(index/2);
  const isOdd = (index === 1) ? true : index%2;

  let isClGreen;
  if ( (n%2 === 0 && index === 2*n+1) || (n%2 && index%2 === 0) ) {
    isClGreen = true;
  } else isClGreen = false;
  
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  //console.log(item);
  //console.log(date);
  // const category = state.source.category;
  // console.log(category);

  return (
    <Article isOdd = {isOdd}>
      <ArtContainer >
        <ImgContainer>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYVbNXkDyuyvyjWvg_Qy8pdxpP7yxWc3ahi2DRVV1R242fcAbz&usqp=CAU"/>
        </ImgContainer>
        <ArtCategory>Category</ArtCategory>
        <ArtDate>Date</ArtDate>
        <Title>{item.title}</Title>
        <BtnRead onClick={()=>{console.log('click on button')}} isClGreen = {isClGreen}>Read</BtnRead>
      </ArtContainer>
    </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);