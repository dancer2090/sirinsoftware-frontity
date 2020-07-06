import React from 'react';
import { connect } from 'frontity';
import StandartTemplate from '../Templates/StandartTemplate';
import MainTemplate from '../Templates/MainTemplate';
import ServicesTemplate from '../Templates/ServicesTemplate';
import PageFullTemplate from '../Templates/PageFullTemplate';
import PageBookTemplate from '../Templates/PageBookTemplate';
import AboutUsTemplate from '../Templates/AboutUsTemplate';
import ContactsTemplate from '../Templates/ContactsTemplate';
import CaseStudiesPost from '../Templates/CaseStudiesPostTemplate';
import FaqTemplate from '../Templates/FaqTemplate';
import FullPageTemplate from '../Templates/FullPageTemplate';
import BookTemplate from '../Templates/BookTemplate';

const PostContent = ({ state, scrollRef = null }) => {
  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];
  const template = (post.template !== '' ? post.template : 'standart');

  return (
    <>
      {state.router.link === '/' && <MainTemplate scrollRef={scrollRef} />}
      {dataP.type === 'portfolio' && <CaseStudiesPost />}
      {template === 'page-faq.php' && <FaqTemplate />}
      {dataP.type === 'post' && template === 'standart' && state.router.link !== '/' && <StandartTemplate />}
      {template === 'page-services-null.php' && <ServicesTemplate />}
      {template === 'page-full.php' && <PageFullTemplate />}
      {template === 'page-book.php' && <PageBookTemplate />}
      {template === 'about-us.php' && <AboutUsTemplate />}
      {template === 'contacts.php' && <ContactsTemplate />}
      {template === 'page-full.php' && <FullPageTemplate />}
      {template === 'page-book.php' && <BookTemplate />}
    </>
  );
};
export default connect(PostContent);
