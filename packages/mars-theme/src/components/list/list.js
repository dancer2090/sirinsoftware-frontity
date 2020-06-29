import React from 'react';
import { connect, decode } from 'frontity';
import BlogListTemplate from '../Post/Templates/BlogListTemplate';
import CaseStudiesTemplate from '../Post/Templates/CaseStudiesTemplate';

const List = ({ state, actions }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  console.log(data);

  return (
    <>
      {data.isArchive && data.type === 'portfolio' && <CaseStudiesTemplate />}
      {data.isArchive && data.type === 'post' && <BlogListTemplate />}
    </>
  );
};

export default connect(List);
