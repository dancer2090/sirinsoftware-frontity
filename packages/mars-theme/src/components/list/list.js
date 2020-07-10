import React from 'react';
import { connect } from 'frontity';
import BlogListTemplate from '../Post/Templates/BlogListTemplate';
import CaseStudiesTemplate from '../Post/Templates/CaseStudiesTemplate';
import TeamMembers from '../Post/Templates/TeamMembers';

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <>
      {data.isArchive && data.type === 'portfolio' && <CaseStudiesTemplate />}
      {data.isArchive && (data.type === 'post' || data.items[0].type === "post") && <BlogListTemplate />}
      {data.isArchive && data.type === 'teammembers' && <TeamMembers />}
    </>
  );
};

export default connect(List);
