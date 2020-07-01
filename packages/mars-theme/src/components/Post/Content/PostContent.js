import React from 'react';
import { connect } from 'frontity';
import StandartTemplate from '../Templates/StandartTemplate';
import HomeTemplate from '../Templates/HomeTemplate';
import ServicesTemplate from '../Templates/ServicesTemplate';
import PageFullTemplate from '../Templates/PageFullTemplate';
import PageBookTemplate from '../Templates/PageBookTemplate';
import AboutUsTemplate from '../Templates/AboutUsTemplate';
import ContactsTemplate from '../Templates/ContactsTemplate';
import CaseStudiesPost from '../Templates/CaseStudiesPostTemplate';
import FaqTemplate from '../Templates/FaqTemplate';
import FullPageTemplate from '../Templates/FullPageTemplate';

const PostContent = ({ state }) => {
  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];
  const template = (post.template !== '' ? post.template : 'standart');

  return (
    <>
      {state.router.link === '/' && <HomeTemplate />}
      {dataP.type === 'portfolio' && <CaseStudiesPost />}
      {template === 'page-faq.php' && <FaqTemplate />}
      {dataP.type === 'post' && template === 'standart' && state.router.link !== '/' && <StandartTemplate />}
      {template === 'page-services-null.php' && <ServicesTemplate />}
      {template === 'page-full.php' && <PageFullTemplate />}
      {template === 'page-book.php' && <PageBookTemplate />}
      {template === 'about-us.php' && <AboutUsTemplate />}
      {template === 'contacts.php' && <ContactsTemplate />}
      {template === 'page-full.php' && <FullPageTemplate />}
    </>
  );
};
export default connect(PostContent);
