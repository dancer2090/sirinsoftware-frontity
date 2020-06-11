import React from 'react';
import { connect } from 'frontity';
import StandartTemplate from '../Templates/StandartTemplate';
import ServicesTemplate from '../Templates/ServicesTemplate';
import PageFullTemplate from '../Templates/PageFullTemplate';
import PageBookTemplate from '../Templates/PageBookTemplate';
import AboutUsTemplate from '../Templates/AboutUsTemplate';
import { GlobalContainer } from './styles';


const PostContent = ({ state }) => {
  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];
  const template = (post.template !== '' ? post.template : 'standart');

  return (
    <GlobalContainer>
      {template === 'standart' && <StandartTemplate />}
      {template === 'services.php' && <ServicesTemplate />}
      {template === 'page-full.php' && <PageFullTemplate />}
      {template === 'page-book.php' && <PageBookTemplate />}
      {template === 'about-us.php' && <AboutUsTemplate />}
    </GlobalContainer>
  );
};
export default connect(PostContent);
